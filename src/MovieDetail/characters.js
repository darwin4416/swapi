import React, { Component } from 'react';

class Characters extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    componentDidMount(){
        console.log("props",this.props)
    }
    render() {
       return (
          <div>
            <td>hello</td>
          </div>
       );
    }
  }
export default Characters