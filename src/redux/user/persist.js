import pick from 'ramda/src/pick';

const keys = [
  'jwt',
  'user',
];

export const initialState = {
  jwt: undefined,
};

const localStorageKey = 'user';
const pickSaved = pick(keys);

export const load = () => {
  const localStorageData = window.localStorage.getItem(localStorageKey);
  return {
    ...initialState,
    ...pickSaved(localStorageData ? JSON.parse(localStorageData) : {}),
  };
};

export const save = user => {
  const ret = pickSaved(user);
  window.localStorage.setItem(localStorageKey, JSON.stringify(ret));
  return user;
};
