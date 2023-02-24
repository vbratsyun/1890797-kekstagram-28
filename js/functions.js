//1. Функция для проверки длины строки
/**
 * Проверит проходит ли строка по длине
 * @param {string} target
 * @param {number} length
 * @return {boolean}
 */
const fitsLength = (target, length) => target.length <= length;
fitsLength('Вика учит JS', 12);

//2. Функция для проверки, является ли строка палиндромом
/**
 * Проверит является ли строка(или число) палиндромом
 * @param {string|number} target
 * @return {boolean}
 */
const isPalindrome = (target) => {
  const normalized = String(target).replaceAll(' ', '').toLowerCase();
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
};

isPalindrome('Лёша на полке клопа нашёл ');

//3. Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
/**
 * Извлечет из строки(или числа) цифры от 0 до 9
 * @param {string|number} target
 * @return {number}
 */
const parseDigits = (target) => {
  const digits = String(target).replace(/[^0-9]/g, '');

  return digits ? Number(digits) : NaN;
};

parseDigits('а я томат');
parseDigits(1.5);

/*4. Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.*/
/**
 * Добавит в начало строки символы другой строки.
 * В результате исходная строка достигнет заданной длины
 * @param {string} target
 * @param {number} length
 * @param {string} pad
 * @return {string}
 */


const myPadStart = (target, length, pad) => {
  const start = pad.repeat(length);

  return `${start}${target}`.slice(-length);
};

myPadStart('1', 2, '0');

