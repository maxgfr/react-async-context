import {
  DOWN, UP, RESET, IS_LOADING,
} from '../constants';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function actions(dispatch) {
  return {
    asyncIncrement: (time) => {
      dispatch({ type: IS_LOADING, payload: true });
      sleep(time).then(() => {
        dispatch({ type: UP });
        dispatch({ type: IS_LOADING, payload: false });
      });
    },
    asyncDecrement: async () => {
      dispatch({ type: IS_LOADING, payload: true });
      await sleep(3000);
      dispatch({ type: DOWN });
      dispatch({ type: IS_LOADING, payload: false });
    },
    reset: () => dispatch({ type: RESET }),
  };
}
