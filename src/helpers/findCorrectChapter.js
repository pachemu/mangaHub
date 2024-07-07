export const findCorrectChapter = (item) => {
    const match = item.chapter.match(/(\d+(\.\d+)?)$/);
    return match ? Math.round(parseFloat(match[0])) : null
}
