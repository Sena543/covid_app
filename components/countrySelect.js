import React, {useState} from 'react';
import {Text, FlatList, View, TouchableOpacity, Modal, Image ,TouchableHighlight} from 'react-native';

import { FontAwesome } from "react-native-vector-icons";
import CountrySel from './modalComp';
import {CountryContextProvider} from './context/CountryContext'
import countries from "./src/data/countries.json";
import { countriesdata } from './gql/queries';


export default function CountrySelect(){
  const [selected, setSelected] = useState(new Map());
  const [modalVisible, setModalVisible] = useState(false);
  const [country, setCountry] = useState({
    country: "N/A",
    flag: "N/A",
  });
  const [data, setData] = useState({
      tests: "N/A",
      cases: "N/A",
      deaths: "N/A",
      recovered: "N/A",
      active: "N/A",
      critical: "N/A",
      updated: "N/A",
  
  })

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      console.log(newSelected)
      setSelected(newSelected);
    },
    [selected],
  );

  const PrepCountries = ({code, name})=>{

    return(
      <View  style={{borderTopLeftRadius:30,flex:1,flexDirection:'row', borderBottomWidth:.5, borderBottomStartRadius:20,borderBottomEndRadius:20}}>
        <View style={{marginLeft:20,marginRight:10, marginTop:20}}>
            <Image source={{uri:`https://www.countryflags.io/${code}/flat/64.png`}} style={{height:20, width:30}} />
          </View>
          <View style={{marginLeft:5,marginRight:90, marginTop:20, marginBottom:20}}>
            <Text>{name} </Text>
          </View>
        </View>
    )
  }

  const RenderCountries= ()=>{
    return(
      <View>
      
      <Text>hhsjh</Text>
    
    <FlatList
    data={countries}
    renderItem= { ({item })=> <PrepCountries code={item.alpha2Code} name={item.name}
    selected={!!selected.get(item.id)}
            onSelect={onSelect}
    />}
    keyExtractor={item=> item.alpha2Code}
    extraData={selected}
    />
    </View>
    )
  }

  const Mod = ({isVisible})=>{
    return(
      <Modal
     animationType="slide"
     visible={isVisible}
     >
       <TouchableHighlight
       underlayColor = '#2e2b2b'
       onPress={()=>{ 
         setCountry(selected)
         setModalVisible(!isVisible);
         console.log(country)
      }}
       >
       <View>
         <RenderCountries/>
       </View>
       </TouchableHighlight>
     </Modal>
    )
  }

    return(
      <TouchableOpacity
      onPress={ ()=>{setModalVisible(true)}}
      > 
        <Mod isVisible={modalVisible}/>
        <View style={{flex:1,flexDirection:'row',}}>
          <View style={{marginRight:70, marginTop:20}}>
            <Image source={{uri:`https://www.countryflags.io/GH/flat/64.png`}} style={{height:20, width:30}} />
          </View>
          <View style={{marginLeft:5,marginRight:90, marginTop:20}}>
            <Text>{country.country} </Text>
          </View>
          <View style={{marginLeft:120, marginTop:20}}>
            <FontAwesome name='angle-down' size={25}/>
          </View>
        </View>
        </TouchableOpacity>  
             
    )
}


/**
 * source={{uri:country.countryInfo.flag}}
 * 
 * {country.country} 
 */