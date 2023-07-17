import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import styles from '../../constant/styles';

const EmailAddressCheck = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
        
    const handleEmailChange = (text) => {
        setEmail(text);
    }

    const handleEmailValidity = () => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        const isValidEmail = regex.test(email);
        setIsValid(isValidEmail);
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