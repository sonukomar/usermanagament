import React, { Component } from 'react';
import './App.css';
import Enrollment from './modules/Enrollment';
import UserList from './modules/ListUser';
import Header from './modules/Header';
import Landing from './modules/Landing';
import Register from './modules/Register';
import User from './modules/User/User';

class App extends Component {

    constructor(props) {
                super(props);
                var handleToUpdate	= this.handleToUpdate.bind(this);
                var arg1 = '';
            }

            handleToUpdate(someArg){
                    
                    this.setState({userList:someArg});
            }  
  state = {
        isLoggedIn :'false',
        errorMsg  : null,
        email     :null,
        userList: [
    {
        'name':'Sonu Kumar',
        'industory':'Mindtree Ltd',
        'salary':'3000',
        'location':'Bangalore'
    },
    {
        'name':'Vicky Kumar',
        'industory':'Mindtree Ltd',
        'salary':'4000',
        'location':'Bangalore'
    },
    {
        'name':'Ritika Singh',
        'industory':'Mindtree Ltd',
        'salary':'366000',
        'location':'Bangalore'
    },
    {
        'name':'Ravi Verma',
        'industory':'Mindtree Ltd',
        'salary':'00002',
        'location':'Bangalore'
    },
    {
        'name':'Yogendra Pandey',
        'industory':'Mindtree Ltd',
        'salary':'3034324243300',
        'location':'Bangalore'
    }
]
    }

  render() {
    var handleToUpdate=this.handleToUpdate;
    var Child;
    switch(this.props.route) {
        case 'home': Child = UserList; break;
        case 'login': Child = Enrollment; break;
        case 'register': Child = Register; break;
        case 'addUser': Child = User.addUser; break;
        case 'deleteUser': Child = User.removeUser; break;
        case 'updateUser': Child = User.updateUser; break;
        default: Child = Landing;
    }

    return (
        <div className="container-fluid">
            <Header loggedInStatus = {this.state}  handleToUpdate = {handleToUpdate.bind(this)}/>
            <Child  loggedInStatus = {this.state}  handleToUpdate = {handleToUpdate.bind(this)}/>
        </div>
    );

  }
}

export default App;
