import React, { useEffect, useState } from 'react';
import {Text} from 'react-native'

import { ScrollView } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Section = ({ route: { params: {section} } }) => {
    const [short, setShort] = useState(null);
    // useEffect(() => {
    //     const subscriber = firestore()
    //         .collection(setChoosenSection)
    //         .onSnapshot(querySnapshot => {
    //             if (!querySnapshot.empty) {
    //                 const data = [];
    //                 querySnapshot.forEach(documentSnapshot => {
    //                     data.push(documentSnapshot.data());
    //                 });
    //                 setShort(data);
    //             }
    //         });
    // });

    return (
        <ScrollView>
            <TouchableOpacity>
                <Text>{section}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
