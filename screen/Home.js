import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../style/global.js';



export default function Home ({ navigation }){

    const [reviews, setReviews] = useState ([
      {title: 'Zelda, the breath of you', rating: 5, body: 'lorem ipsum', key: 1},
      {title: 'Gotta chath them all', rating: 4, body: 'lorem ipsum', key: 2},
      {title: 'not so "final"  Fantasy', rating: 3, body: 'lorem ipsum', key: 3},
    ])
  
    return(
        <View style = {globalStyles.container}> 
          <FlatList 
            data = {reviews}
            renderItem={({item}) => (
              <TouchableOpacity onPress = {() => navigation.navigate('reviewDetails', item)}> 
                <Text style = {globalStyles.titleText}>{item.title}</Text>

              </TouchableOpacity>
            )}  
          />
        </View>
    )
};