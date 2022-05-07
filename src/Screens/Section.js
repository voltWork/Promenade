import React, { useEffect, useState } from 'react';

import { ScrollView } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Section = () => {
    const [short, setShort] = useState(null);
    useEffect(() => {
        const subscriber = firestore()
            .collection(setChoosenSection)
            .onSnapshot(querySnapshot => {
                if (!querySnapshot.empty) {
                    const data = [];
                    querySnapshot.forEach(documentSnapshot => {
                        data.push(documentSnapshot.data());
                    });
                    setShort(data);
                }
            });
    });

    return (
        <ScrollView>
            <TouchableOpacity>
                <Image></Image>
            </TouchableOpacity>
        </ScrollView>
    );
};
