import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {useTheme} from '@react-navigation/native';
import Button from '../components/Button';
type props = {
  navigation: any;
};
const OnBordingScreen = ({navigation}: props) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton={1500}
          source={require('../../assets/images/133.jpg')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          Stay productive and focused on what matters most...
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("SignInScreen")}><Text style={styles.text}>Sign in with account</Text></TouchableOpacity>
        <View style={styles.button}>
        <Button title='Get Started' onPress={()=>navigation.navigate("SignUpScreen")} icon="navigate-next" variant='SECONDARY' color='#FFF' bgColorgradient={["#009387","#009396"]}/>
        </View>
      </Animatable.View>
    </View>
  );
};

export default OnBordingScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 100,
  },
  title: {
    color: '#05375a',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
});
