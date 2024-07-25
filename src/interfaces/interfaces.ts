export interface IMangaList {
  metaData: {
    category: object[];
    state: object[];
    totalPages: number;
    totalStories: number;
  };
  mangaList: [];
}

export interface IMangaListBySearch {
  meta;
}
export interface IManga {
  manga: {
    title: string;
    id: string;
    image: string;
    view: string;
    chapter: string;
  };
}

export interface SoloManga {
  title: string;
  id: string;
  image: string;
  view: string;
  chapter: string;
}
