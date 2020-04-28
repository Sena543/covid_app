import React from 'react';
import {Text, View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { graphql } from 'react-apollo';
//import {globalCovidData} from './gql/queries'


function Summary(){
   //const {loading, error, data} = useQuery(globalCovidData)
    
    // if(error){
    //     console.log(error)
    // }
    //console.log(data.globalTotal)
    return(
        
        <View style={{flexDirection:'row', flex:1}}>
        <View style={{height: 40, borderRightWidth:.5, borderRightColor:'#808080', marginRight:20, flex:1, marginBottom:10}}>
            <Text style={{color:'#3e36e0', marginLeft:5}}> Confirmed</Text>
    <Text style={{marginLeft:9}}>76768</Text>
        </View>
        <View style={{height: 40,borderRightWidth:.5, borderRightColor:'#808080', marginRight:20, flex:1}}>
            <Text style={{color:'#057a4b'}}> Recovered</Text>
            <Text>7867</Text>
        </View>
        <View style={{height: 40,  marginRight:20, flex:1}}>
            <Text style={{color:'#f01145'}}> Deaths</Text>
            <Text>667</Text>
        </View>
      </View>
    )
}
//graphql(globalCovidData)
export default (Summary);