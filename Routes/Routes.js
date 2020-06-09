import React from 'react'
import { View } from 'react-native'
import {useAutentic} from '../contexts/Autenticacao';

import Sign from '../components/Sign'
import SignOut from '../components/SignOut'

function Routes() {
    const {Autentic,setAutentic}=useAutentic();
    return (
        <View>
            {Autentic ? (<SignOut/>):(<Sign/>)}
        </View>
    )
}

export default Routes
