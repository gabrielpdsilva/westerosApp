import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const DetailsScreen = () => {
    return (
        <View>
            <Text>GENERAL INFORMATION</Text>
            
            <View style={{flexDirection: 'row'}}>
                <Text>NAME</Text>
                <Text>Name example</Text>
            </View>
            
            <View style={{flexDirection: 'row'}}>
                <Text>REGION</Text>
                <Text>Region example</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <Text>CURRENT LORD</Text>
                <Text>Current lord example</Text>
            </View>

            <Text>MORE DETAILS</Text>

            <View style={{flexDirection: 'row'}}>           
                <Text>FOUNDER</Text>
                <Text>Founder example</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>WORDS</Text>
                <Text>Words example</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>COAT OF ARMS</Text>
                <Text>Coat of arms example</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1521',
    },
    title: {
        fontSize: 20,
        color: '#FF773A',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 15,
        color: '#FF773A',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 15,
        color: 'white'
    },
});

export default DetailsScreen;