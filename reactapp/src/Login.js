import TextField from '@mui/material/TextField';
import './App.css';
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Login extends Component {
    constructor(){
        super();
        this.state={
        fields: {},
        errors: {}
    }
    this.handleChange=this.handleChange.bind(this);
    this.submitForm=this.submitForm.bind(this);
    this.validateForm=this.validateForm.bind(this);
    }
    handleChange(e){
    let fields=this.state.fields;
    fields[e.target.name]=e.target.value;
    this.setState({
    fields
    });
}

submitForm(e){
    e.preventDefault();
    if(this.validateForm()) { 
        this.login();
    }
    }
    validateForm(){
    let fields=this.state.fields;
    let errors={};
    let isValid=true;
    if(!fields["email"]) { 
        isValid=false;
        errors["email"]="*Please enter a email";
    }
    if(!fields["password"]){
        isValid=false;
        errors["password"]="*Please enter a password";
    }
    this.setState({
    errors: errors
    });
    return isValid;
}

login(){
    fetch("https://8080-badfcdacefbccacffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/api/login/"+this.state.fields.email).then((data)=>{
      if(data.status===200)
      {
      data.json().then((response)=>{
       if(response){
         if(response.password===this.state.fields.password){
            if(response.usertype==="admin"){
              localStorage.setItem('Admin',response.id);
              alert("Admin Login Successful");
              window.location="/adminDashboard";
            }
            else
            {
              localStorage.setItem('User',response.id);
              alert("User Login Successful");
              window.location="/userDashboard";
            }
         }
         else
         {
           alert("Invalid Password");
         }
       }
    })
}
else
{
  alert("Invalid Email");
}
    })
  }
   render(){
    return (
        <>
        <div className='login'>
            <h1>Login</h1>
            </div>
        <br></br>
        <div style={{padding : 20,backgroundColor : "white",width : "30%",display : "flex",flexDirection :"column",margin : "auto",alignItems : "center",borderRadius : 10,boxShadow: '2px 4px rgba(00,00,00,0.5)',}}>
        <form onSubmit={this.submitForm}>
        <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={this.state.fields.email} onChange={this.handleChange}/><br></br>
        <div className='error'>{this.state.errors.email}</div><br/>
        <TextField
          id="outlined-password-input"
          name="password" value={this.state.fields.password} 
          onChange={this.handleChange}
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          /><br></br>
        <div className='error'>{this.state.errors.password}</div><br/>
        <button className='button'>Login</button>
        <p>New User : <Link to="/signup" >SignUp</Link></p>
        </form>
        </div>
        </>
    )
   }
}
