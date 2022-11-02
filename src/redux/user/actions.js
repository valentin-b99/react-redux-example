export const LOAD = 'USER/LOAD';
export const load = () => ({ type: LOAD });

export const SET = 'USER/SET';
export const set = user => ({ type: SET, payload: user });

export const UPDATE = 'USER/UPDATE';
export const update = user => ({ type: UPDATE, payload: user });

export const RESET = 'USER/RESET';
export const reset = () => ({ type: RESET, payload: null });
