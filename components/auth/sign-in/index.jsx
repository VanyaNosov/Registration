import React from 'react';
import style from '../auth.css';
import globalstyle from '../../global/global_style.css'
import { NavLink } from "react-router-dom";
import request from '../api/index.js'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  request() {
    console.log(this.state)
    const r = request('http://localhost:3000/sign_in', "POST", this.state)
  }

  validation(e) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  }

  render() {
    return (
      <form>
        <div className={style.main_container}>
          <div className={style.content_block}>
            <h1 className={style.tittle}>Sign in</h1>
            <input placeholder="email" name="email" className={style.registrationField} onChange={e => this.change(e)} />
            <input placeholder="password" name="password" className={style.registrationField} onChange={e => this.change(e)} />
            <button id={style.button} className={globalstyle.button} type='button' onClick={() => this.request()}>sign in</button>
          </div>
          <div className={style.infoBlock}>
            <p className={style.infoText}>Don't have an account ?</p>
            <NavLink className={style.link} to="/signUp">Sing up</NavLink>
          </div>
        </div>
      </form>
    );
  };
};

export default SignIn;