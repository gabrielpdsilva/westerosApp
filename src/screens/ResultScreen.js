import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  StyleSheet
} from 'react-native';

const ResultScreen = ({route, navigation}) => {

    const {region} = route.params;

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {  
        getDataFromAPI();
    }, []);

    const getDataFromAPI = () => {
        fetch(`https://anapioficeandfire.com/api/houses/?region=${region}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                Alert.alert(
                    "Ops",
                    "Sorry, something went wrong.",
                    [
                        {
                            text: "Return to Homepage",
                            onPress: () => navigation.goBack()
                        }
                    ],
                    {
                        cancelable: false
                    }
                )
            })
            .finally(() => setLoading(false));
    }

    const ListItem = ({item}) => (
        <TouchableOpacity onPress={() => Alert.alert("Going to next screen...")}>
            <Text>{item.name}</Text>
            <Text>{item.region}</Text>
        </TouchableOpacity>
    )

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={({url}) => url}
                renderItem={({ item }) => (
                    <ListItem item={item}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1521',
    },
    item: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 15,
        color: '#717E91',
    },
    line: {
        borderWidth: 0.5,
        borderColor:'#131f30',
    }
});

export default ResultScreen;