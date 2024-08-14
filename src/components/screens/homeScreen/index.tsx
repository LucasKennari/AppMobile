import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../buttons/btnNavigation/btnNavigation';

export default function HomeScreen() {
    const { navigate } = useNavigation();
    function handleNavigation() {
        navigate('Details');
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title='Go to Details' onPress={handleNavigation} />
        </View>
    )

}


