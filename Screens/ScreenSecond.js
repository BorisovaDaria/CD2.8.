import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const SecondPage = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container,styles.padd]}>
        
        <Text style={styles.textStyle}>
          Здравствуйте, {route.params.paramKey}
        </Text>
      </View>
      
    </SafeAreaView>
  );
};

export default SecondPage;

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
  padd: {
    bottom: -100,
    

  },
  textStyle: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 10,
  },
});