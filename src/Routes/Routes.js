import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/authentcation/SignInScreen';
import SignUpScreen from '../screens/authentcation/SignUpScreen';
import ForgotPasswordScreen from '../screens/authentcation/ForgotPasswordScreen';

import BotNav from './BotNav';
import ProfileScreen from '../screens/profile/ProfileScreen';



import { connect } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        // Token: state.Token,
    };
};

const Routes = ({ Token }) => {
    console.log(Token);
    return (
        <NavigationContainer>
            {Token == null ?
                (
                    <Stack.Navigator headerMode="none">
                        <Stack.Screen name="SignInScreen" component={SignInScreen} />
                        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                    </Stack.Navigator>

                ) : (
                    <Tab.Navigator>
                        <Tab.Screen name="Catagories" component={BotNav} />
                        <Tab.Screen name="Profile" component={ProfileScreen} />
                    </Tab.Navigator>

                )
            }
        </NavigationContainer >
    );
};




export default connect(mapStateToProps)(Routes);
