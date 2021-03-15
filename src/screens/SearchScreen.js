import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const SearchScreen = ({navigation}) => {

    const [selectedRegion, setSelectedRegion] = useState();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.text}>Select a region to list all Westeros' Houses from the chosen location.</Text>
            <Picker
                style={styles.picker}
                selectedValue={selectedRegion}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedRegion(itemValue);
                    navigation.push('ResultScreen', {region: itemValue});
                }
            }>
                <Picker.Item label="North" value="the+north" />
                <Picker.Item label="Iron Islands" value="iron+islands" />
                <Picker.Item label="Riverlands" value="the+riverlands" />
                <Picker.Item label="Vale" value="the+vale" />
                <Picker.Item label="Westerlands" value="the+westerlands" />
                <Picker.Item label="Stormlands" value="the+stormlands" />
                <Picker.Item label="Reach" value="the+reach" />
                <Picker.Item label="Crownlands" value="the+crownlands" />
                <Picker.Item label="Dorne" value="dorne" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1521',
    },
    picker: {
        backgroundColor: '#060A11',
        margin: 15,
        color: '#828282'
    },
    title: {
        marginTop: 80,
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
    
});

export default SearchScreen;