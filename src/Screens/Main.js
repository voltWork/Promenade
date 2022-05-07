import { Button, HStack, IconButton } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';

import { SECTION_SCREEN } from '../NavigationIndex';
import { useNavigation } from '@react-navigation/native';

export const Main = () => {
    const [ChoosenSection, setChoosenSection] = useState();
    const navigation = useNavigation();
    const handleChoose = value => () => {
        navigation.navigate(SECTION_SCREEN, { section: value });
    };
    return (
        <View backgroundcolor={'#ffffff'}>
            <Image source={require('./picture/map.png')} />
            <HStack w='100%' space={2} px='2' mt='4'>
                <Button size='sm' backgroundColor="#eab308" flex={1} variant='outline' onPress={handleChoose('places')}>
                    Места
                </Button>

                <Button size='sm' backgroundColor="#eab308" flex={1} variant='outline' onPress={handleChoose('mushrooms')}>
                    Грибы
                </Button>
            </HStack>
            <HStack w='100%' space={2} px='2' mt='4'>
                <Button size='sm' backgroundColor="#eab308" flex={1} variant='outline' onPress={handleChoose('animals')}>
                    Животные
                </Button>

                <Button size='sm' backgroundColor="#eab308" flex={1} variant='outline' onPress={handleChoose('flowers')}>
                    Растения
                </Button>
            </HStack>
        </View>
    );
};
