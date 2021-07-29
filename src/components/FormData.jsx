import React, { Component } from 'react';
import "./FormData.css"
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
class FormData extends Component {
  
  userData;

  constructor(props){
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangecPassword = this.onChangecPassword.bind(this);

    this.state = {
      fname:'',
      lname:'',
      email:'',
      password:'',
      cpassword:''
    }
  }

  onChangeFirstName(e){
    this.setState({ fname:e.target.value})
  }

  onChangeLastName(e){
    this.setState({lname:e.target.value})
  }

  onChangeEmail(e){
    this.setState({email:e.target.value})
  }

  onChangePassword(e){
    this.setState({password:e.target.value})
  }

  onChangecPassword(e){
    this.setState({cpassword: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();

    this.setState({
      fname:'',
      lname:'',
      email:'',
      password:'',
      cpassword:''
    });
  }

  componentDidMount(){
    this.userData = JSON.parse(localStorage.getItem('user'));

    if(localStorage.getItem('user')){
      this.setState({
        fname: this.userData.fname,
        lname: this.userData.lname,
        email: this.userData.email,
        password: this.userData.password,
        cpassword: this.userData.cpassword
      })
    } else{
      this.setState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        cpassword:''
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('user', JSON.stringify(nextState));
}


  render() {
    return  (
      <div className="main">
        <div className="container">
        <h1>Create account</h1>
        <p>Already have an account? <a href="https://www.google.com" target="_blank">Sign in</a></p>
        <form onSubmit={()=> this.onSubmit()}>
          <input type="text" name="fname" id="fname" placeholder="First name" onChange={this.onChangeFirstName} value={this.state.fname}/>
          <input type="text" name="lname" id="lname" placeholder="Last name" onChange={this.onChangeLastName} value={this.state.lname}/>
          <br />
          <input type="email" name="email" id="email" placeholder="Email" onChange={this.onChangeEmail} value={this.state.email}/>
          <br />
          <input type="password" name="password" id="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.password}/>
          <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" onChange={this.onChangecPassword} value={this.state.cpassword}/>
          <br />
          <br />
          <button id="sButton" type="submit">Sign up <span><ArrowForwardIcon/></span></button>
        </form>
        <div className="bottomLine">
          <input type="checkbox" name="cbb" id="cb" />
          <label htmlFor="cb">I have read and agree to the <span><a href="">Terms of Services</a></span></label>
        </div>
      </div>
      </div>
    );
  }
}

export default FormData;