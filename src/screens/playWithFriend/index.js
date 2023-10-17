import {View, Text, Image, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './style';
import Board from '../../components/board';
import {checkGameState} from '../../functions/checkGameState';
import Button from '../../components/button';

const PlayWithFriend = () => {
  const initialData = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  const [data, setData] = useState(initialData);
  const [turn, setTurn] = useState('X');
  const [isTurnShow, setIsTurnShow] = useState(true);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [winState, setWinState] = useState([]);
  const [winner, setWinner] = useState('');
  const [score, setScore] = useState({X: 0, O: 0});

  const onClick = item => {
    if (!isGameEnd) {
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
    }
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const playAgain = () => {
    setIsOpenModal(false);
    setIsGameEnd(false);
    setIsTurnShow(true);
    setData(initialData);
    setWinState([]);
    setWinner('');
  };

  useEffect(() => {
    const gameState = checkGameState(data);
    if (gameState.win !== 'playing') {
      setIsGameEnd(true);
      setIsOpenModal(true);
      setIsTurnShow(false);
      setWinState(gameState.winState);
      setWinner(gameState.win);
      if (gameState.win!=="draw") {
        setScore({...score, [gameState.win]: score[gameState.win]+1});
      }
    }
  }, [data]);

  return (
    <View style={style.mainContainer}>
      <View style={style.scoreContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={style.scorePlayerName}>Player 1</Text>
          <Text style={style.score}>{score.X}</Text>
        </View>
        <View>
          <Text style={style.vsText}>VS</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={style.scorePlayerName}>Player 2</Text>
          <Text style={style.score}>{score.O}</Text>
        </View>
      </View>
      <View style={style.container}>
        <Text style={style.playerText}>
          Player 1: <Text style={style.playerName}>X</Text>
        </Text>
        <Board
          data={data}
          onClick={item => onClick(item)}
          winState={winState}
        />
        <Text style={[style.playerText, {transform: [{rotate: '180deg'}]}]}>
          Player 2: <Text style={style.playerName}>O</Text>
        </Text>
      </View>
      <View style={{height: 50}}>
        <Text style={[style.turn, {display: isTurnShow ? 'flex' : 'none'}]}>
          {turn}'s Turn
        </Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpenModal}
        onRequestClose={onCloseModal}>
        <View style={style.modalMainContainer}>
          <View style={style.modalContainer}>
            {winState.length > 0 ? (
              <Text style={style.winnerText}>Player {winner} Win! </Text>
            ) : (
              <Text style={style.winnerText}>Match Draw!</Text>
            )}
            <Button text={'Play Again!'} marginTop={20} onClick={playAgain} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PlayWithFriend;
