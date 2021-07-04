import React from 'react';
import style from '../auth.css';
import globalstyle from '../../global/global_style.css'
import request from '../api/index.js'
import { NavLink } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  sendingRequest() {
    const r = request('http://localhost:3000/sign_up', "POST", this.state)
    console.log('1')
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <div className={style.main_container}>
          <div className={style.content_block}>
            <h1 className={style.tittle}>Sign up</h1>
            <input placeholder="first name" name="firstName" value={this.state.firstName} className={style.registrationField} onChange={e => this.change(e)} />
            <input placeholder="last name" name="lastName" value={this.state.lastName} className={style.registrationField} onChange={e => this.change(e)} />
            <input placeholder="email" name="email" value={this.state.email} className={style.registrationField} onChange={e => this.change(e)} />
            <input placeholder="password" name="password" value={this.state.password} className={style.registrationField} onChange={e => this.change(e)} />
            <button id={style.button} className={globalstyle.button} type='button' onClick={() => this.sendingRequest()}>sign up</button>
          </div>
          <div className={style.infoBlock}>
            <p className={style.infoText}>Don't have an account ?</p>
            <NavLink className={style.link} to="/signIn">Sing in</NavLink>
          </div>
        </div>
      </form>
    );
  };
};

export default SignUp;