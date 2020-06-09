import React,{useState} from 'react'
import { View, Button,Text, TextInput } from 'react-native'
import auth from '@react-native-firebase/auth'

import {useAutentic} from '../../contexts/Autenticacao';


 function Sign() {
    const {Autentic,setAutentic}=useAutentic();
    const [Usuario, setUsuario] = useState('.')
    const [Senha, setSenha] = useState('.')
    const [msgErro,setMsgErro]= useState(false)

    function Logar(){
        auth()
        .signInWithEmailAndPassword(Usuario,Senha)
        .then(() => {
            setAutentic(true);
          console.log('Usuario Logado');
        })
        .catch(error => {   
          console.log(error);
          setAutentic(false);
          setMsgErro(true)
        });


        // setCount(true);
        // console.log(Usuario);
        // console.log(Senha)
    }
    
    
    
    return (
        <View>
            <Text style={{fontSize:30,margin:40}}>
                Faça o login:
            </Text>
            <TextInput
            placeholder={'E-mail'}
            onChangeText={text=>setUsuario(text)}
            />
            <TextInput
            placeholder={'Senha'}
            onChangeText={e=>setSenha(e)}
            />
            <Button
            title="Logar"
            onPress={Logar}
            />
            {msgErro ?(<Text>Usuario ou senha Incorretos</Text>):(<Text>Insira Usuario e senha</Text>)}
            
            

        </View>
    );
}

export default Sign;


