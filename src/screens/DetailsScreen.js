import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const DetailsScreen = () => {
    return (
        <View style={styles.container}>

            <View style={{margin: 10}}>

                <Text style={styles.title}>GENERAL INFORMATION</Text>
                
                <View style={styles.horizontalView}>
                    <Text style={styles.subtitle}>NAME</Text>
                    <Text style={styles.text}>Name example</Text>
                </View>
                <View style={styles.horizontalView}>
                    <Text style={styles.subtitle}>REGION</Text>
                    <Text style={styles.text}>Region example</Text>
                </View>
                <View style={styles.horizontalView}>
                    <Text style={styles.subtitle}>CURRENT LORD</Text>
                    <Text style={styles.text}>Current lord example</Text>
                </View>

            </View>

            <View style={styles.line}/>

            <View  style={{margin: 10}}>

                <Text style={styles.title}>MORE DETAILS</Text>

                <View style={styles.horizontalView}>           
                    <Text style={styles.subtitle}>FOUNDER</Text>
                    <Text style={styles.text}>Founder example</Text>
                </View>
                <View style={styles.horizontalView}>
                    <Text style={styles.subtitle}>WORDS</Text>
                    <Text style={styles.text}>Words example</Text>
                </View>
                <View style={styles.horizontalView}>
                    <Text style={styles.subtitle}>COAT OF ARMS</Text>
                    <Text style={styles.text}>Coat of arms example</Text>
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