import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';

import styles from '../../constant/styles';
import {API_KEY, BASE_URL} from '@env';

const LinkCheck = () => {
    const [link, setLink] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [responseValues, setResponseValues] = useState([]);


    const isValidLink = async (link, strictness = 0) => {
        const linkRegex = /^(https?:\/\/)?[a-z0-9.-]+\.[a-z]{2,}(:\d{1,5})?(\/[^@\s]+)?$/i;
        const isValidLink = linkRegex.test(link);
        
        const url = `${BASE_URL}url/${API_KEY}/${link}`;
        const params = {
            strictness: strictness,
        };
        

        const response = await axios.get(url, {params});
        console.log(response.data);

        if(isValidLink){
            // const {active, fraud_score, recent_abuse, risky, spammer} = response.data;

            // console.log("Active status: ", active);
            // console.log("Fraud score: ", fraud_score);
            // console.log("Recent abuse: ", recent_abuse);
            // console.log("Risky: ", risky);
            // console.log("Spammer: ", spammer);

            setResponseValues(response.data);
        }
    }

    const handleLinkChange = text => {
        setLink(text);
    };

    const handleLinkCheck = () => {
        setIsValid(isValidLink(link));
    };
    return (
        <View style={styles.container}>

        </View>
    )
}

export default LinkCheck;