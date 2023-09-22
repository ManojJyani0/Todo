import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListItem from '../components/ListItem';

import {Slider} from '@miblanchard/react-native-slider';
import {SelectList} from 'react-native-dropdown-select-list';
import InputBox from '../components/InputBox';
import Button from '../components/Button';

import {useAuth} from '../context/Auth';
import {AddTodo, getAllTodo} from '../api';

const categoryList = ['Do Now!', 'Do tomorrow!', 'Do soon.', 'Do when you get some Extra time'];

const HomeScreen = ({navigation}: any) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [priority, setPriority] = useState<number>(0);
  const [formData, setFormData] = useState({
    title: '',
    description:"",
    category: '',
  });
  const {colors} = useTheme();
  const {logOut, user} = useAuth();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getAllTodo()
      .then(data => {
        // console.log(data);
        setTodos(data);
      })
      .catch(e => console.log(e));
  }, []);
  function addTodo() {
    AddTodo({userId: user.uid, ...formData, priority})
      .then(data => setTodos(pre=>([...pre,data])))
      .catch(e => console.log(e));
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Today's Tasks.</Text>
        <TouchableOpacity onPress={() => logOut()}>
          <MaterialIcons name={'logout'} color={'#FFFFFF'} size={40} />
        </TouchableOpacity>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <View style={styles.actionBox}>
          <Text>Add What your want to do later on...</Text>
          <TouchableOpacity onPress={() => setShowForm(!showForm)}>
            <MaterialIcons name={'add'} color={'#009387'} size={20} />
          </TouchableOpacity>
        </View>
        {showForm && (
          <View>
            <InputBox
              placeholder="Title"
              secureTextEntry={false}
              setInputChange={value =>
                setFormData(pre => ({...pre, title: value}))
              }
            />
            <InputBox
              placeholder="Discripstion"
              secureTextEntry={false}
              setInputChange={value =>
                setFormData(pre => ({...pre, description: value}))
              }
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <SelectList
                dropdownStyles={{overflow: 'hidden'}}
                setSelected={(val: string) => setFormData(pre=>({...pre,category:val}))}
                data={categoryList}
                search={false}
                maxHeight={100}
                save="value"
                onSelect={() => console.log('selected')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <Text>Low</Text>
                <Slider
                  containerStyle={{width: '50%'}}
                  value={priority}
                  onValueChange={value => setPriority(Number(value) * 10)}
                />
                <Text>Heigh</Text>
              </View>
            </View>
            <Button
              title="Add Todo"
              variant="PRIMARY"
              bgColorgradient={['#009387', '#01ab9d']}
              color="#ffffff"
              onPress={addTodo}
            />
          </View>
        )}
        <ScrollView style={styles.viewBox}>    
          {Array.isArray(todos) && todos?.map(item => (
            <ListItem key={item?._id} todo={item} />
          ))}
            
  

        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 9,
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
  actionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 12,
    paddingBottom: 5,
  },
  viewBox: {
    shadowColor: '#000',
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 20,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    // borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 5,
    color: '#05375a',
  },
});
