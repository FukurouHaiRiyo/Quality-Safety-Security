import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Touchable} from 'react-native';
import axios from 'axios';

import styles from '../../constant/styles';
import {API_KEY, BASE_URL} from '@env';

const LinkCheck = () => {
    const [link, setLink] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [responseValues, setResponseValues] = useState([]);


    const validLink = async (link, strictness = 0) => {
        const linkRegex = /^(https?:\/\/)?[a-z0-9.-]+\.[a-z]{2,}(:\d{1,5})?(\/[^@\s]+)?$/i;
        const isValidLink = linkRegex.test(link);
        
        const url = `${BASE_URL}url/${API_KEY}/${link}`;
        const params = {
            strictness: strictness,
        };
        

        axios.get(url, {params}).then(response => {
            const {risk_score, suspicious, unsafe} = response.data;

            console.log("Risky: ", risk_score);
            console.log("Suspicious: ", suspicious);
            console.log("Unsafe: ", unsafe);


            console.log(response.data);

            setResponseValues(response.data);
        }).catch(error => console.log('Error checking link: ', error));
    }

    const handleLinkChange = text => {
        setLink(text);
    };

    const handleLinkCheck = () => {
        setIsValid(validLink(link));
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Check link </Text>
            <TextInput style={styles.input} placeholder='Enter a link' valie={link} onChangeText={handleLinkChange}/>

            <TouchableOpacity style={styles.button} onPress={handleLinkCheck}>
                <Text style={styles.buttonText}>Check</Text>
            </TouchableOpacity>

            
        </View>
    )
}

export default LinkCheck;