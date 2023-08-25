import { ADD_CUP, ADD_TEA_SET, CUPS_AND_BOMBS, COCOA_BOMBS, MINI_BOMBS, MAXI_BOMBS } from './actions';
import { combineReducers } from 'redux';

const cupsState = [{
    id: 1,
    name: 'Чашечка печиво',
    image: '/cup1.webp',
    description: ['Ароматна і хрумка чашечка з печива, з якої можна пити.', 'Замовлення від 4 шт.'],
    price: '69',
    oldPrice: '79',
}];
const teaSetState = [];
const cupsAndBombsState = [];
const cocoaBombsState = [];
const miniBombsState = [];
const maxiBombsState = [];

const cupsReducer = (state = cupsState, action) => {
    switch (action.type) {
        case ADD_CUP:
            return state;
        default:
            return state;
    }
};
const teaSetReducer = (state = teaSetState, action) => {
    switch (action.type) {
        case ADD_TEA_SET:
            return state;
        default:
            return state;
    }
};

const cupsAndBombsReducer = (state = cupsAndBombsState, action) => {
    switch (action.type) {
        case CUPS_AND_BOMBS:
            return state;
        default:
            return state;
    }
};

const cocoaBombsReducer = (state = cocoaBombsState, action) => {
    switch (action.type) {
        case COCOA_BOMBS:
            return state;
        default:
            return state;
    }
};

const miniBombsReducer = (state = miniBombsState, action) => {
    switch (action.type) {
        case MINI_BOMBS:
            return state;
        default:
            return state;
    }
};

const maxiBombsReducer = (state = maxiBombsState, action) => {
    switch (action.type) {
        case MAXI_BOMBS:
            return state;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    cups: cupsReducer,
    teaSet: teaSetReducer,
    cupsAndBombs: cupsAndBombsReducer,
    cocoaBombs: cocoaBombsReducer,
    miniBombs: miniBombsReducer,
    maxiBombs: maxiBombsReducer,
});

export default rootReducer;
