import React, { Component } from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';


import styles from '../constant/styles';

const HomeScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    const handleEmailAddressCheck = () => {
        navigation.navigate('Email Check');
    }

    const handlePhoneNumberCheck = () => {
        navigation.navigate('Phone Check');
    }

    const handleLinkCheck = () => {
        navigation.navigate('Link Check');
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
                    <TouchableOpacity style={styles.button} onPress={handleEmailAddressCheck}>
                        <Text style={styles.buttonText}>
                            Check email
                        </Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.featureContainer}>
                <Text style={styles.featureTitle}>Phone trustworthiness</Text>
                    <Text style={styles.featureDescription}>
                        With our app, you can assess the trustworthiness of phone numbers.
                    </Text>

                    <TouchableOpacity style={styles.button} onPress={handlePhoneNumberCheck}>
                        <Text style={styles.buttonText}>
                            Check phone number
                        </Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.featureContainer}>
                <Text style={styles.featureTitle}>Link trustworthiness</Text>
                    <Text style={styles.featureDescription}>
                        Our app helps you analyze links and detect potential security threats, phishing attempts, or malicious content. You can check the trustworthiness of links before visiting them.
                    </Text>

                    <TouchableOpacity style={styles.button} onPress={handleLinkCheck}>
                        <Text style={styles.buttonText}>
                            Check link
                        </Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;