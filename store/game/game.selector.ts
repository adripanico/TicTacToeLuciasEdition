import { createSelector } from '@reduxjs/toolkit';
import { gameSelector, ISelector } from '../rootSelector';
import { BoardState, SquareValue } from '../game/game.model';

export const selectGameState: ISelector<SquareValue[]> = createSelector(
  gameSelector,
  (state: BoardState) => state.board,
);

export const selectGameTurn: ISelector<SquareValue> = createSelector(gameSelector, (state: BoardState) => state.turn);

export const selectGameWinnerPlayer: ISelector<SquareValue | undefined> = createSelector(
  gameSelector,
  (state: BoardState) => state.winner?.player,
);

export const selectGameWinnerPositions: ISelector<number[] | undefined> = createSelector(
  gameSelector,
  (state: BoardState) => state.winner?.line,
);

export const selectGameEnded: ISelector<boolean> = createSelector(gameSelector, (state: BoardState) => {
  if (state.winner.player) {
    return true;
  } else {
    return state.board.filter((square) => square === undefined).length === 0;
  }
});
