import React from 'react';
import { View, Text } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
// import de la navigation 
import Navigation from './Components/Navigation/Navigation';
// import du reducer "contact"
import contactList from './Reducers/contact.reducer.js';
// import du provider & du store 
import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux';
// creation du store et enregistrement du reducer 'contact' dans le store 
const store = createStore(combineReducers({ contactList }));

// In App.js, I just need to return my Navigation component. It is inside this component, that my components are rendered.
// I must NOT wrap my Navigation component in a View component since it is not a not a View but only a mecanism of rendering views.
// If you put a View to wrap the component, it will render a white page, with no error.
export default class App extends React.Component {
  render() {

    return (

    <Provider store={store}>
      <Navigation/>
    </Provider>
    )

  }
}
