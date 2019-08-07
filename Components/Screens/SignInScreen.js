import React from 'react';
import { View, Text,ImageBackground} from 'react-native';
import {Button, FormLabel, FormInput,Divider,FormValidationMessage} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import url from '../../config';

export default class SignInScreen extends React.Component {

  //ici on peut creer les fonctions necessaires

  constructor() {
    super();
    this.state = {
      email:'',
      password:'',
      errorMessage:''

    }
  }

    // VOIR AVEC MIKA POUR CETTE PARTIE 

    handleSumbit = () => {

      console.log('signin from front handled...');
    
      fetch(`${url}/signin?email=${this.state.email}&password=${this.state.password}`)
      .then((res, err)  => res.json() // only one element to return so no need to add {} and no need to use the key word return
      ).then(data => {
        console.log(data)
          data.isUserExist
            ? this.props.navigation.navigate('Account')
            : this.setState({errorMessage: 'Wrong credentials, try again...'})
      }).catch(err => {
        console.log(err)
      })
    }




  render() {
    return (
      <ImageBackground style={{flex:1}} source={require("../../assets/Images/network_copy.jpg")}>
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(value) => this.setState({email: value})}
          leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />
       

        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={(value) => this.setState({password: value})}/>

        <Button
          style={{width:100, marginTop:20}}
          title ="Sign In"
          backgroundColor="#473080"
        
          onPress={this.handleSumbit}
        />
<Divider style={{height:100}}/>

<Text h3 onPress={ () => this.props.navigation.navigate('SignUp')} style={{color: "#ffffff"}}>Créer un compte</Text>

<Text style={{color: 'red', fontSize: 72}}>{this.state.error}</Text>
      </View>
      </ImageBackground>
    )
  }
}
