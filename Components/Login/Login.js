import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { authentication } from '../Firebase/Firebaseconfig'
import { signInWithEmailAndPassword,signOut } from "firebase/auth";
import { Link } from 'react-router-native';
export default function Login() {
  const [isSing,setIsSing]=useState({})
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  

  const singIn=()=>{
    signInWithEmailAndPassword(authentication,email,password)
    .then((result)=>{
      const {email}=result.user
      const loginuser={
        email:email
      }
      console.log(result)
         setIsSing(loginuser)
    })
    .catch((result)=>{
      console.log(result)
    })
 }
 const logOut=()=>{
  
  signOut(authentication)
  .then((res) => {
    console.log(res)
  })

}
  return (
    isSing,
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
      <Button title="singIn" onPress={singIn}/>
      <Button title="out" onPress={logOut}/>
      <Link to='/register'><Text style={{backgroundColor:'blue',color:'white',fontSize:20,borderRadius:10,marginLeft:10,width:300,textAlign:'center',marginBottom:20,marginTop:15}}>Are You New</Text></Link>

      
    </View>
  )
}
