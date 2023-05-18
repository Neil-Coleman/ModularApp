import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { useState, useMemo } from 'react'
import { multiply } from 'common';


export default Feature2 = () => {
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState('0');
  const result = useMemo(() => multiply(parseInt(number1), parseInt(number2)).toString());

  return (
<View>
  <Text style={styles.title}>Imports a function from the 'common' package, which is another package in this project</Text>
  <Text style={styles.heading}>Multiply numbers</Text>

  <TextInput
        style={styles.input}
        onChangeText={(val) => setNumber1(val)}
        editable={true}
        value={number1}
        placeholder="First number"
        keyboardType="numeric"
      />
      <Image style={{ height: 50, width: 50, alignSelf:'center' }} source={require('../res/multiply.jpeg')} />
      <TextInput
        style={styles.input}
        onChangeText={(val) => setNumber2(val)}
        editable={true}
        value={number2}
        placeholder="Second number"
        keyboardType="numeric"
      />
      <Text style={styles.heading}>Result</Text>
      <TextInput
        style={styles.input}
        value={result}
        placeholder="Result"
        keyboardType="numeric"
      />
</View>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
  title: {
    marginVertical: 20,
    fontSize: 18,
    textAlign: 'center'
  },
  heading: {
    fontSize: 16,
    margin: 12,
    paddingTop:50
  }
});