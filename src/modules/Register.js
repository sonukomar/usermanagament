import React, { Component } from 'react';
import '../App.css';


class Register extends Component {

    validateLogin = (event) =>{
        event.preventDefault();
       
        if(this.passwordInput.value === this.confPasswordInput.value){
            this.props.loggedInStatus.isLoggedIn = true;
             this.props.loggedInStatus.errorMsg = null;
             this.props.loggedInStatus.email = this.emailInput.value;
             window.open("/#home","_self"); 
        }
        else{
           this.setState(prevState => {

          this.props.loggedInStatus.isLoggedIn = false;
          this.props.loggedInStatus.errorMsg = "Password and Confirm Password doesn't match, Please enter same password !!"
           
           });
        
     
        }
          
    }
  render() {
    
    return (
     <div className="row">
         <div className="col-md-4 col-md-offset-4 formDiv">
            <form onSubmit={this.validateLogin}>
                    <span className={"text-danger " + (this.props.loggedInStatus.isLoggedIn ? 'hide': 'show')}><strong>{this.props.loggedInStatus.errorMsg}</strong></span>
                    <div  className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address *</label>
                        <input type="email"  className="form-control" id="exampleInputEmail1" ref={(input) => this.emailInput = input} placeholder="Email" required/>
                    </div>    
                    <div  className="form-group">
                        <label htmlFor="exampleInputPassword1">Password *</label>
                        <input type="password"  className="form-control" id="exampleInputPassword1" ref={(input) => this.passwordInput = input} placeholder="Password" required />
                    </div>
                    <div  className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirm Password *</label>
                        <input type="password"  className="form-control" id="exampleInputPassword1" ref={(input) => this.confPasswordInput = input} placeholder="Password" required />
                    </div>
                   
                    <button type="submit" className="btn btn-success">Register</button>
                    
            </form>
        </div>    
     </div>
    );
  }
}

export default Register;
