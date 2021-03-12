import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';

const ResultScreen = ({route, navigation}) => {

    const {region} = route.params;

    const [dataLoading, setDataLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {  
        getDataFromAPI();
    }, []);

    const getDataFromAPI = () => {
        fetch(`https://anapioficeandfire.com/api/houses/?region=${region}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
            Alert.alert("Ops",
                        "Sorry, something went wrong. Returning to Home page...");
            navigation.goBack();
        })
        .finally(() => setDataLoading(false));
    }

    const ListItem = ({item}) => (
        <View>
            <TouchableOpacity onPress={() => Alert.alert("Going to next screen...")}>
                <Text>{item.name}</Text>
                <Text>{item.region}</Text>
            </TouchableOpacity>
        </View>
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

export default ResultScreen;