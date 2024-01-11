import React from 'react';
import {View, Text, Button} from 'react-native';
import {globalStyles} from '../style/global.js';

export default function reviewDetails ( {navigation}){


    return(
        <View style = {globalStyles.container}> 
          <Text>{navigation.getParam('title')}</Text>
          <Text>{navigation.getParam('body')}</Text>
          <Text>{navigation.getParam('rating')}</Text>
        </View>
    )
};