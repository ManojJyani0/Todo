import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import {useAuth} from '../context/Auth';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
function RootNavigation(): JSX.Element {
  const [initializing, setinitializing] = useState<boolean>(true);

  const {setUser, user} = useAuth();
  const onAuthStateChanged = (state: FirebaseAuthTypes.User | null) => {
    setUser(state);
    console.log(state, 'state');
    if (initializing) setinitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default RootNavigation;
