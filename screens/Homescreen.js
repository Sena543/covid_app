import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons'

import Summary from '../components/worldStats';
import CountrySelect from '../components/countrySelect';
import CountryStats from '../components/countryStats'

export default function HomeScreen() {
  return (
    <View style={{flex:1, justifyContent:'space-around', backgroundColor:'#d4d4d4'}}>
      <View style={{flex:.79,height: 90, backgroundColor:'#ffffff',marginTop:40, margin:10,  borderRadius:10 }}>
      <View style={{flexDirection:'row',margin:20 }}>
        <Ionicons name='ios-globe' size={15} color='#3e36e0'/>
        <Text style={{marginLeft:5}}>Worldwide Statistics</Text>
      </View>
      <Summary/>
     </View>
     <View style={{flex:.1,marginTop:10}}>
      <Text style={{marginLeft:10}}>Select Country:</Text>
     </View>
     <View style={{flex:.3,backgroundColor:'#ffffff',  alignItems:'center', margin:10,  borderRadius:10}}>
     
     <CountrySelect/>
   

    </View>
     <View style={{flex:1.2, backgroundColor:'#ffffff', marginTop:10, margin:10,  borderRadius:10,}}>
       <View style={{margin:15, flexDirection:'row'}}>
         <Ionicons name='ios-stats' color='#73c959' size={16}/>
         <Text style={{marginLeft:3}}>Statistics</Text>
       </View>
       <CountryStats/>
     </View>
     <View style={{flex:.7}}></View>
    </View>
  );
}



