export type DownloadFilesResponse = {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  File: {
    id: number;
    Name: string;
    Datei: {
      id: number;
      name: string;
      alternativeText: string;
      caption: string;
      width: number | null;
      height: number | null;
      formats: string[] | null;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: string | null;
      created_at: string;
      updated_at: string;
    };
  }[];
};
