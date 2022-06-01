import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const FirstPage = ({navigation}) => {
  const [userName, setUserName] = useState('Александр');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, styles.padd]}>
        <Text style={styles.heading}>
        Передача данных с формы
        </Text>
        <Text style={styles.textStyle}>
          Пожалуйста, Введите ваше имя
        </Text>
        {}
        <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Введите имя'}
          style={styles.inputStyle}
        />
        {}
        <Button
          title="Далее"
          onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey: userName,
            })
          }
        />
      </View>
      
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  padd: {
    bottom: -100,

  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fbeabb',
  },
});