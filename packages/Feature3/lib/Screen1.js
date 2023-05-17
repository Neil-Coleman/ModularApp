import { View, Text, Button, Image } from 'react-native';

export default Screen1 = ({ navigation }) => (
    <View>
      <Text style={{ marginVertical: 20, fontSize: 18, textAlign: 'center'}}>Navigate between modules in this project</Text>
      <Button title="Feature 1" onPress={() => navigation.navigate("Feature 1")} />
      <Button title="Feature 2" onPress={() => navigation.navigate("Feature 2")} />
      <Image style={{ height: 300, marginTop: 50 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SF_XQkdE2hh0XiTFXW3us3DH-j0JsErWHA&usqp=CAU'}} />
      <Text style={{ marginVertical: 20, fontSize: 18, textAlign: 'center'}}>Navigate between screens in this module</Text>
      <Button title="Next" onPress={() => navigation.navigate("Screen 1")} />
    </View>
  );