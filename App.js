//This is an example code for Navigator//
import React, {Component} from 'react';
//import react in our code.

//Import react-navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import FamilyInfo from './FamilyInfo';
import zero from './components/zero';
import one from './components/one';
import two from './components/two';
import three from './components/three';
import four from './components/four';
import five from './components/five';
import six from './components/six';
import seven from './components/seven';
import eight from './components/eight';
import nine from './components/nine';
import ten from './components/ten';
import eleven from './components/eleven';
import twelve from './components/twelve';
import thirteen from './components/thirteen';
import fourteen from './components/fourteen';
import fifteen from './components/fifteen';
import sixteen from './components/sixteen';
import seventeen from './components/seventeen';
import eighteen from './components/eighteen';
//import all the screens we are going to switch
const App = createStackNavigator(
  {
    //Constant which holds all the screens like index of any book
    FirstPage: {screen: FirstPage},
    //First entry by default be our first screen if we do not define initialRouteName
    SecondPage: {screen: SecondPage},

    FamilyInfo: {screen: FamilyInfo},

    zero: {screen: zero},

    one: {screen: one},

    two: {screen: two},

    three: {screen: three},

    four: {screen: four},

    five: {screen: five},

    six: {screen: six},

    seven: {screen: seven},

    eight: {screen: eight},

    nine: {screen: nine},

    ten: {screen: ten},

    eleven: {screen: eleven},

    twelve: {screen: twelve},

    thirteen: {screen: thirteen},

    fourteen: {screen: fourteen},

    fifteen: {screen: fifteen},

    sixteen: {screen: sixteen},

    seventeen: {screen: seventeen},

    eighteen: {screen: eighteen},
  },
  (console.warn = () => {}),
  // {
  // initialRouteName: 'FirstPage',
  // }
);
export default createAppContainer(App);
