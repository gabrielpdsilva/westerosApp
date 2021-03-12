import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

function StackMain() {
    return (
        <Stack.Navigator initialRouteName="SearchScreen">
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{title: 'MyApp', headerStyle: {backgroundColor: '#FF773A'}}}
            />
            <Stack.Screen
                name="ResultScreen"
                component={ResultScreen}
                options={{title: 'List of Results', headerStyle: {backgroundColor: '#FF773A'}}}
            />
            <Stack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
                options={{title: 'Details', headerStyle: {backgroundColor: '#FF773A'}}}
            />
        </Stack.Navigator>
    );
}
export default StackMain;