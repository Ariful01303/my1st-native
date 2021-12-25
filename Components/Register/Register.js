

import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { authentication } from '../Firebase/Firebaseconfig'
import { createUserWithEmailAndPassword} from "firebase/auth";
import { Link } from 'react-router-native';
export default function Register() {
  const [isSing,setIsSing]=useState(false)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const register=()=>{
     createUserWithEmailAndPassword(authentication,email,password)
     .then((result)=>{
           console.log(result)
     })
     .catch((result)=>{
       console.log(result)
     })
  }


    return (
        <View>
             <Text style={{textAlign:'center'}}>login</Text>
      <TextInput  style={{ backgroundColor: 'white',
        borderColor: 'red',
        width:310,
        marginLeft:5,
        height: 40,
        padding: 10,
        marginTop:10,
        marginBottom:10,
        borderRadius: 4}} placeholder='Email' value={email} onChangeText={text=>setEmail(text)}/>

      <TextInput  style={{ backgroundColor: 'white',
        borderColor: 'red',
        width:310,
        marginLeft:5,
        height: 40,
        padding: 10,
        marginTop:10,
        marginBottom:10,
        borderRadius: 4}}          placeholder='Password' value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
      <Button title="Register" onPress={register}/>
      <Link to='/login'><Text style={{backgroundColor:'blue',color:'white',fontSize:20,borderRadius:10,marginLeft:10,width:300,textAlign:'center',marginBottom:20,marginTop:15}}>Are You Al ready login</Text></Link>
      
        </View>
    )
}
