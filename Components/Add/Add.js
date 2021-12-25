import React from 'react'
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function Add() {
    const { control, handleSubmit, errors ,reset} = useForm({
        defaultValues:{
            "name":"",
            "product":"",
            "comments":""
        }
    });
  const onSubmit = data =>{
    fetch("https://fast-cliffs-41980.herokuapp.com/review", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
  
        reset()
    };
return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          
 style={{ backgroundColor: 'white',
 borderColor: 'red',
 width:310,
 marginLeft:5,
 height: 40,
 padding: 10,
 marginTop:10,
 borderRadius: 4}}
            onBlur={onBlur}
            onChangeText={ onChange}
            value={value}
            placeholder="Name"
          />
        )}
        name="name"
       
      />
    
<Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          
 style={{ backgroundColor: 'white',
 borderColor: 'red',
 width:310,
 marginLeft:5,
 height: 40,
 padding: 10,
 marginTop:10,

 borderRadius: 4}}
            onBlur={onBlur}
            onChangeText={ onChange}
            value={value}
            placeholder="Product Name"
          />
        )}
        name="product"
       
      />
    

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            
 style={{ backgroundColor: 'white',
 borderColor: 'red',
 width:310,
 marginLeft:5,
 height: 40,
 padding: 10,
 marginTop:10,
 marginBottom:10,
 borderRadius: 4}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Text Comments"
          />
        )}
        name="comments"
        
      />
    

      <Button style={{marginTop:10}} title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}