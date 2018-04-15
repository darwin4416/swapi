import React, { Component } from 'react';

class MovieDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            details:[]
        }
   
    }
   componentDidMount(){
    fetch(`https://swapi.co/api/films/?search=${this.props.match.params.title}`).then((resp) => resp.json())
    .then((results) => 
         {
           this.setState({details:results.results},() => console.log(this.state.details));
         }
     
    )
      
   }
    render(){
        return(
            <div>
               <h1>{this.props.match.params.title}</h1>
               {
                   this.state.details.map((list) =>{
                       return(
                           <div>
                           <p>{list.title}</p>
                           <p>{list.director}</p>
                           <p>{list.release_date }</p>
                           <p>{list.producer}</p>
                           </div>
                       )
                   })
               }
            </div>
        )
    }
}
export default MovieDetail