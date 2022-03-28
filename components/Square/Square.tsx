import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { movementAction } from '../../store/game/game.actions';
import { selectGameState, selectGameWinnerPositions } from '../../store/game/game.selector';
import { Player } from '../Player/Player';

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderColor: '#1565c0',
    borderWidth: 2,
    justifyContent: 'center',
  },
  squareInner: {
    textAlign: 'center',
  },
  winner: {
    color: '#1565c0',
  },
  regular: {
    color: '#212121',
  },
});

interface ISquareProps {
  pos: number;
}

export const Square = ({ pos }: ISquareProps) => {
  const state = useSelector(selectGameState);
  const dispatch = useDispatch();
  const winnerPositions = useSelector(selectGameWinnerPositions);

  return (
    <TouchableWithoutFeedback onPress={() => dispatch(movementAction({ pos }))}>
      <View style={styles.square}>
        <Player
          player={state[pos]}
          style={[styles.squareInner, winnerPositions?.includes(pos) ?? false ? styles.winner : styles.regular]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
