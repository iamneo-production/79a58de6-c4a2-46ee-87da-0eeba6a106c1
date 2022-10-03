import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import React, {Component} from 'react';

export default class SignUp extends Component {
    
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
        this.SignUp();
    }
    }
    validateForm(){
    let fields=this.state.fields;
    let errors={};
    let isValid=true;
    if(!fields["usertype"]) { 
        isValid=false;
        errors["usertype"]="*Please select a usertype";
    }
    if(!fields["email"]) { 
        isValid=false;
        errors["email"]="*Please enter a email";
    }
    if(!fields["username"]){
        isValid=false;
        errors["username"]="*Please enter a username";
    }
    if(!fields["number"]){
        isValid=false;
        errors["number"]="*Please enter a number";
    }
    if(!fields["password"]){
        isValid=false;
        errors["password"]="*Please enter a password";
    }
    if(!fields["cpassword"]){
        isValid=false;
        errors["cpassword"]="*Please enter a password";
    }
    this.setState({
    errors: errors
    });
    return isValid;
}
SignUp(){
    fetch("https://8080-badfcdacefbccacffcbcfcaeccfaecbcfbbaf.examlyiopb.examly.io/api/saveuser",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.fields)
    }).then(()=>{
        alert("New user created successfully");
        window.location="/Login";
    })
}
render (){


    return (
    <div>
        <div>
            <h1 className='register'>Register</h1>
        </div>
        <br></br>
        <div className='container'>
            <br></br>
            <div style={{marginTop : 20,padding : 20,backgroundColor : "white",width : "30%",display : "flex",flexDirection :"column",margin : "auto",alignItems : "center",borderRadius : 10,boxShadow: '2px 4px rgba(00,00,00,0.5)',}}>
            <form onSubmit={this.submitForm}>
            <select className="select" name="usertype" onChange={this.handleChange} value={this.state.fields.usertype} id="outlined-basic" variant="outlined">
            <option  value="select">Select Option</option>
            <option  value="admin">Admin</option>
            <option  value="user">User</option>
            </select><br/><br/>
            <div className='error'>{this.state.errors.usertype}</div>
            <TextField id="outlined-basic" label="Enter email" variant="outlined" name="email" value={this.state.fields.email} onChange={this.handleChange}/><br></br>
            <br></br>
            <div className='error'>{this.state.errors.email}</div>
            <TextField id="outlined-basic" label="Enter Username" variant="outlined" name="username" value={this.state.fields.username} onChange={this.handleChange}/><br></br>
            <br></br>
            <div className='error'>{this.state.errors.username}</div>
            <TextField id="outlined-basic" label="Enter Mobilenumber" variant="outlined" name="number" value={this.state.fields.number} onChange={this.handleChange}/><br></br>
            <br></br>
            <div className='error'>{this.state.errors.number}</div>
            <TextField
                id="outlined-password-input"
                name="password"  
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.fields.password}
                onChange={this.handleChange}/><br></br>
                <br></br>
            <div className='error'>{this.state.errors.password}</div>
            <TextField
                id="outlined-password-input"
                name="cpassword"  
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.fields.cpassword}
                onChange={this.handleChange}/><br></br>
                <br></br>
            <div className='error'>{this.state.errors.cpassword}</div>
            <button className='button' >Submit</button>
            </form>
            <br></br>
            <br></br>
            <p>Already a user?</p><Link className="front_link" to="/Login">Login</Link>
            </div>
        </div>
    </div>
    );
  }
  
}