import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

export default function Parses() {
    return (
        <View>
            <Text>Comming Soon</Text>
            <Link to='/addreview'><Text style={{backgroundColor:'green',color:'white',textAlign:'center', width:100,borderRadius:10,fontSize:25,marginLeft:5,marginBottom:20,marginTop:15}}>Review</Text></Link>
        </View>
    )
}
