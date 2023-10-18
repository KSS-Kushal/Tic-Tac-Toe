import Home from '../screens/home';
import PlayWithComputer from '../screens/playWithComputer';
import PlayWithFriend from '../screens/playWithFriend';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PlayWithFriend" component={PlayWithFriend} />
      <Stack.Screen name="PlayWithComputer" component={PlayWithComputer} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default MyStack;