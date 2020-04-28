import React from 'react'
import { Image,  StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { useQuery } from '@apollo/react-hooks';
import { graphql } from 'react-apollo';

import {countriesdata} from './gql/queries'

function CountryStats(){
    //const {loading, error, data} = useQuery(countriesdata);

    //console.log(data)
    return(
        <View style={styles.main}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={styles.confirmedview}>
            <Text style={{color:'#3e36e0', marginLeft:5}}> Confirmed</Text>
            <Text style={{marginLeft:9}}>2,994,761</Text>
        </View>
        <View style={styles.recoveredView}>
            <Text style={{color:'#057a4b'}}> Recovered</Text>
            <Text>878,820</Text>
        </View>
        <View style={{marginRight:20, flex:1}}>
            <Text style={{color:'#f01145'}}> Deaths</Text>
            <Text>206,992</Text>
        </View>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginTop: 20}}>
        <View style={{borderRightWidth:.5, borderRightColor:'#808080', marginRight:20, flex:1}}>
            <Text style={{color:'#a0b504', marginLeft:5}}> Active</Text>
            <Text style={{marginLeft:9}}>2,994,761</Text>
        </View>
        <View style={styles.recoveredView}>
            <Text style={{color:'#d13404'}}> Critical</Text>
            <Text>878,820</Text>
        </View>
        <View style={{marginRight:20, flex:1}}>
            <Text style={{color:'#2c038c'}}> Tests</Text>
            <Text>206,992</Text>
        </View>
        </View>
     </View>
    )
}
//graphql(countriesdata)
export default (CountryStats);

const styles = StyleSheet.create({
    main:{
        flex:1.2, 
        backgroundColor:'#ffffff', 
        marginTop:10, 
        margin:10,  
        borderRadius:10,   
    },
    confirmedview:{
        borderRightWidth:.5, 
        borderRightColor:'#808080', 
        marginRight:20, 
        flex:1
    },
    recoveredView:{
        borderRightWidth:.5, 
        borderRightColor:'#808080', 
        marginRight:20, 
        flex:1
    },
})