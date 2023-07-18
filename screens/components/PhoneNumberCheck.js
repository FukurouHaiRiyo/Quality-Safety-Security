import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';

import styles from '../../constant/styles';
import {API_KEY, BASE_URL} from '@env';


const PhoneNumberCheck = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [responseValues, setResponseValues] = useState([]);


    const isValidPhone = async (phoneNumber, country, strictness = 0) => {
        const phoneNumberRegex = /^\d{10}$/; // Assuming the phone number should be 10 digits
        const isValidPhone = phoneNumberRegex.test(phoneNumber);
        
        const url = `${BASE_URL}phone/${API_KEY}/${phoneNumber}`;
        const params = {
            country: country,
            strictness: strictness,
        };
        

        const response = await axios.get(url, {params});
        console.log(response.data);

        if(isValidPhone){
            const {active, fraud_score, recent_abuse, risky, spammer} = response.data;

            console.log("Active status: ", active);
            console.log("Fraud score: ", fraud_score);
            console.log("Recent abuse: ", recent_abuse);
            console.log("Risky: ", risky);
            console.log("Spammer: ", spammer);

            setResponseValues(response.data);
        }
    }

    const handlePhoneNumberChange = text => {
        setPhoneNumber(text);
    };

    const handleCheckPhoneNumber = () => {
        setIsValid(isValidPhone(phoneNumber));
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Check phone number</Text>
            <TextInput style={styles.input} placeholder='Enter a phone number' value={phoneNumber} onChangeText={handlePhoneNumberChange}/>
            <TouchableOpacity style={styles.button} onPress={handleCheckPhoneNumber}>
                <Text style={styles.buttonText}>Check</Text>
            </TouchableOpacity>

            {isValid !== null && (
                <Text style={styles.responseText}>
                    {isValid ? 'Phone is valid' : 'Invalid phone number'}
                </Text>
            )}
        </View>
    )
}

export default PhoneNumberCheck;