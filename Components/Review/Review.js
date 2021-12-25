import React from 'react'
import { View, Text, ScrollView } from 'react-native'

export default function Review(props) {
    const {comments,name,product}=props.re
    return (
        <View style={{marginBottom:20,display:"flex", flexDirection:'row'}}>
            <Text style={{marginRight:10}}>Name:{name}</Text>
           <Text style={{marginRight:10}}>Product:{product}</Text>
            <Text style={{marginRight:10}}>Comment:{comments}</Text>

            
        </View>
    )
}
