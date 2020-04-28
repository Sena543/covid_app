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

 


export default function CountrySel({ see}) {
  const [visible, setinvisible] = useState(see);

  const RenderCountries = ({code, name})=>{


    return(
      <View  style={{flex:1,flexDirection:'row'}}>
        <View style={{marginLeft:20,marginRight:10, marginTop:20}}>
            <Image source={{uri:`https://www.countryflags.io/${code}/flat/64.png`}} style={{height:20, width:30}} />
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
      renderItem= { ({item })=> <RenderCountries code={item.alpha2Code} name={item.name}/>}
      keyExtractor={item=> item.alpha2Code}
      />
      </View>
    )
  }