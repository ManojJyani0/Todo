import React from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import InputBox from '../components/InputBox';
import { useAuth } from '../context/Auth';
type props = {
  navigation: any;
};
const SignUpScreen = ({navigation}: props) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
  });
  const {regester} = useAuth()
  async function handleSignUP() {
    console.log(data)
    if(!data.password || !data.email){
      return;
    }
    if(data.password!==data.confirm_password)
      return
    await regester(data.email,data.password);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <InputBox
            lable="User Name"
            secureTextEntry={false}
            placeholder="Enter User Name"
            icon="user-o"
            setInputChange={value =>setData(pre => ({...pre, email: value})) }
          />
          <InputBox
            lable="Password"
            secureTextEntry={true}
            placeholder="Enter Password"
            icon="lock"
            setInputChange={value => setData(pre => ({...pre, password: value}))}
          />
          <InputBox
            lable="Confirm Password"
            secureTextEntry={true}
            placeholder="Confirm Password"
            icon="lock"
            setInputChange={value =>setData(pre => ({...pre, confirm_password: value}))}
          />

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <Button
              title="Sign Up"
              onPress={handleSignUP}
              bgColorgradient={['#009387', '#01ab9d']}
              variant="PRIMARY"
              color="#fff"
            />
            <Button
              title="Sign In"
              onPress={() => navigation.navigate('SignInScreen')}
              bgColorgradient={['#009387', '#01ab9d']}
              variant="OUTLINE"
              color="#009387"
            />
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

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
    flex: Platform.OS === 'ios' ? 3 : 5,
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
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
