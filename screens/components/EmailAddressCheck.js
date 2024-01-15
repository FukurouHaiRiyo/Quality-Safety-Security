import React, { useState } from 'react';
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
                const { fraud_score, recent_abuse, suspect } = response.data;

                console.log('Fraud Score:', fraud_score);
                console.log('Recent abuse:', recent_abuse);
                console.log('Suspect:', suspect);
                console.log('Response:', response)
                console.log(API_KEY)

                setResponseValues(response.data);
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

            {isValid !== null && Object.keys(responseValues).length > 0 && (
                <View style={styles.responseContainer}>
                    <Text style={[styles.responseText, styles.responseTitle]}>Fraud score: {responseValues.fraud_score}</Text>
                    <Text style={styles.responseText}>
                        - Represents how fraudulent the mail is (value bigger than 75 means that the mail is suspicious)
                    </Text>

                    <Text style={[styles.responseText, styles.responseTitle]}>
                        Recent Abuse: {responseValues.recent_abuse}
                    </Text>
                    <Text style={styles.responseText}>
                        - This value will indicate if there has been any recent abuse for this email address
                    </Text>

                    <Text style={[styles.responseText, styles.responseTitle]}>
                        Suspect: {responseValues.suspect}
                    </Text>
                    <Text style={styles.responseText}>
                        - This value says if the email is suspect or not
                    </Text>
                </View>
            )}
        </View>
    )
}

export default EmailAddressCheck;