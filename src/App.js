import { Component } from 'react';

import './App.css';

import { Navbar } from './components/Navbar';

import { News } from './components/News';



import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer';



export class App extends Component {



 constructor() {

  super();

  this.state = { mode: 'light' }

 }

 togglemode = () => {

  if (this.state.mode === 'light') {

   this.setState({mode:'dark'});

   document.body.style.backgroundColor = 'black';

  }

  else {

   this.setState({mode:'light'});

   document.body.style.backgroundColor = 'white';

  }

 }



 render() {

  return (

   <div>

    <BrowserRouter>



     <Navbar mode={this.state.mode} togglemode={this.togglemode}/>

     <Routes>

      <Route exact path='/' element={<News key='general' pageSize={5} category="general" country="in" mode={this.state.mode} togglemode={this.togglemode}/>} />

      <Route exact path='/business' element={<News key='business' pageSize={5} category="business" country="in" mode={this.state.mode} togglemode={this.togglemode}/>} />

      <Route exact path='/entertainment' element={<News key='entertainment' pageSize={5} category="entertainment" country="in" mode={this.state.mode} togglemode={this.togglemode}/>} />

      <Route exact path='/health' element={<News key='health' pageSize={5} category="health" country="in" />} mode={this.state.mode} togglemode={this.togglemode}/>

      <Route exact path='/science' element={<News key='science' pageSize={5} category="science" country="in" mode={this.state.mode} togglemode={this.togglemode}/>} />

      <Route exact path='/sports' element={<News key='sports' pageSize={5} category="sports" country="in" mode={this.state.mode} togglemode={this.togglemode}/>} />

      <Route exact path='/technology' element={<News key='technology' pageSize={5} category="technology" country="in" mode={this.state.mode} togglemode={this.togglemode}/>} />

     </Routes>

     <Footer />



    </BrowserRouter>

   </div>

  )

 }

}



export default App;

