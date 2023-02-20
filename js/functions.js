// Функция для проверки длины строки

function checkLengthofStr(str, length) {
  return str.length <= length;
}
checkLengthofStr('Вика учит JS', 12);

/*второй вариант
const checkLengthofStr = (str, length) => str.length <= length;
checkLengthofStr('Вика учит JS', 12);*/

//Функция для проверки, является ли строка палиндромом

function isPalindrome(param) {
  const str = param.toLowerCase().replaceAll(' ','').split('');
  let flag = true;

  for (let i = 0; i <= str.length - 1; i++) {
    for (let j = str.length - 1 - i; j >= str.length - 1 - i; j--) {
      if (str[i] !== str[j]) {
        flag = false;
      }
    }
  }
  return flag !== false;
}

isPalindrome('Лёша на полке клопа нашёл ');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

function getNum(param) {
  const str = param.replaceAll(' ', '');
  let num = '';
  for (let i = 0; i <= str.length - 1; i++) {
    if (+str[i] === Number(str[i])) {
      num += str[i];
    }
  }
  if (+num === 0) {
    return NaN;
  }
  return Math.floor(num);
}
getNum('а я томат');

/*второй вариант
function getNum(param) {
  const str = String(param);
  let num = '';
  for (let i = 0; i <= str.length - 1; i++) {
    if (!Number.isNaN(parseInt(str[i]))) {
      num += str[i];
    }
  }
  return parseInt(num);
}
getNum();*/


/*Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.*/

const myPadStart = (str, minLength, pad) => {
  const actualPad = minLength - str.length;

  if(actualPad <= 0) {
    return str;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + str;
};

myPadStart('q', 4, 'we');
