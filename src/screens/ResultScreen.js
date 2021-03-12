import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';

const ResultScreen = ({route, navigation}) => {

    const [dataLoading, setDataLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {  
        getDataFromAPI();
    }, []);

    const getDataFromAPI = () => {
        //TODO...
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