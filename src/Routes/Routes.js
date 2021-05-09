import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/authentcation/SignInScreen';
import SignUpScreen from '../screens/authentcation/SignUpScreen';
import ForgotPasswordScreen from '../screens/authentcation/ForgotPasswordScreen';

import BotNav from './BotNav';
import ProfileScreen from '../screens/profile/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

import { connect } from 'react-redux';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = (Token) => {
    return (
        <NavigationContainer>
            {Token.Token == null ?
                (
                    <Stack.Navigator headerMode="none">
                        <Stack.Screen name="SignInScreen" component={SignInScreen} />
                        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                    </Stack.Navigator>

                ) : (
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Catagories') {
                                    iconName = focused
                                        ? 'ios-information-circle'
                                        : 'ios-information-circle-outline';
                                    if (focused) { return <FontAwesome5 name={'puzzle-piece'} size={23} color={'black'} />; } else { return <FontAwesome5 name={'puzzle-piece'} size={23} color={'silver'} />; }
                                } else if (route.name === 'Profile') {
                                    iconName = focused ? 'ios-list-box' : 'ios-list';
                                    if (focused) { return <FontAwesome5 name={'user'} size={23} color={'black'} />; } else { return <FontAwesome5 name={'user'} size={23} color={'silver'} />; }

                                }

                                // You can return any component that you like here!
                            },
                        })}
                        tabBarOptions={{
                            activeTintColor: 'black',
                            inactiveTintColor: 'silver',
                            style: { height: 60 },
                            labelStyle: { fontSize: 12,marginTop:'-3%',marginBottom:'3%' },
                        }}
                    >
                        <Tab.Screen name="Catagories" component={BotNav} />
                        <Tab.Screen name="Profile" component={ProfileScreen} />
                    </Tab.Navigator>

                )
            }
        </NavigationContainer >
    );
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        Token: state.authReducer.Token,
    };
};

export default connect(mapStateToProps)(Routes);
