import { gameReducer } from './game/game.reducer';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
