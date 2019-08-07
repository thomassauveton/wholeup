import React from 'react';
import { View } from 'react-native';
import {Button, FormLabel, FormInput} from 'react-native-elements';
import url from '../../config.js';

export default class SignUpScreen extends React.Component {


  constructor() {
    super();
    
    this.handleSumbit = this.handleSumbit.bind(this);

    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',

    }
  }

  handleSumbit(){

    console.log('signup from front handled...');

  // VOIR AVEC MIKA POUR CETTE PARTIE 

    // We can store our sent data (available in our state) in a variable called signupData
    var signupData = JSON.stringify({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    });
  
    // Since we are going to fetch with the ES5 syntax, we need to store this (an EST5 function has got its own this)
    const ctx = this;
  
    fetch(`${url}/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: signupData
    }
    // reception de la reponse brute & converti au format Json
    ).then(function(res, err){
      return res.json()
      // reponse de navigation vers la page account 
    }).then(function(data){
      console.log(data);
      ctx.props.navigation.navigate('Account');
    }).catch(function(err){
      console.log(err)
    })
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <FormLabel>First Name</FormLabel>
       <FormInput
       //pkoi met on "e" ? 
          onChangeText={(value) => this.setState({firstName: value})}/>
        <FormLabel>Last Name</FormLabel>
        <FormInput
          onChangeText={(value) => this.setState({lastName: value})}/>
        <FormLabel>Email</FormLabel>
        <FormInput
          onChangeText={(value) => this.setState({email: value})}/>
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={(value) => this.setState({password: value})}/>

        <Button
          style={{width:100, marginTop:20}}
          title="Sign Up"
          backgroundColor="#3498db"
          onPress={this.handleSumbit}
        />

      </View>
    )
  }
}
