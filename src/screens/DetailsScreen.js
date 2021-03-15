import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const DetailsScreen = ({route}) => {

    const {house} = route.params;
    const [currentLord, setCurrentLord] = useState("");
    const [founder, setFounder] = useState("");

    useEffect(() => {  
        getLordsFromAPI();
    }, []);

    const getLordsFromAPI = () => {
        fetch(house.currentLord).then((response) => response.json()).then((json)  => {
            setCurrentLord(json);
        }).then(()=> {
                fetch(house.founder).then((response) => response.json()).then((json) => {
                setFounder(json);
            }).catch((error) => setFounder(null));
        }).catch((error) => setCurrentLord(null));
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
                <Text style={styles.subtitle}>COAT OF ARMS</Text>
                <Text style={styles.text}>{house.coatOfArms ? house.coatOfArms : "Unknown"}</Text>
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
        marginRight: 50
    },
    text: {
        fontSize: 15,
        color: 'white'
    },
    line: {
        marginTop: 5,
        borderWidth: 0.5,
        borderColor:'#5e2d0a',
    },
    horizontalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20
    }
});

export default DetailsScreen;