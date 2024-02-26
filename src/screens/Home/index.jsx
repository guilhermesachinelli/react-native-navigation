import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// importando o hook useNavigation
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
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
