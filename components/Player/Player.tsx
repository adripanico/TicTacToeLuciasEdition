import { AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { SquareValue } from '../../store/game/game.model';

interface IPlayerProps {
  player: SquareValue;
  style?: StyleProp<TextStyle>;
  size?: number;
}

export const Player = (props: IPlayerProps) => {
  const { player, style, size } = props;

  if (player === undefined) {
    return null;
  }

  return player === 'o' ? (
    <Entypo style={style} name="circle" size={size ?? 50} />
  ) : (
    <AntDesign style={style} name="close" size={size ? size + 6 : 56} />
  );
};
