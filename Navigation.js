import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from './screens/Home';
import About from './screens/About';
import EmailAddressCheck from './screens/components/EmailAddressCheck';
import PhoneNumberCheck from './screens/components/PhoneNumberCheck';
import LinkCheck from './screens/components/LinkCheck';


function Navigation(){
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline';
                    } else if (route.name === 'About') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    } else if (route.name === 'Email Check'){
                        iconName = focused ? 'ios-mail' : 'ios-mail-outline'
                    } else if (route.name === 'Phone Check'){
                        iconName = focused ? 'ios-call' : 'ios-call-outline'
                    } else if (route.name === 'Link Check'){
                        iconName = focused? 'ios-link' : 'ios-link-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Home" component={Home} />

                <Tab.Screen name="Email Check" component={EmailAddressCheck} />
                <Tab.Screen name="Phone Check" component={PhoneNumberCheck} />
                <Tab.Screen name="Link Check" component={LinkCheck} />

                <Tab.Screen name="About" component={About} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;