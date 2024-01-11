import React, { useState } from 'react';
import Home from './screen/Home.js'
import * as Font from 'expo-font';
import Apploading from 'expo-app-loading';



const getFonts = () => {
  Font.loadAsync( {
    'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/Fonts/Nunito-Bold.ttf')
  })
}

export default function App() {
const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Home />
    )
  }else{
    return(
      <Apploading 
        startAsync = {getFonts}
        onFinish = {() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

}
