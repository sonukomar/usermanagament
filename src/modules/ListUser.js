import React, { Component } from 'react';
import '../App.css';

class ListUser extends Component {
  render() {
    return (
     <div className="actions">   
        <div className="row">
            <div className="col-md-12 opration">
                <button className='btn btn-secondary'>Add User</button>
                <button className='btn btn-secondary'>Search & UpdateUser</button>
            </div>    
        </div>
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
