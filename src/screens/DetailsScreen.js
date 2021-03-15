import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const DetailsScreen = ({route, navigation}) => {

    const {house} = route.params;
    const [currentLord, setCurrentLord] = useState(null);
    const [founder, setFounder] = useState(null);

    useEffect(() => {  
        getCurrentLordFromAPI();
        getFounderFromAPI();
        navigation.setOptions({title: house.name});
    }, []);

    const getCurrentLordFromAPI = () => {
        fetch(house.currentLord).then((response) => response.json()).then((json) => {
            setCurrentLord(json);
        }).catch((error) => setCurrentLord(null));
    }

    const getFounderFromAPI = () => {
        fetch(house.founder).then((response) => response.json()).then((json) => {
            setFounder(json);
        }).catch((error) => setFounder(null));
    }

    return (
        <View style={styles.container}>

            <View style={{margin: 10}}>

                <Text style={styles.title}>GENERAL INFORMATION</Text>
                
                <View style={styles.horizontalView}>
                    <Text style={styles.subtitle}>NAME</Text>
                    <Text style={styles.text}>{house.name}</Text>
                </View>
                <View style={styles.horizontalView}>
                    <Text style={styles.subtitle}>REGION</Text>
                    <Text style={styles.text}>{house.region}</Text>
                </View>
                <View style={styles.horizontalView}>
                    <Text style={styles.subtitle}>CURRENT LORD</Text>
                    <Text style={styles.text}>{currentLord ? currentLord.name : "Unknown"}</Text>
                </View>

            </View>

            <View style={styles.line}/>

            <View  style={{margin: 10}}>

                <Text style={styles.title}>MORE DETAILS</Text>

                <View style={styles.horizontalView}>           
                    <Text style={styles.subtitle}>FOUNDER</Text>
                    <Text style={styles.text}>{founder ? founder.name : "Unknown"}</Text>
                </View>
                <View style={styles.horizontalView}>
                    <Text style={styles.subtitle}>WORDS</Text>
                    <Text style={styles.text}>{house.words ? house.words : "Unknown"}</Text>
                </View>
                <View style={{marginLeft: 10, alignItems: 'center'}}>
                    <Text style={styles.subtitle}>COAT OF ARMS</Text>
                    <Text style={styles.text}>{house.coatOfArms ? house.coatOfArms : "Unknown"}</Text>
                </View>
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
        fontWeight: 'bold',
        marginRight: 0
    },
    text: {
        fontSize: 15,
        color: 'white',
        marginRight: 10,
    },
    line: {
        marginTop: 5,
        borderWidth: 0.5,
        borderColor:'#5e2d0a',
    },
    horizontalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 0
    }
});

export default DetailsScreen;