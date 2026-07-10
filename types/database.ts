export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          organisation_id: string;
          name: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          organisation_id: string;
          name: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          status?: string;
          updated_at?: string;
        };
      };
    };
  };
};
