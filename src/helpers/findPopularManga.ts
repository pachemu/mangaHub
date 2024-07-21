interface Manga {
  id: string;
  image: string;
  title: string;
  chapter: string;
  view?: string;
  description: string;
}

export function findPopularManga(mangaList: Manga[]): Manga | undefined {
  if (mangaList.length === 0) {
    return undefined;
  }
  let mostPopularManga: Manga | undefined = undefined;
  let maxViews: number = 0;

  for (const manga of mangaList) {
    if (manga.view) {
      let views: number;
      if (manga.view.endsWith('M')) {
        views = parseFloat(manga.view.replace('M', '')) * 1_000_000;
      } else if (manga.view.endsWith('K')) {
        views = parseFloat(manga.view.replace('K', '')) * 1_000;
      } else {
        views = parseInt(manga.view);
      }

      if (views > maxViews) {
        maxViews = views;
        mostPopularManga = manga;
      }
    }
  }
  return mostPopularManga || mangaList[0];
}
