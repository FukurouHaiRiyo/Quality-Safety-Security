import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../constant/styles';


const About = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>About this app</Text>
          <Text style={styles.description}>
            This app is designed to help users to verify the trustworthiness of email addresses, phone numbers, and links.
            It uses the IPQualityScore API to perform these checks. The app provides a simple interface to enter the data and
            get the trustworthiness results instantly. The user can input an email address and check if it's valid and not abusive,
            enter a phone number to verify its authenticity, and also check links to detect suspicious or malicious URLs.
        </Text>
      </View>
    );
}

export default About;