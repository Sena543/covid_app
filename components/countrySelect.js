import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, Image ,TouchableHighlight} from 'react-native';
//import CountryPicker from 'react-native-country-picker-modal';
//import countries from "./src/data/countries";
import { Ionicons, FontAwesome } from "react-native-vector-icons";
import CountrySel from './modalComp'


export default function CountrySelect(){
  const [modalVisible, setModalVisible] = useState(false);
  const [country, setCountry] = useState({
    country: "Ghana",
    countryInfo: {
      flag: "https://corona.lmao.ninja/assets/img/flags/gh.png",
    },
    result: {
      tests: 100622,
      cases: 1550,
      todayCases: 0,
      deaths: 11,
      todayDeaths: 0,
      recovered: 155,
      active: 1384,
      critical: 4,
      casesPerOneMillion: 50,
      deathsPerOneMillion: 0,
      testsPerOneMillion: 3238,
      updated: "2020-04-27T19:56:41.459Z",
    },
  });

  const Mod = ({isVisible})=>{
    return(
      <Modal
     animationType="slide"
     visible={isVisible}
     >
       <TouchableHighlight
       onPress={()=> setModalVisible(!isVisible)}
       >
       <View>
         <CountrySel/>
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
            <Image source={{uri:country.countryInfo.flag}} style={{height:20, width:30}} />
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