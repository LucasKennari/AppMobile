import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../buttons/btnNavigation/btnNavigation';
import { useNavigation } from '@react-navigation/native';

export default function DetailsScreen() {
    const { navigate } = useNavigation();
    function handleNavigation() {
        navigate('Home');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title='Go to Home' onPress={handleNavigation} />
        </View>
    )

}


