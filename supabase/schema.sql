create extension if not exists "pgcrypto";

create table organisations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table profiles (
  id uuid primary key,
  organisation_id uuid references organisations(id) on delete set null,
  full_name text,
  email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table organisation_members (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations(id) on delete cascade,
  profile_id uuid not null references profiles(id) on delete cascade,
  role text not null default 'member',
  created_at timestamptz not null default now(),
  unique (organisation_id, profile_id)
);

create table projects (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations(id) on delete cascade,
  name text not null,
  sector text,
  riba_stage text,
  status text not null default 'draft',
  progress numeric not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table project_members (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  profile_id uuid not null references profiles(id) on delete cascade,
  role text not null default 'viewer',
  created_at timestamptz not null default now(),
  unique (project_id, profile_id)
);

create table deliverables (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  title text not null,
  status text not null default 'not_started',
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table documents (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  title text not null,
  document_type text,
  status text,
  storage_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table rfi_items (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  title text not null,
  owner text,
  status text not null default 'open',
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table project_risks (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  risk text not null,
  impact text,
  owner text,
  status text not null default 'open',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table project_decisions (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  decision text not null,
  owner text,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table project_milestones (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  name text not null,
  due_date date,
  status text not null default 'scheduled',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table project_activity (
  id uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,
  activity_type text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create table enquiries (
  id uuid primary key default gen_random_uuid(),
  organisation_name text,
  name text not null,
  email text not null,
  telephone text,
  sector text,
  location text,
  estimated_value text,
  services text[],
  project_stage text,
  message text not null,
  created_at timestamptz not null default now()
);

create index idx_projects_org on projects(organisation_id);
create index idx_documents_project on documents(project_id);
create index idx_rfis_project on rfi_items(project_id);
create index idx_risks_project on project_risks(project_id);
create index idx_activity_project_created on project_activity(project_id, created_at desc);

alter table organisations enable row level security;
alter table profiles enable row level security;
alter table organisation_members enable row level security;
alter table projects enable row level security;
alter table project_members enable row level security;
alter table deliverables enable row level security;
alter table documents enable row level security;
alter table rfi_items enable row level security;
alter table project_risks enable row level security;
alter table project_decisions enable row level security;
alter table project_milestones enable row level security;
alter table project_activity enable row level security;
alter table enquiries enable row level security;

-- Draft policies. Tighten before production authentication is enabled.
create policy "members can read organisation projects" on projects
  for select using (
    exists (
      select 1 from organisation_members om
      where om.organisation_id = projects.organisation_id
      and om.profile_id = auth.uid()
    )
  );

create policy "members can read project documents" on documents
  for select using (
    exists (
      select 1 from project_members pm
      where pm.project_id = documents.project_id
      and pm.profile_id = auth.uid()
    )
  );
