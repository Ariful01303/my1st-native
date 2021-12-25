import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

export default function Parses() {
    return (
        <View>
            <Text>Comming Soon</Text>
            <Link to='/add'><Text style={{backgroundColor:'red',textAlign:'center', width:100,borderRadius:10,fontSize:30,marginBottom:20,marginTop:15}}>Review</Text></Link>
        </View>
    )
}
