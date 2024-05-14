export type DownloadFilesResponse = {
  data: {
    id: number;
    attributes: {
      Titel: string;
      Datei: {
        data: {
          id: number;
          attributes: {
            name: string;
            width: number;
            height: number;
            formats: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string;
          };
        };
      };
    };
  }[];
  meta: {};
};
