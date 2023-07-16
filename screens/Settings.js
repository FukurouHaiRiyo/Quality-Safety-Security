import * as React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../constant/styles';

const SettingsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings!</Text>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
}

export default SettingsScreen;