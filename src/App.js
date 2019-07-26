import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import {Button,ButtonToolbar} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Main from './Components/Main';
import { AppRouter } from './Components/AppRouter';


function App() {
  return (
    <div className="container-fuild">
  
     <AppRouter/>
     <Footer/>

    </div>
  );
}

export default App;
