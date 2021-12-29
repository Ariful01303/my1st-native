import React from 'react'
import { Controller } from 'react-hook-form';
import { View, Text, Button, TextInput } from 'react-native'
import { useForm } from "react-hook-form";
export default function AddAproduct() {
 

  const { control, handleSubmit, errors ,reset} = useForm({
    defaultValues:{
        "name":"",
        "description":"",
        "price":"",
        "photo":''
    }
});
    const onSubmit = data =>{
   
      fetch("https://fast-cliffs-41980.herokuapp.com/services", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
  
      reset();
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
            placeholder="Name of product"
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
            placeholder="Description"
          />
        )}
        name="description"
       
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
            placeholder="Amount of product"
          />
        )}
        name="price"
        
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
            placeholder="Product Image"
          />
        )}
        name="photo"
        
      />
    

      <Button style={{marginTop:10}} title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
