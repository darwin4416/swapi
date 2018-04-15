import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Search from './Search/search';
import Lists from './Lists/lists';
import MovieDetail from './MovieDetail/movieDetail'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchStr:'',
      movieListUrls:[],
      avg:[]
      
    }
    this.getInputData = this.getInputData.bind(this);
  }
  
  getInputData(serachStr){
    console.log(serachStr);
    // fetch(`https://swapi.co/api/films`).then((resp) => resp.json())
    // .then((results) => this.setState({movieListUrls:results},() => console.log(this.state.movieListUrls)))
  //  fetch(`https://swapi.co/api/people/?search=${serachStr}`).then((resp) => resp.json())
  //    .then((results) => results.results.map((movie) => {
        
        
  //    })) 
     
     fetch(`https://swapi.co/api/films/?search=${serachStr}`).then((resp) => resp.json())
     .then((results) => 
          {
            this.setState({movieListUrls:results.results},()=>console.log(this.state.movieListUrls))
          }
      
     )
     //const nyk = Object.assign({},movies);
    // console.log(nyk);
    //  this.setState({movieListUrls:movies},() => {
    //    console.log("fick",nyk)
     
    //  })
     
  }
  render() {
    return (
      <Router>
      <div className ="app">
      <Route path="/" exact strict render={
        ()=>{
          return(
            <div className="App">
            <Search inputHandler = {this.getInputData}/> 
            <Lists movieList = {this.state.movieListUrls}/>    
       </div>
          )
        }
      }/> 
     
      <Route path="/movie/:title" exact strict component ={MovieDetail}/> 
      </div>
      </Router>
    );
  }
}

export default App;