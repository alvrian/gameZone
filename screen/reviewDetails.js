import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../style/global.js';

export default function Home (){
    return(
        <View style = {globalStyles.container}> 
          <Text style = {globalStyles.titleText}>reviewDetails</Text>  
        </View>
    )
};