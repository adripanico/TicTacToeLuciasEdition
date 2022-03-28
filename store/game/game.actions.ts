import { createAction } from '@reduxjs/toolkit';

enum ACTIONS {
  MOVEMENT = 'game/movement',
  RESET = 'game/reset',
}

export const movementAction = createAction<{ pos: number }>(ACTIONS.MOVEMENT);

export const resetAction = createAction(ACTIONS.RESET);
