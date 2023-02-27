const descriptions = [
  'описание1',
  'описание2',
  'описание3'
];

const names = [
  'Акила',
  'Аксён',
  'Алифан',
  'Алентий',
  'Андриян',
  'Антип'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

/**
 * @template Item
 * @param {Item[]} list
 * @return {Item}
 */
const pickItemFromList = (list) => {
  const index = Math.floor(Math.random() * list.length);

  return list[index];
};

/**
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const pickIntegerInRange = (min, max) => {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
};

/**
 * @param {number} id
 * @return {CommentState}
 */

const createCommentState = (id) => {
  const commentAvatar = `img/avatar-${pickIntegerInRange(0, 6)}.svg`;
  const commentMessage = `${pickItemFromList(messages)} ${pickItemFromList(messages)}`;
  const commentName = pickItemFromList(names);

  return {id, commentAvatar, commentMessage, commentName};
};

/**
 * @param {number} length
 * @return {CommentState[]}
 */

const createCommentStateList = (length = pickIntegerInRange(1, 10)) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createCommentState(start + index));
};

/**
 * @param {number} id
 * @return {ImageState}
 */
const createImageState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromList(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comments = createCommentStateList();

  return {id, url, description, likes, comments};
};

/**
 * @param {number} length
 * @return {ImageState[]}
 */
const createImageStateList = (length = 25) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createImageState(start + index));
};
createImageStateList();
