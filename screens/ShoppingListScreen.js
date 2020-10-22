import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ShoppingListScreen = () => (
    <View style={styles.container}>
        <Text>Shopping List Screen</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ShoppingListScreen;

