import React, { Component } from 'react';
import '../App.css';
import HomeTemplate from './User/UserTemplate';

class ListUser extends Component {
  andleSubmit = (event) => {
    console.log(this.props.handleToUpdate);
  }
  render() {
    return (
        <div>
            <HomeTemplate userArray={this.props} />
            <hr />
        </div>      
    );
  }
}




export default ListUser;
