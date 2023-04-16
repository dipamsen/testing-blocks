export interface CodingTrainVideo {
  title: string;
  description: string;
  videoNumber: string;
  videoId: string;
  nebulaSlug: string;
  date: Date;
  languages: string[];
  topics: string[];
  canContribute: boolean;
  relatedChallenges: string[];
  timestamps: Timestamp[];
  codeExamples: CodeExample[];
  groupLinks: GroupLink[];
  credits: Credit[];
}

export interface CodeExample {
  title: string;
  description: string;
  image: string;
  urls: Urls;
}

export interface Urls {
  p5: string;
  processing: string;
}

export interface Credit {
  title: string;
  name: string;
}

export interface GroupLink {
  title: string;
  links: Link[];
}

export interface Link {
  icon: string;
  title: string;
  url: string;
  description: string;
}

export interface Timestamp {
  time: string;
  title: string;
}
