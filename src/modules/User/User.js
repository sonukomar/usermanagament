import React, { Component } from 'react';
import '../../App.css';
import HomeTemplate from './UserTemplate';


var addUser = React.createClass({
    render(){
        <h1>Hello Add User</h1>
        return(
            <div>
                <HomeTemplate userArray={this.props.loggedInStatus}/>
                <h1>Hello Add User{this.props.loggedInStatus.userList[0].name}</h1>
            </div>    
        )
    }
});

var removeUser = React.createClass({
    render(){
       <h1>Hello remove User</h1>
        return(
            <div>
                <HomeTemplate userArray={this.props.loggedInStatus}/>
                <h1>Hello remove User</h1>
             </div> 
        )
    }
});

var updateUser = React.createClass({
    render(){
        <h1>Hello Update User</h1>
        return(
            <div>
                <HomeTemplate userArray={this.props.loggedInStatus}/>
                <h1>Hello Update User</h1>
             </div> 
        )
    }
});



export default  {'addUser':addUser ,'updateUser':updateUser,'removeUser':removeUser};