const cyrillicToLatinMap: { [key: string]: string } = {
  а: 'f',
  б: ',',
  в: 'd',
  г: 'u',
  д: 'l',
  е: 't',
  ё: '`',
  ж: ';',
  з: 'p',
  и: 'b',
  й: 'q',
  к: 'r',
  л: 'k',
  м: 'v',
  н: 'y',
  о: 'j',
  п: 'g',
  р: 'h',
  с: 'c',
  т: 'n',
  у: 'e',
  ф: 'a',
  х: '[',
  ц: 'w',
  ч: 'x',
  ш: 'i',
  щ: 'o',
  ъ: ']',
  ы: 's',
  ь: 'm',
  э: "'",
  ю: '.',
  я: 'z',
  А: 'F',
  Б: '<',
  В: 'D',
  Г: 'U',
  Д: 'L',
  Е: 'T',
  Ё: '~',
  Ж: ':',
  З: 'P',
  И: 'B',
  Й: 'Q',
  К: 'R',
  Л: 'K',
  М: 'V',
  Н: 'Y',
  О: 'J',
  П: 'G',
  Р: 'H',
  С: 'C',
  Т: 'N',
  У: 'E',
  Ф: 'A',
  Х: '{',
  Ц: 'W',
  Ч: 'X',
  Ш: 'I',
  Щ: 'O',
  Ъ: '}',
  Ы: 'S',
  Ь: 'M',
  Э: '"',
  Ю: '>',
  Я: 'Z',
};

function cyrillicToKeyboard(text: string): string {
  return text
    .split('')
    .map((char) => cyrillicToLatinMap[char] || char)
    .join('');
}

export function reverseToEnglish(text: string): string {
  const cyrillicPattern = /[а-яА-ЯёЁ]/;
  if (cyrillicPattern.test(text)) {
    return cyrillicToKeyboard(text);
  }
  return text;
}
