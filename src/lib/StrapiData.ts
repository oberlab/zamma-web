import type { DownloadFilesResponse } from "../types/StrapiResponse";
import { STRAPI_URL } from "./config";

export type DownloadFile = {
  id: number;
  name: string;
  url: string;
};

export async function getDownloadFiles(): Promise<DownloadFile[]> {
  const response = await fetch(`${STRAPI_URL}/downloads`);
  const data: DownloadFilesResponse = await response.json();
  const { File } = data;

  let files: DownloadFile[] = [];
  File.forEach((file) => {
    files.push({
      id: file.id,
      name: file.Name,
      url: STRAPI_URL + file.Datei.url,
    });
  });

  return files;
}
