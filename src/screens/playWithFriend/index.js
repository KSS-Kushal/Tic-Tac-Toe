import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import Board from '../../components/board';

const PlayWithFriend = () => {
  const [data, setData] = useState([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ]);
  const [turn, setTurn] = useState('X');
  const onClick = item => {
    const nextData = data.map((v, i) => {
      if (i === item) {
        if (v !== 'X' && v !== 'O') {
          if (turn === 'X') {
            setTurn('O');
            return 'X';
          } else {
            setTurn('X');
            return 'O';
          }
        } else {
          return v;
        }
      } else {
        return v;
      }
    });
    setData(nextData);
  };
  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        <Text style={style.playerText}>
          Player 1: <Text style={style.playerName}>X</Text>
        </Text>
        <Board data={data} onClick={item => onClick(item)} />
        <Text style={[style.playerText, {transform: [{rotate: '180deg'}]}]}>
          Player 2: <Text style={style.playerName}>O</Text>
        </Text>
      </View>
      <Text style={style.turn}>{turn}'s Turn</Text>
    </View>
  );
};

export default PlayWithFriend;
