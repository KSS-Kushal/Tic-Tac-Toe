import {View, Text, Image, Animated, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {style} from './style';
import Button from '../../components/button';
import {Colors} from '../../constant/color';

const Home = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"} backgroundColor={Colors.primary} />
      <View style={style.mainContainer}>
        <View style={style.container}>
          <Text style={style.name}>Tic Tac Toe</Text>
          <View style={style.imgContainer}>
            <Image
              source={require('../../asset/home.png')}
              height={100}
              width={100}
              style={style.img}
            />
          </View>
        </View>
        <View style={style.container}>
          <Animated.View
            style={[
              style.buttonContainer,
              {
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [200, 0],
                    }),
                  },
                ],
              },
            ]}>
            <Button
              bgColor={Colors.playerText}
              color={Colors.primary}
              text={'Play with Computer'}
              onClick={() => navigation.navigate('PlayWithComputer')}
            />
            <Button
              bgColor={Colors.playerName}
              color={Colors.white}
              text={'Play with Friend'}
              onClick={() => navigation.navigate('PlayWithFriend')}
            />
            <Button
              bgColor={Colors.playerText}
              color={Colors.primary}
              text={'Multi Player'}
            />
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
