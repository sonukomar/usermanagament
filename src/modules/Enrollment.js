import React, { Component } from 'react';
import '../App.css';

class Enrollment extends Component {
  render() {
    return (
     <div className="row">
         <div className="col-md-4 col-md-offset-4 formDiv">
            <form>
                    <div  className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email"  className="form-control" id="exampleInputEmail1" placeholder="Email" />
                    </div>    
                    <div  className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"  className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                   
                    <button type="submit"  className="btn btn-success">Login</button>
                    <p className='pull-right'>Don't have an account? <a href="#">Create one</a></p>
            </form>
        </div>    
     </div>
    );
  }
}

export default Enrollment;
