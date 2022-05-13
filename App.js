import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 
 import React,{Component} from 'react';
 import { Text, StyleSheet } from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
import PageDeRecherche from './PageDeRecherche';
import ResultatsDeRecherche from './ResultatsDeRecherche';
 
 const Pile=createStackNavigator();
 function MaPile(){
     return (
         <Pile.Navigator>
             <Pile.Screen name='Accueil' component={PageDeRecherche}/>
             <Pile.Screen name='Resultats' component={ResultatsDeRecherche}/>
         </Pile.Navigator>
     );
 }
 export default class App extends Component<props>
 {
     render() {
 //return React.createElement(Text, {style: styles.description}, "Rechercher des pays :)");
//  return <Text style={styles.description}>Rechercher des pays du monde entier :)</Text>
 return (
     <NavigationContainer>
         <MaPile/>
     </NavigationContainer>
 );
  }
 
 }
 const styles = StyleSheet.create({
     description: {
     fontSize: 18,
     textAlign: 'center',
     color: '#656565',
     marginTop: 65,
     },
    });
 
 
 