export type ProjectStatus = "On track" | "Watch" | "Action required";

export type DemoProject = {
  id: string;
  name: string;
  client: string;
  sector: string;
  stage: string;
  status: ProjectStatus;
  progress: number;
  description: string;
  disciplines: Array<{ name: string; progress: number }>;
  metrics: Array<{ label: string; value: string; detail: string }>;
  rfis: Array<{ id: string; title: string; owner: string; due: string; status: string }>;
  risks: Array<{ id: string; risk: string; impact: string; owner: string; status: string }>;
  documents: Array<{ id: string; title: string; type: string; status: string; updated: string }>;
  activity: Array<{ id: string; date: string; text: string }>;
  milestones: Array<{ id: string; name: string; date: string; status: string }>;
  decisions: Array<{ id: string; decision: string; owner: string; status: string }>;
  team: Array<{ name: string; role: string; organisation: string }>;
};

export const demoProjects: DemoProject[] = [
  {
    id: "north-west-healthcare-infrastructure-upgrade",
    name: "North West Healthcare Infrastructure Upgrade",
    client: "Demo NHS Estate Client",
    sector: "Healthcare",
    stage: "RIBA Stage 4",
    status: "On track",
    progress: 78,
    description:
      "Demonstration project for phased LV infrastructure renewal, lighting upgrades and clinical resilience planning across a live healthcare estate.",
    disciplines: [
      { name: "Electrical design", progress: 82 },
      { name: "Lighting", progress: 68 },
      { name: "Coordination", progress: 74 },
      { name: "Specification", progress: 90 },
      { name: "QA review", progress: 55 },
    ],
    metrics: [
      { label: "Outstanding RFIs", value: "6", detail: "2 require client information" },
      { label: "Design risks", value: "8", detail: "3 high priority" },
      { label: "Information required", value: "5", detail: "Survey records and shutdown windows" },
      { label: "Upcoming milestones", value: "4", detail: "Next 30 days" },
    ],
    rfis: [
      { id: "RFI-014", title: "Confirm generator test regime", owner: "Client estates", due: "18 Jul 2026", status: "Open" },
      { id: "RFI-017", title: "Existing DB schedule gaps", owner: "NEXA", due: "21 Jul 2026", status: "In review" },
      { id: "RFI-019", title: "Shutdown window for Ward C riser", owner: "Main contractor", due: "24 Jul 2026", status: "Open" },
    ],
    risks: [
      { id: "RSK-03", risk: "Limited spare capacity at main LV panel", impact: "Programme and scope risk", owner: "NEXA", status: "Mitigation proposed" },
      { id: "RSK-07", risk: "Incomplete emergency-lighting records", impact: "Survey validation required", owner: "Client", status: "Information required" },
      { id: "RSK-11", risk: "Phased shutdown constraints", impact: "Clinical continuity risk", owner: "Project team", status: "Workshop planned" },
    ],
    documents: [
      { id: "DOC-101", title: "Electrical design report", type: "Report", status: "Draft issued", updated: "09 Jul 2026" },
      { id: "DOC-118", title: "LV single-line diagram", type: "Drawing", status: "QA review", updated: "08 Jul 2026" },
      { id: "DOC-126", title: "Lighting calculation pack", type: "Calculation", status: "In progress", updated: "07 Jul 2026" },
    ],
    activity: [
      { id: "ACT-01", date: "10 Jul 2026", text: "Coordination comments added to riser strategy." },
      { id: "ACT-02", date: "09 Jul 2026", text: "Draft specification uploaded for review." },
      { id: "ACT-03", date: "08 Jul 2026", text: "Risk register updated after estates workshop." },
    ],
    milestones: [
      { id: "MS-01", name: "Stage 4 electrical package", date: "24 Jul 2026", status: "On track" },
      { id: "MS-02", name: "Client technical review", date: "31 Jul 2026", status: "Scheduled" },
      { id: "MS-03", name: "Tender issue", date: "14 Aug 2026", status: "Watch" },
    ],
    decisions: [
      { id: "DEC-02", decision: "Retain generator interface with revised controls monitoring.", owner: "Client estates", status: "Approved" },
      { id: "DEC-05", decision: "Adopt phased ward shutdown strategy.", owner: "Clinical lead", status: "Pending" },
    ],
    team: [
      { name: "NEXA Lead Engineer", role: "Electrical lead", organisation: "NEXA" },
      { name: "Client Estates Lead", role: "Technical stakeholder", organisation: "Demo NHS Estate Client" },
      { name: "Architectural Coordinator", role: "Design coordination", organisation: "Demo Architect" },
    ],
  },
];
