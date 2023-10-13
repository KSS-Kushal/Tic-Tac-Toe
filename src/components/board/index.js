import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {style} from './style';

const Board = ({data, onClick}) => {
  return (
    <View style={style.container}>
      <Image source={require('../../asset/board.png')} style={style.boardImg} />
      <View style={style.buttonContainer}>
        <FlatList
          data={data}
          numColumns={3}
          columnWrapperStyle={{gap: 10}}
          contentContainerStyle={{gap: 10}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                style={style.button}
                onPress={() => onClick(index)}>
                {item === 'X' || item === 'O' ? (
                  <Image
                    source={
                      item === 'X'
                        ? require('../../asset/X.png')
                        : require('../../asset/O.png')
                    }
                    style={style.XOStyle}
                  />
                ) : (
                  <Text></Text>
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Board;
