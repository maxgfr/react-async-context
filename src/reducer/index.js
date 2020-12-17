import {
  UP, DOWN, RESET, IS_LOADING,
} from '../constants';

export const initialState = { count: 0, isLoading: false };

export default function reducer(state, action) {
  switch (action.type) {
    case UP:
      return { ...state, count: state.count + 1 };
    case DOWN:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...initialState };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
