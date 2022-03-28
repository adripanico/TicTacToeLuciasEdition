import { RootState } from './rootReducer';

export type ISelector<T> = (state: RootState) => T;

export const gameSelector = (state: RootState) => state.game;
