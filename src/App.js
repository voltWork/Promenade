/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native';

import { NativeBaseProvider } from 'native-base';
import { Navigation } from './Navigation';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
                <Navigation />
            </SafeAreaProvider>
        </NativeBaseProvider>
    );
}
