import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetAction } from '../../store/game/game.actions';
import { SquareValue } from '../../store/game/game.model';
import { selectGameEnded, selectGameTurn, selectGameWinnerPlayer } from '../../store/game/game.selector';
import { Player } from '../Player/Player';
import { Square } from '../Square/Square';

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
  emojis: {
    fontSize: 30,
    marginBottom: 30,
    opacity: 0,
  },
  showEmojis: {
    opacity: 1,
  },
  board: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  reset: {
    marginTop: 100,
  },
  hidden: {
    opacity: 0,
  },
  headerPlayer: {
    fontSize: 20,
  },
});

const Header = () => {
  const turn = useSelector(selectGameTurn);
  const winnerPlayer = useSelector(selectGameWinnerPlayer);
  const endedGame = useSelector(selectGameEnded);

  if (winnerPlayer) {
    return (
      <Text style={styles.header}>
        ¡¡ Ha ganado <Player style={styles.headerPlayer} player={winnerPlayer} /> !!
      </Text>
    );
  } else if (endedGame) {
    return <Text style={styles.header}>¡¡ Ha sido empate !!</Text>;
  } else {
    return (
      <Text style={styles.header}>
        Turno de <Player style={styles.headerPlayer} player={turn} />
      </Text>
    );
  }
};

const getRandomEmoji = () => {
  const emojis = ['🎉', '🥳', '💃', '🕺🏿', '💙', '🐸', '🍀'];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export const Board = () => {
  const dispatch = useDispatch();
  const endedGame = useSelector(selectGameEnded);
  const winnerPlayer = useSelector(selectGameWinnerPlayer);

  return (
    <>
      <Header />

      <Text style={[styles.emojis, winnerPlayer && styles.showEmojis]}>{getRandomEmoji()}</Text>

      <View style={styles.board}>
        <View style={styles.row}>
          <Square pos={0} />
          <Square pos={1} />
          <Square pos={2} />
        </View>
        <View style={styles.row}>
          <Square pos={3} />
          <Square pos={4} />
          <Square pos={5} />
        </View>
        <View style={styles.row}>
          <Square pos={6} />
          <Square pos={7} />
          <Square pos={8} />
        </View>
      </View>

      <View style={[styles.reset, !endedGame && styles.hidden]}>
        <Button title="EMPEZAR" onPress={() => dispatch(resetAction())} />
      </View>
    </>
  );
};
