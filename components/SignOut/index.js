import React from 'react'
import { View,Text,Button } from 'react-native'

import {useAutentic} from '../../contexts/Autenticacao';

 function SignOut() {
    const {Autentic,setAutentic} =useAutentic();

     function Deslogar(){
        setAutentic(false);

    }
       

    return (
        <View>
            <Text style={{fontSize:30,margin:40}}>
                Clique aqui para:
            </Text>
            <Button
            title="Deslogar"
            onPress={Deslogar}
            />
            

        </View>
    );
}

export default SignOut;

