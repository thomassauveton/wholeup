import React from 'react';
import {
 View,
 ImageBackground
} from 'react-native';
import {Avatar, Text, Button, Divider} from 'react-native-elements'


export default class HomeScreen extends React.Component {


 render() {
   return (
     <ImageBackground style={{flex:1}} source={require("../../assets/Images/network.jpg")}>
     {/*  ImageBackground is provided by react-native. */}

     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

           <Text h1 style={{color: "#FFFFFF"}}>Whol'Up</Text>
           <Text h3 style={{color: "#FFFFFF"}}>Start your networking</Text>
           <Text h3 style={{color: "#FFFFFF"}}>now and everywhere</Text>

           

     </View>

     </ImageBackground>    );
 }
}
