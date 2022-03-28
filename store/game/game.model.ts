export type SquareValue = 'x' | 'o' | undefined;

export type BoardState = {
  board: SquareValue[];
  turn: SquareValue;
  winner: { player?: SquareValue; line?: number[] };
};

export const INITIAL_BOARD_STATE: BoardState = {
  turn: 'o',
  winner: { player: undefined, line: undefined },
  board: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
};
