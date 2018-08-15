import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {

    super(props);
    
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: '',
    }
  }
  handelPassword(e){
   this.setState({
      password: e.target.value
   })
   console.log(this.password)
  }
  handelPasswordConfirm(e){
    this.setState({
      passwordConfirm: e.target.value
    })
    console.log(this.password)
  }
  handelSubmit(e){
    e.preventDefault()
    this.validate()
  }
  validate(e){
    if(this.state.password === this.state.passwordConfirm){
      this.setState({valid: true})
    }else{
      this.setState({valid: false})
    }
  }
  render() {
    let trueOrFalse = this.state.valid ? "Password Confirmed" : "Password Denied"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" onChange={this.handelPassword.bind(this)} />
        <input type="password" placeholder="passwordConfirm"  onChange={this.handelPasswordConfirm.bind(this)}/>
        <input type="submit" placeholder="submit" onClick={this.validate.bind(this)} />
        <p>{trueOrFalse}</p>
      </div>
    );
  }
}

export default Validator;
