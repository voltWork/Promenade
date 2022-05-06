import {ELEMENT_SCREEN, MAIN_SCREEN, SECTION_SCREEN} from './NavigationIndex';
import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {element} from './Screens/Element';
import {main} from './Screens/Main';
import {section} from './Screens/Section';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <BaseStackScreen />
    </NavigationContainer>
  );
};
const BaseStack = createNativeStackNavigator();

const BaseStackScreen = () => {
  <BaseStack.screen name={MAIN_SCREEN} component={main} />;
  <BaseStack.screen name={SECTION_SCREEN} component={section} />;
  <BaseStack.screen name={ELEMENT_SCREEN} component={element} />;
};
