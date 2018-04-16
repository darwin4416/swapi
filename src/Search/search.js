import React, { Component } from 'react';

// const serchBarStyle ={
//     width:'40%',
//     margin:'50px auto',
//     fontSize:'1.3em'
// }
// const inputStyle ={
//     padding:'5px 20px',
//     margin:'10px',
//     border:'1px solid yellow'
// }

class Search extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputField: ''
          };
    }
    handleChange(e){
        e.preventDefault()
        this.setState({
            inputField:e.target.value
        },() =>
            this.props.inputHandler(this.state.inputField)
        )
    }
    render(){
        return(
            <div className ="searchBar">
                <label>Search By</label>
                <span>Movie Title</span>
                <input type="search" onChange = {this.handleChange}/>
            </div>
        )
    }
}
export default Search