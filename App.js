import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  Text, View } from 'react-native';
import {Link,  NativeRouter,Route,Routes } from 'react-router-native';
import About from './Components/About/About';
import Add from './Components/Add/Add';
import AddAproduct from './Components/AddAproduct/AddAproduct';
import Alldet from './Components/AllDet/Alldet';
import Parses from './Components/AllDet/Parses/Parses';
import Cars from './Components/Cars';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


  export default function App() {
   
    return(
    <View style={styles.new}>
   <NativeRouter>
        <View style={styles.container}>

        <Link to="/home"><Text style={styles.mar} >Home</Text></Link>
        <Link to="/"><Text></Text></Link>
        <Link to="/cars"><Text style={styles.mar}>Cars</Text></Link>
        <Link to="/addProduct"><Text style={styles.mar}>Add</Text></Link>
        <Link to="/about"><Text style={styles.mar}>About</Text></Link>
        

        
        </View>
        <View style={styles.col}>
       <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route  path="/home" element={<Home></Home>}></Route>
       <Route path="/cars" element={<Cars></Cars>}></Route>
       <Route path="/addProduct" element={<AddAproduct></AddAproduct>}></Route>
       <Route path="/addreview" element={<Add></Add>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/detail/:dtl" element={<Alldet></Alldet>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
      
       <Route path="/purses" element={<Parses></Parses>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
      
      
      
        </Routes>
     </View>
      </NativeRouter>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  new:{
 
  marginTop: 58,
  fontSize: 12,
  fontWeight: "400",
  color: "coral",padding:20,
  backgroundColor: '#fff',
   

  },
  mar:{
    marginLeft:5,
    fontSize: 25,
  fontWeight: "700",
  padding:5
  },
  col:{
    backgroundColor:"gray"
  }
});
