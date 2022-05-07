import { ELEMENT_SCREEN, MAIN_SCREEN, SECTION_SCREEN } from './NavigationIndex';
import React from 'react';

import { Element } from './Screens/Element';
import { NavigationContainer } from '@react-navigation/native';
import { Section } from './Screens/Section';
import { Main } from './Screens/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BaseStack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <BaseStack.Navigator>
                <BaseStack.Screen name={MAIN_SCREEN} component={Main} />
                <BaseStack.Screen name={SECTION_SCREEN} component={Section} />
                <BaseStack.Screen name={ELEMENT_SCREEN} component={Element} />
            </BaseStack.Navigator>
        </NavigationContainer>
    );
};
