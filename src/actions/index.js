import {
  DOWN, UP, RESET, IS_LOADING,
} from '../constants';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function asyncIncrement(dispatch, time) {
  dispatch({ type: IS_LOADING, payload: true });
  sleep(time).then(() => {
    dispatch({ type: UP });
    dispatch({ type: IS_LOADING, payload: false });
  });
}

export async function asyncDecrement(dispatch) {
  dispatch({ type: IS_LOADING, payload: true });
  await sleep(3000);
  dispatch({ type: DOWN });
  dispatch({ type: IS_LOADING, payload: false });
}

export function reset(dispatch) {
  dispatch({ type: RESET });
}

export default function createActions(dispatch) {
  return {
    up: () => dispatch({ type: 'up' }),
    down: () => dispatch({ type: 'down' }),
    reset: () => dispatch({ type: 'reset' }),
  };
}
