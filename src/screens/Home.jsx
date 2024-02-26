import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// importando o hook useNavigation
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  // criando a navegação
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Contato')}
        style={styles.button}
      >
        <Text>Contato</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Perfil')}
        style={styles.button}
      >
        <Text>Perfil</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  },
  button: {
    backgroundColor: 'lightblue',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    width: 100,
    margin: 10
  }
});