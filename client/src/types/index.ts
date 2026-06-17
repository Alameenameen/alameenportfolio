export interface VideoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  instagramUrl: string;
  duration: string;
}

export interface DevProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}
