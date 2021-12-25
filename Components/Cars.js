import React, { useEffect,useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Detail from './Detail'


export default function Cars() {
   
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('https://fast-cliffs-41980.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data)) 
   
        
  },[])
    return (
        <View style={{ fontSize:50 }}>
            <Text>Cars Count {services.length}</Text>
            <ScrollView style={{marginBottom:150,padding:5}}>
            
            {
                services.map(ser=><Detail
                ser={ser}
                key={ser._id}
                ></Detail>)
            }
           </ScrollView>
        </View>
    )
}
