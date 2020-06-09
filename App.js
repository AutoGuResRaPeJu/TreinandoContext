import React from 'react'
import { View } from 'react-native'



import Routes from './Routes/Routes'
import AutenticaProvider from './contexts/Autenticacao';

function App() {
  return (
      <View>
        <AutenticaProvider>
        <Routes/>
        </AutenticaProvider>
      </View>
  )
}

export default App;