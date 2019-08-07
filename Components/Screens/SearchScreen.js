import React from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import {Avatar, Text,  List, ListItem } from 'react-native-elements'

export default class LinksScreen extends React.Component {

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
















// <ListItem
//   avatar={
//   <Avatar
//     small
//     rounded
//     title="EC"
//     overlayContainerStyle={{backgroundColor: '#e67e22'}}/>}
//   title="Emilie Carpenter"
//   key="0"
//   subtitle={
//     <View style={styles.subtitle}>
//       <Text style={styles.ratingText}>contact@gmail.com</Text>
//       <Text style={styles.ratingText}>company: Deckow-Crist</Text>
//     </View>
//   }
//   >
// </ListItem>
// <ListItem
//    key="1"
//    avatar={
//      <Avatar
//        small
//        rounded
//        title="JD"
//        overlayContainerStyle={{backgroundColor: '#3498db'}}
//      />
//    }
//    title="John Doe"
//    subtitle={
//      <View style={styles.subtitle}>
//        <Text style={styles.ratingText}>contact@gmail.com</Text>
//        <Text style={styles.ratingText}> company: Deckow-Crist</Text>
//      </View>
//    }
//  />
//
<ListItem
  key="2"
  avatar={
    <Avatar
      small
      rounded
      title="EC"
      overlayContainerStyle={{backgroundColor: '#16a085'}}
    />
  }
  title="Noel Paganelli"
  subtitle={
    <View style={styles.subtitle}>
      <Text style={styles.ratingText}>contact@gmail.com</Text>
      <Text style={styles.ratingText}> company: Deckow-Crist</Text>
    </View>
  }
/>
