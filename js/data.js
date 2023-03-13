import {pickItemFromList, pickIntegerInRange} from './util.js';

const DESCRIPTIONS = [
  'описание1',
  'описание2',
  'описание3'
];

const NAMES = [
  'Акила',
  'Аксён',
  'Алифан',
  'Алентий',
  'Андриян',
  'Антип'
];

const MESSAGES = [
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

/**
 * @param {number} id
 * @return {CommentState}
 */
const createCommentState = (id) => {
  const avatar = `img/avatar-${pickIntegerInRange(1, 6)}.svg`;
  const message = `${pickItemFromList(MESSAGES)} ${pickItemFromList(MESSAGES)}`;
  const name = pickItemFromList(NAMES);

  return {id, avatar, message, name};
};

/**
 * @param {number} length
 * @return {CommentState[]}
 */
const createCommentStateList = (length) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createCommentState(start + index));
};

/**
 * @param {number} id
 * @return {PictureState}
 */
const createPictureState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromList(DESCRIPTIONS);
  const likes = pickIntegerInRange(15, 200);
  const comments = createCommentStateList(pickIntegerInRange(1, 10));

  return {id, url, description, likes, comments};
};

/**
 * @param {number} length
 * @return {PictureState[]}
 */
const createPictureStateList = (length = 25) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createPictureState(start + index));
};

export default createPictureStateList;
