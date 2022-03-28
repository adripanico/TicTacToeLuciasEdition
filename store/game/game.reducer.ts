import { SquareValue } from './../GameStore';
import { createReducer } from '@reduxjs/toolkit';
import { movementAction, resetAction } from './game.actions';

import { INITIAL_BOARD_STATE } from './game.model';

const seekWinner = (boardState: SquareValue[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (boardState[a] && boardState[a] === boardState[b] && boardState[b] === boardState[c]) {
      return { player: boardState[a], line: [a, b, c] };
    }
  }
  return { player: undefined, line: undefined };
};

export const gameReducer = createReducer(INITIAL_BOARD_STATE, (builder) => {
  builder.addCase(resetAction, (state) => {
    state = INITIAL_BOARD_STATE;
    return state;
  });

  builder.addCase(movementAction, (state, action) => {
    if (state.board[action.payload?.pos] === undefined) {
      state.board[action.payload?.pos] = state.turn;
      state.winner = seekWinner(state.board);
      state.turn = state.turn === 'o' ? 'x' : 'o';
    }
  });
});

export default gameReducer;
