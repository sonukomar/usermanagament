import React, { Component } from 'react';
import '../App.css';

class ListUser extends Component {
  render() {
    return (
     <div className="actions">   
        <div className="row">
           <div className="col-md-12 userAction">
               <div className="col-md-3">
                    <img src="/images/Female-user-add-icon.png" alt="" className="img-responsive img-circle"/>
                    <caption>Add user</caption>    
               </div>
               <div className="col-md-3">
                    <img src="/images/search_people.png" alt="" className="img-responsive img-circle"/>
                    <caption>Search User</caption>    

               </div>
               <div className="col-md-3">
                    <img src="/images/updateUser.png" alt="" className="img-responsive img-circle"/>
                    <caption>Update User</caption>    

               </div>
               <div className="col-md-3">
                    <img src="/images/deleteUser.png" alt="" className="img-responsive img-circle"/>
                    <caption>Remove User</caption>  

               </div>
           </div> 
        </div>
        <hr />
        <div className="row">
            <div className="col-md-3 searchDiv">
            <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">First Name *</label>
                        <input type="text"  className="form-control" id="exampleInputPassword1" placeholder="First Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Last Name *</label>
                        <input type="text"  className="form-control" id="exampleInputPassword1" placeholder="Last Name" />
                    </div>    
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address *</label>
                        <input type="email"  className="form-control" id="exampleInputEmail1" placeholder="Email" />
                    </div>    
                    
                    
                    <button type="submit"  className="btn btn-success">Search</button>
                    <button type="submit"  className="btn btn-success second">Reset</button>
                </form>
            </div>    
        </div>
    </div>    
    );
  }
}

export default ListUser;
