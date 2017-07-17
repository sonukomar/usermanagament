import React, { Component } from 'react';
import '../../App.css';

const User = (props) => {
    return(
        
             <tr>
                 <td></td>
                 <td>{props.name}</td>
                 <td>{props.industory}</td>
                 <td>{props.salary}</td>
                 <td>{props.location}</td>
             </tr>             
        
            
    )
};

const UserList = (props) =>{
	return(
        
       <tbody>
            {props.cards.map(card => <User {...card} />)}
      </tbody>

  );
}

var AddUserForm = React.createClass({
    handleSubmit:function(event){
        event.preventDefault();
        var data = {
            'name':this.userNameInput.value,
            'industory':this.userOrgInput.value,
            'salary':this.userSalaryInput.value,
            'location':this.userLocationInput.value     
        }
        this.props.onSubmit(data);
        
        
    },
    render(){
        return(
            <form onSubmit={this.handleSubmit} userInfo={this.props}>
                            <div className="form-group">
                                <label for="nameField">Name</label>
                                <input type="text" className="form-control" id="nameField" placeholder="Enter Name" ref={(input) => this.userNameInput = input} required/>
                            </div>
                            <div className="form-group">
                                <label for="salaryField">Salary</label>
                                <input type="text" className="form-control" id="salaryField" placeholder="Enter Salary" ref={(input) => this.userSalaryInput = input} required/>
                            </div>
                            <div className="form-group">
                                <label for="organizationField">Organization</label>
                                <input type="text" className="form-control" id="organizationField" placeholder="Enter Organization name" ref={(input) => this.userOrgInput = input} required/>
                            </div>
                            <div className="form-group">
                                <label for="locationField">Location</label>
                                <input type="text" className="form-control" id="locationField" placeholder="Enter Location" ref={(input) => this.userLocationInput = input} required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add New User</button>
                        </form>
        )
    }
});

var AddUserModal = React.createClass({
   addToArray: function(cardInfo){
       console.log('hello');
        this.props.intialState.push(cardInfo);
        this.props.IntitialStatus(this.props.intialState);
  }, 
   
    
    render(){
        return(
            <div className="modal fade" tabindex="-1" role="dialog" id="AddUser">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Add new user</h4>
                    </div>
                    <div className="modal-body">
                    <AddUserForm onSubmit={this.addToArray}/>    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
});

var HomeTemplate = React.createClass({
    render(
    ){
        return(
            <div>
                <AddUserModal intialState = {this.props.userArray.loggedInStatus.userList} IntitialStatus = {this.props.userArray.handleToUpdate}/>
                <div className="actions">   
                    <div className="row">
                        <div className="col-md-12 userAction">
                                <a href="#addUser" data-toggle="modal" data-target="#AddUser">
                                    <div className="col-md-3">
                                            <img src="/images/Female-user-add-icon.png" alt="" className="img-responsive img-circle"/>
                                            <caption>Add user</caption>    
                                    </div>
                                </a>
                                <a href="#searchUser">
                                    <div className="col-md-3">
                                            <img src="/images/search_people.png" alt="" className="img-responsive img-circle"/>
                                            <caption>Search User</caption>    
                                    </div>
                            </a>
                                <a href="#updateUser">
                                    <div className="col-md-3">
                                            <img src="/images/updateUser.png" alt="" className="img-responsive img-circle"/>
                                            <caption>Update User</caption>    
                                    </div>
                                </a>
                                <a href="#deleteUser">
                                    <div className="col-md-3">
                                            <img src="/images/deleteUser.png" alt="" className="img-responsive img-circle"/>
                                            <caption>Remove User</caption>  
                                    </div>
                            </a>
                        </div> 
                    </div>
                <hr />
                <hr />  
                <div className="row">
                    <table className='table table-hover table-bordered'>
                        <caption></caption>
                        <thead> 
                            <tr> 
                                <th>#</th> 
                                <th>Name</th> 
                                <th>Organization {this.props.userArray.loggedInStatus.userList[0].name}</th>
                                <th>Salary</th>
                                <th>Location</th> 
                            </tr> 
                        </thead>
                            <UserList cards={this.props.userArray.loggedInStatus.userList} />            
                    </table>
                    
                </div>
            </div>
        </div>    
        )

    }
});





export default HomeTemplate;