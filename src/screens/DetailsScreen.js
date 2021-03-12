import React from 'react';
import {
  View,
  Text
} from 'react-native';

const DetailsScreen = () => {
    return (
        <View>
            <Text>GENERAL INFORMATION</Text>
            
            <View style={{flexDirection: 'row'}}>
                <Text>NAME</Text>
                <Text>...</Text>
            </View>
            
            <View style={{flexDirection: 'row'}}>
                <Text>REGION</Text>
                <Text>...</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <Text>CURRENT LORD</Text>
                <Text>...</Text>
            </View>

            <Text>MORE DETAILS</Text>

            <View style={{flexDirection: 'row'}}>           
                <Text>FOUNDER</Text>
                <Text>...</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>WORDS</Text>
                <Text>...</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>COAT OF ARMS</Text>
                <Text>...</Text>
            </View>
        </View>
    )
}

export default DetailsScreen;