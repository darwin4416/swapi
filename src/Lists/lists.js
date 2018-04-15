import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import Route from 'react-router-dom/Route';
import MovieDetail from '.././MovieDetail/movieDetail'
class Lists extends Component {
    constructor(props){
        super(props)
       
        this.state = {
            inputField: ''
          };
    }
    componentDidMount(){
        console.log(this.props.movieList)
    }
    render(){
        return(
          
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Movie Name</td>
                            <td>Release year</td>
                        </tr>
                    </thead>
                    <tbody>
                           
                       {this.props.movieList.map((l) => {

                            return (<tr key ={l.ObjectId}>
                                    <Link to={`/movie/${l.title}`}><td >{l.title}</td></Link>
                                    <td >{l.release_date}</td>
                                  </tr>
                        )})} 
                        
                       
                    </tbody>
                </table>
            </div>
           
        )
    }
}
export default Lists