import React, { Component } from 'react';
import Crawl from '../CrawlAnime/crawl';
import Preloader from '../Preloader/preloader'
//import Characters from './characters';
var btnStyle ={
    background:'black',
    fontSize:'30px',
    color:'gray',
    textAlign:'right',
    padding:'20px',
    
}
var hide ={
    display:'none'
}
class MovieDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            showCrawl: true,
            loader:false,
            details:[],
            characters:[]
        }
     this.handleClick = this.handleClick.bind(this);
  
  
    }
   componentDidMount(){
    fetch(`https://swapi.co/api/films/?search=${this.props.match.params.title}`).then((resp) => resp.json())
    .then((results) => 
         {
           this.setState({details:results.results,loader:true},() => {
               console.log(this.state.details)
               results.results.map( movie => {
                console.log(movie.characters)
                let arr = [];
                for(let i= 0;i<movie.characters.length;i++){
                    fetch(movie.characters[i]).then((result) =>
                    result.json()
                    ).then(data => {
                     arr.push(data);
                     this.setState({characters:arr},() => console.log("state",this.state.characters))
                    });
                }
                    // fetch(characterUrl).then(resp =>(resp.json()))
                    //     .then(data => {
                    //         this.setState({
                    //             characters:data
                    //         },() =>console.log(this.state.characters))
                    //     })
                    
            
                })
        
        });
       
         }
     
    )
   
 
   }
  
    
   
   handleClick(){
      this.setState({showCrawl:false})
   }

    render(){
        if(this.state.loader){
            setTimeout(() => {this.setState({showCrawl: false})}, 5000)
        }
      
        if(!this.state.loader){
            return <Preloader/>
        }
        return(
            <div> 
              
               {
                   this.state.details.map((list) =>{
                       return(
                           <div>
                               <div style ={this.state.showCrawl?btnStyle:hide}>
                                   <span onClick ={this.handleClick} style={{cursor:'pointer'}}>X</span>
                               </div>
                               {
                                   this.state.showCrawl ?
                                <Crawl
                                  
                                  title= {list.title}
                                 
                                  text= {list.opening_crawl}
                              
                              />:
                              <div>
                              <table className ="movieDetailTable">
                                  <tr>
                                      <th>Title:</th>
                                      <td>{list.title}</td>
                                  </tr>
                                  <tr>
                                      <th>Director:</th>
                                      <td>{list.director}</td>
                                  </tr>
                                  <tr>
                                      <th>Producer:</th>
                                      <td>{list.producer}</td>
                                  </tr>
                                  <tr>
                                      <th>Release Date:</th>
                                      <td>{list.release_date}</td>
                                  </tr>
                                  <tr>
                                      <th>Characters:</th>
                                      <td className ="charList">
                                       {
                                         this.state.characters.map((character) =>{

                                            return (
                                             <tr><td> {character.name}</td>     </tr>
                                           )
                                          
                                         })
                                       }
                                    </td>
                                    
                                  </tr>
                                
                              </table>

                          </div>
                               }
                              
                           </div>
                       )
                   })
               }
            </div>
        )
    }
}



export default MovieDetail