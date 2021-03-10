import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.text}>Type a region to list all Westeros' Houses.</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here..."
                placeholderTextColor="#828282"
            />  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1521',
    },
    title: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    input: {
        margin: 15,
        backgroundColor: '#060A11',
        color: 'white',
    },
    
});

export default SearchScreen;