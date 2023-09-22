import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {useTheme} from 'react-native-paper';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import {useAuth} from '../context/Auth';

// import { AuthContext } from '../components/context';

// import Users from '../model/users';

const SignInScreen = ({navigation}: any) => {
  const [data, setData] = React.useState({
    email: 'mjat@gmail.com',
    password: 'Manoj@12',
  });
  const {login} = useAuth();
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <InputBox
          setInputChange={value => setData(pre => ({...pre, email: value}))}
          lable="Email"
          secureTextEntry={false}
          icon="envelope"
          placeholder="Enter email"
        />
        <InputBox
          setInputChange={value => setData(pre => ({...pre, password: value}))}
          lable="Password"
          secureTextEntry={true}
          icon="key"
          placeholder="Enter Password"
        />

        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <Button
            title="Sign In"
            onPress={() => login(data.email, data.password)}
            bgColorgradient={['#009387', '#01ab9d']}
            variant="PRIMARY"
            color="#fff"
          />
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('SignUpScreen')}
            bgColorgradient={['#009387', '#01ab9d']}
            variant="OUTLINE"
            color="#009387"
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
});
