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
    componentWillMount(){
        console.log(this.props.movieList)
    }
    render(){
        return(
          
            <div>
                <table className ="movieList">
                    <thead>
                        <tr>
                            <th>Movie Name</th>
                            <th>Release year</th>
                        </tr>
                    </thead>
                    <tbody>
                           
                       {this.props.movieList.map((l) => {

                            return (<tr key ={l.ObjectId}>
                                    <td > <Link to={`/movie/${l.title}`}>{l.title}</Link></td>
                                    <td >{l.release_date.slice(0,4)}</td>
                                  </tr>
                        )})} 
                        
                       
                    </tbody>
                </table>
            </div>
           
        )
    }
}
export default Lists