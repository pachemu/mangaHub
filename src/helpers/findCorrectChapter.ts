interface Item {
  chapter: String;
}

export const findCorrectChapter = (item: Item): number | null => {
  const match = item.chapter.match(/(\d+(\.\d+)?)$/);
  return match ? Math.round(parseFloat(match[0])) : null;
};
