import React from 'react';
import {ScrollView, View, Text, Button, Image} from 'react-native';

import styles from '../constant/styles';

const HomeScreen = ({navigation}) => {
    const handleEmailAddressCheck = () => {
        navigation.navigate('EmailAddressCheck');
    }

    const handlePhoneNumberCheck = () => {
        navigation.navigate('PhoneNumberCheck');
    }

    const handleLinkCheck = () => {
        navigation.navigate('LinkCheckCheck');
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <Text style={styles.title}>Quality, Safety, Security</Text>
            <Text style={styles.description}>
                Our app provides comprehensive trustworthiness checks for various information types. You can verify the following: 
            </Text>

            <View style={styles.featureContainer}>
                <Text style={styles.featureTitle}>Email address trustworthiness</Text>
                    <Text style={styles.featureDescription}>
                        Our app enables you to check the trustworthiness of email addresses. It helps you identify potential risks and determine 
                        if an email address is valid and trustworthy.
                    </Text>

                    <Button title='Check email address' onPress={handleEmailAddressCheck}/>
            </View>

            <View style={styles.featureContainer}>
                <Text style={styles.featureTitle}>Phone trustworthiness</Text>
                    <Text style={styles.featureDescription}>
                        With our app, you can assess the trustworthiness of phone numbers.
                    </Text>

                <Button title='Check phone number' onPress={handlePhoneNumberCheck}/>
            </View>

            <View style={styles.featureContainer}>
                <Text style={styles.featureTitle}>Link trustworthiness</Text>
                    <Text style={styles.featureDescription}>
                        Our app helps you analyze links and detect potential security threats, phishing attempts, or malicious content. You can check the trustworthiness of links before visiting them.
                    </Text>

                <Button title='Check link trustworthiness' onPress={handleLinkCheck}/>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;