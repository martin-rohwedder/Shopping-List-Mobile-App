import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ShoppingListScreen from './screens/ShoppingListScreen';
import AddItemScreen from './screens/AddItemScreen';

const Tab = createBottomTabNavigator();

// Set to null to remove notifications
const badgeNumber = 4;

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        
                        if (route.name === 'ShoppingListScreen') {
                            iconName = focused ? 'ios-cart' : 'ios-cart';
                        }
                        else if (route.name === 'AddItemScreen') {
                            iconName = focused ? 'ios-basket' : 'ios-basket';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    }
                })}
                tabBarOptions={{
                    activeTintColor: '#C00000',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="ShoppingListScreen" component={ShoppingListScreen} options={{ tabBarBadge: badgeNumber ,tabBarLabel: 'Indkøbsliste' }} />
                <Tab.Screen name="AddItemScreen" component={AddItemScreen} options={{ tabBarLabel: 'Tilføj Vare' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
