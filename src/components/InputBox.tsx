import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-paper';
type Props = {
  lable?: string;
  secureTextEntry: boolean;
  icon?: string;
  placeholder?: string;
  setInputChange: Dispatch<SetStateAction<any>>;
};

const InputBox = ({
  lable,
  secureTextEntry,
  icon,
  placeholder,
  setInputChange,
}: Props) => {
  const {colors} = useTheme();
  const [updateSecureTextEntry, setState] = useState<boolean>(true);
  return (
    <View>
      <Text
        style={[
          styles.text_footer,
          {
            color: colors.text,
          },
        ]}>
        {lable}
      </Text>
      <View style={styles.action}>
        {icon && (
          <>
            
            <View style={{width: 20,}}>
              <FontAwesome name={icon} color={colors.text} size={20} />
            </View>
          </>
        )}

        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: colors.text,
            },
          ]}
          secureTextEntry={secureTextEntry ? updateSecureTextEntry : false}
          autoCapitalize="none"
          onChangeText={val => setInputChange(val)}
        />
        <View style={{width: 20}}>
          {secureTextEntry && (
            <TouchableOpacity onPress={() => setState(!updateSecureTextEntry)}>
              {updateSecureTextEntry === true ? (
                <Feather name="eye-off" color={colors.text} size={20} />
              ) : (
                <Feather name="eye" color={colors.text} size={20} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
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
});
