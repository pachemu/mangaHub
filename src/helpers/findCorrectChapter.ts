export const findCorrectChapter = (
  chapter: string | undefined,
): number | undefined | null => {
  if (chapter) {
    const match = chapter.match(/(\d+(\.\d+)?)$/);
    return match ? Math.round(parseFloat(match[0])) : null;
  }
  return 1;
};
