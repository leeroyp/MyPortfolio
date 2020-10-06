import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component { 

  constructor(props){
    super(props);
    this.state= {
      title: 'Leeroy Phili',
      headerLinks:[
        {title: 'home', path: '/'},
        {title: 'About', path: 'about'},
        {title: 'Contact', path: 'contact'}

      ],
      home: {
        title: 'The Process',
        subTitle: 'Work in progresss leads to growth',
        projects: 'Check out my projects below'

      },

     about: {
        title: 'Get to Know me ',
      
      },
     contact: {
        title: 'Keep in touch',
      }

    }
  }

  render(){
  return (
    <Router>

    </Router>
  );
}
}
export default App;
