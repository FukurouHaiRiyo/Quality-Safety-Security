import * as React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../constant/styles';

const About = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>About!</Text>
        
      </View>
    );
}

export default About;