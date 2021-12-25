import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Detail from './Detail'

export default function Home() {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('https://fast-cliffs-41980.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data)) 
   
        
  },[])
    return (
        <View style={{ fontSize:50 }}>
            <Text style={{textAlign:'center'}}>Best Bike</Text>
            <ScrollView style={{marginBottom:150,padding:5}}>
            
            {
                services.slice(0,6).map(ser=><Detail
                ser={ser}
                key={ser._id}
                ></Detail>)
            }
           </ScrollView>
            
         
        </View>
    )
}
