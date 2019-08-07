import React from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import {Avatar, Text,  List, ListItem } from 'react-native-elements';
import {connect} from 'react-redux';

class SearchScreen extends React.Component {

 render() {

   // Here, I am using a fictive database with relevant keys nonetheless
   var users = [
     { name: "Emilie Carpenter", title: "EC", email: "contact@gmail.com", company: "Deckow-Crist", color: "#e67e22"},
     { name: "John Doe", title: "JD", email: "contact@gmail.com", company: "Deckow-Crist", color: "#3498db"},
     { name: "Noel Paganelli", title: "NP", email: "contact@gmail.com", company: "Deckow-Crist", color: "#16a085"}
   ]

   // Using ES6 syntax, I can map over users, to set a usersList Array, with a unique i key for each user
   var usersList = users.map((user, i) => {
     console.log("hello")
     return (
       <ListItem
         key={i}
         avatar={
           <Avatar
             small
             rounded
             title={user.title}
             overlayContainerStyle={{backgroundColor: '#16a085'}}
            //  écoute du signal “Press” associée à la fonction handleContact reçue en propriété auquel on add 4 Arguments
            onPress={() => this.props.handleContact(user.name, user.firstName, user.email, user.company)}
           />
         }
         title={user.name}
         subtitle={
           <View style={styles.subtitle}>
             <Text style={styles.ratingText}>{user.email}</Text>
             <Text style={styles.ratingText}> company: {user.comany}</Text>
           </View>
         }
       />
   )
   })


   return (
     <ScrollView style={styles.container}>



       <List>

         {usersList}

       </List>

     </ScrollView>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  subtitle:{
    flexDirection:'row',
    padding:10,
    paddingTop:5,
  },
  ratingText:{
    color: 'grey',
  }
 });

// Creation du composant conteneur qui sera autour du composant LinkScreen 

function mapDispatchToProps(dispatch) {
 return {
   //parametrage du de l'action mapDispatchToProps qui a pour param la fction 'handleContact' qui envoie une action 'addcontact'
  handleContact: function( nameContact, firstNameContact, emailContact, companyNameContact)
    
   { 
    //  instruction permettant l'exe de l'action vers redux
    dispatch( {
      type: 'addcontact',
      name: nameContact,
      firstName: firstNameContact,
      email:emailContact,
      companyName:companyNameContact
  } ) 
  }
 }
}

export default connect(
  null, 
  mapDispatchToProps
)(SearchScreen);






