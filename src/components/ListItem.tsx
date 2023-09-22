import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {deleteTodo, getAllTodo, toggleTodo} from '../api';
type Props = {
  todo:any
};
const stat: string[] = ['Pending', 'Success', 'Failed'];
const ListItem = ({todo}: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [status, setStatus] = useState<'Pending' | 'Success' | 'Failed'>(
    'Pending',
    );
    

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#f5f5f7',
        padding: 2,
        borderRadius: 10,
        marginVertical:4
      }}>
      <View style={[styles.container]}>
        <BouncyCheckbox
          size={25}
          fillColor="#009387"
          unfillColor="#FFFFFF"
          isChecked={todo.isComplete}
          text={todo.title}
          iconStyle={{borderColor: '#009387'}}
          innerIconStyle={{borderWidth: 2, borderColor: '#009387'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={(isChecked: boolean) => toggleTodo(todo._id)}
        />
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}
          style={{flex: 1, height: 30}}></TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(todo._id)}>
          <MaterialIcons name={'delete'} color={'#009387'} size={25} />
        </TouchableOpacity>
      </View>
      {show && (
        <View>
          <Text>
            {todo.description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
});
