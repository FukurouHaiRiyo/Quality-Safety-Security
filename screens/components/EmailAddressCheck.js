import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';

import styles from '../../constant/styles';
import {API_KEY} from '@env';

const EmailAddressCheck = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [responseValues, setResponseValues] = useState([]);
        
    const handleEmailChange = (text) => {
        setEmail(text);
    }

    const handleEmailValidity = () => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        const isValidEmail = regex.test(email);
        setIsValid(isValidEmail);

        if(isValidEmail){
            const API_URL = `https://www.ipqualityscore.com/api/json/email/${API_KEY}/${email}`;

            axios.get(API_URL).then(response => {
                const { fraud_score, frequent_complainer, recent_abuse, suspect } = response.data;

                console.log('Fraud Score:', fraud_score);
                console.log('Frequent Complainer:', frequent_complainer);
                console.log('Recent abuse:', recent_abuse);
                console.log('Suspect:', suspect);
            }).catch(error=>console.log('Error checking email: ', error));
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Check email address</Text>
            <TextInput style={styles.input} placeholder='Enter an email address' value={email} onChangeText={handleEmailChange}/>

            <TouchableOpacity style={styles.button} onPress={handleEmailValidity}>
                <Text style={styles.buttonText}>Check</Text>
            </TouchableOpacity>

            {isValid !== null && (
                <Text style={styles.resultText}>
                    {isValid ? 'Valid email address' : 'Invalid email address'}
                </Text>
            )}
        </View>
    )
}

export default EmailAddressCheck;