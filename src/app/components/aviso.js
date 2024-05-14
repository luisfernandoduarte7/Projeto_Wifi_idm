import React, { useEffect, useState} from 'react';
import { View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles} from '../../css/style'

export default function Aviso({texto, isConnected}){
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (isConnected !== null){
            setShouldAnimate(true);
            setTimeout(() => {
                setShouldAnimate(false);
            }, 5000); // define o tempo de duração da animação em milissegundos (5 segundos no exemplo)
        }
}, [isConnected]);

return(
    <View style={{alignItems: 'center'}}>
        {shouldAnimate && (
            <Animatable.View animation= "fadeIn" duration={1000} style={styles.aviso}>
                <Text>{texto}</Text>
            </Animatable.View>
        )}
    </View>
);
}
