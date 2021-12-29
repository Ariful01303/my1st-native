import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { useParams } from 'react-router'
import { Link } from 'react-router-native'

export default function Alldet() {
    const {dtl}=useParams()
    const [details,setDetails]=useState([])
    const [detail,setDetail]=useState({})
    useEffect(()=>{
        fetch('https://fast-cliffs-41980.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setDetails(data))
   },[])
   useEffect(()=>{
       const founddel=details.find((del)=>del._id===dtl)
              setDetail(founddel)
   },[details,dtl])
  
   
    return (
        <View style={{padding:10}}>
            <Image source={{
       uri:`${detail?.photo}` ,}}
       style={{width:320,height:200}}
       />
      <Text>{detail?.name}</Text>
      <Text>{detail?.description}</Text>
     <Text style={{fontSize:30}}>{detail?.price} ৳</Text>
     <Link to='/purses'><Text style={{backgroundColor:'green',color:'white',textAlign:'center', width:100,borderRadius:10,fontSize:25,marginLeft:5,marginBottom:20,marginTop:15}}>Parses</Text></Link>
        </View>
    )
}
