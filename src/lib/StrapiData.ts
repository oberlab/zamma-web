import type {DownloadFilesResponse, HeroContentResponse} from "../types/StrapiResponse";
import {STRAPI_URL} from "./config";

export const getHeroContent = async () => {
  const response = await fetch(`${STRAPI_URL}/api/hero-content`);
  const data: HeroContentResponse = await response.json();
  return data.data.attributes.Inhalt;
}

export type DownloadFile = {
  id: number;
  name: string;
  url: string;
};

export async function getDownloadFiles(): Promise<DownloadFile[]> {
  const response = await fetch(`${STRAPI_URL}/api/downloadss?populate=Datei`);
  const data: DownloadFilesResponse = await response.json();
  const Files = data.data;

  let files: DownloadFile[] = [];
  for (const file of Files) {
    const id = file.attributes.Datei.data.id;
    const name = file.attributes.Titel;
    const url = STRAPI_URL + file.attributes.Datei.data.attributes.url;
    files.push({id, name, url});
  }

  return files;
}
