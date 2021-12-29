import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import { Link } from 'react-router-native'
import Login from './Login/Login'

export default function Detail(props) {

  const {isSing}=Login()

  const {name,photo,_id,price}=props.ser
  
  return (
    <View >
    <Image source={{
       uri:`${photo}` ,}}
       style={{width:320,height:200}}
       />
      <Text style={{fontSize:20,marginBottom:5}}>{name}</Text>
      <Text style={{fontSize:30}}>{price} ৳</Text>
     
    
     {isSing?.email?<Link to="/login"><Text style={{backgroundColor:'blue',color:'white',textAlign:'center', width:100,borderRadius:10,fontSize:30,marginBottom:20}}>Deail</Text></Link>:<Link to={`/detail/${_id}`}><Text style={{backgroundColor:'blue',color:'white',textAlign:'center', width:100,borderRadius:10,fontSize:30,marginBottom:20}}>Deail</Text></Link>}
     
      
    </View>
  )
}
