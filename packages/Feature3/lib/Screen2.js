import { View, Text } from 'react-native';

export const Screen2 = () => (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Screen 2</Text>
    <Button title="Back" onPress={() => navigation.navigate("Screen 1")} />
</View>
);