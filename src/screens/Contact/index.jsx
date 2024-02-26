import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
export default function Contact() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Inicio')}
                style={styles.button}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}