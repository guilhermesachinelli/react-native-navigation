import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function Profile() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Inicio')}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}