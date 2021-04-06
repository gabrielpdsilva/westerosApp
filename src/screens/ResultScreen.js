import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

const ResultScreen = ({route, navigation}) => {

    const {region} = route.params;

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        getDataFromAPI();
    }, [pageSize]);

    const getDataFromAPI = () => {
        fetch(`https://anapioficeandfire.com/api/houses/?region=${region}&pageSize=${pageSize}`)
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

    const handleLoadMore = () => {
        setPageSize(pageSize + 10);
    };

    const ListItem = ({item}) => (
        <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('DetailsScreen', {house: item})}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.region}</Text>
            <View style={styles.line}/>
        </TouchableOpacity>
    )

    if(isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#FF773A" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={({url}) => url}
                onEndReachedThreshold={0.01}
                onEndReached={handleLoadMore}
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
    listItem: {
        marginLeft: 10,
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
        marginTop: 5,
        borderWidth: 0.5,
        borderColor:'#131f30',
    }
});

export default ResultScreen;