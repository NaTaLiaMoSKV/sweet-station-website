export const ADD_CUP = 'ADD_CUP';
export const ADD_TEA_SET = 'ADD_TEA_SET';
export const CUPS_AND_BOMBS = 'CUPS_AND_BOMBS';
export const COCOA_BOMBS = 'COCOA_BOMBS';
export const MINI_BOMBS = 'MINI_BOMBS';
export const MAXI_BOMBS = 'MAXI_BOMBS';

export const addCup = (cup) => ({
  type: ADD_CUP,
  payload: cup,
});

export const addTeaSet = (teaSet) => ({
  type: ADD_TEA_SET,
  payload: teaSet,
});

export const addCupsAndBombs = (cupsAndBombs) => ({
  type: CUPS_AND_BOMBS,
  payload: cupsAndBombs,
});

export const addCocoaBombs = (cocoaBombs) => ({
  type: COCOA_BOMBS,
  payload: cocoaBombs,
});

export const addMiniBombs = (miniBombs) => ({
  type: MINI_BOMBS,
  payload: miniBombs,
});

export const addMaxiBombs = (maxiBombs) => ({
  type: MAXI_BOMBS,
  payload: maxiBombs,
});

