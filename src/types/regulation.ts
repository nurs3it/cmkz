export interface Regulation {
  title: string;
  description: string;
  image: string;
  files?: RegulationFile[];
}

export interface RegulationFile {
  title: string;
}
