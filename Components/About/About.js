import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Review from '../Review/Review'

export default function About() {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://fast-cliffs-41980.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data)) 
        
    },[])
    return (
        <View>
            <ScrollView style={{marginBottom:150,padding:5}}>
        <Image source={{
     uri:'https://inteng-storage.s3.amazonaws.com/images/SEPTEMBER/sizes/e2_kuva_resize_md.jpg' ,}}
     style={{width:320,height:250}}
     />
     <Text style={{padding:10,textAlign:"center"}}>The Motorbike Shop is the South’s leading Premier  Honda,Suzuki,YAMAHA,Apache,Hero,Bajaj Dealer. A privately owned business based in Hampshire, offering the highest levels of service and expertise, whether you are looking to purchase a new Yamaha, a used motorcycle, or to service and maintain your current motorcycle.

The Motorbike Shop showcase a large selection of the latest new  Honda,Suzuki,YAMAHA,Apache,Hero,Bajaj ect. models, plus an extensive choice of top quality used motorcycles. We also keep a great range of Yamaha demonstrator models and if you bring your bike in with you, we can value it for part exchange and work out a deal that suits you.

We also offer competitive finance from a variety of providers, including regular Yamaha backed promotions through Santander Finance.</Text>
<ScrollView style={{marginBottom:150,padding:5}}>
    <Text style={{textAlign:"center", fontSize: 30,marginBottom:10}}>Clients Reviews</Text>
 {
     reviews.map(re=><Review
     key={re._id}
     re={re}
     ></Review>)
 }
</ScrollView>
</ScrollView>
        </View>
    )
}
