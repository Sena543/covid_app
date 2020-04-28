import React, { useState } from 'react';
import {
    Text,
    View,
    Modal,
    TouchableHighlight,
    FlatList,
    Image
  } from "react-native";
 import countries from "./src/data/countries.json";
import { countriesdata } from './gql/queries';
 


export default function CountrySel({ see}) {
  const [visible, setinvisible] = useState(see);

  const RenderCountries = ({flag, name})=>{
    return(
      <View  style={{flex:1,flexDirection:'row'}}>
        <View style={{marginRight:70, marginTop:20}}>
            <Image source={{uri:flag}} style={{height:20, width:30}} />
          </View>
          <View style={{marginLeft:5,marginRight:90, marginTop:20}}>
            <Text>{name} </Text>
          </View>
        </View>
    )
  }

    return (
      <View>
      
        <Text>hhsjh</Text>
      
      <FlatList
      data={countries}
      renderItem= { ({item })=> <RenderCountries flag={item.file_url} name={item.name}/>}
      keyExtractor={item=> item.alpha3}
      />
      </View>
    )
  }