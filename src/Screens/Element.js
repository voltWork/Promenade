import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export const Element = () => {
    const [part, setPart] = useState([
        {
            title: 'Лиса',
            description: 'рыжая ведьма',
        },
    ]);

    return (
        <View>
            <Text>{part.title}</Text>
            <Text>{part.description}</Text>
        </View>
    );
};
