import { Component, Host, h, AttachInternals, State } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'login-page',
  styleUrl: 'login-page.css',
  shadow: true,
  formAssociated: true,
})
export class LoginPage {
  @AttachInternals() internals: ElementInternals;
  @State() validationMessage: string = '';
  @State() email: string;
  @State() passWord: string;

  componentWillRender() {
    localStorage.removeItem('isAuthenticated');
  }

  componentWillLoad() {
    if (window.location.pathname !== '/') window.location.pathname = '/';
  }

  handleEmail(event: Event) {
    const email = event.target as HTMLInputElement;
    if (!email.validity.valid) {
      this.validationMessage = 'Please enter a valid email address.';
      this.internals.setValidity(
        {
          customError: true,
        },
        this.validationMessage,
      );
    } else {
      this.validationMessage = '';
      this.internals.setValidity({
        customError: false,
      });
      this.email = email.value;
    }
  }

  handlePassword = (event: Event) => {
    const passWord = event.target as HTMLInputElement;
    this.passWord = passWord.value;
  };

  handleLogin = () => {
    const userDetails: any = localStorage.getItem('user');
    if (!this.email || !this.passWord) alert('Fill all fields properly.');
    else {
      if (userDetails !== null) {
        const userInfo = JSON.parse(userDetails);
        if (userInfo.email !== this.email) alert('Wrong Email');
        else if (userInfo.password !== this.passWord) {
          alert('Wrong Password');
          localStorage.removeItem('isAuthenticated');
        } else if (userInfo.email === this.email && userInfo.password === this.passWord) {
          window.location.replace('/profile');
          localStorage.setItem('isAuthenticated', 'true');
        }
      } else {
        alert('No Account Found! Sign-In First');
      }
    }
  };

  render() {
    return (
      <Host>
        <div class="heading">Login Form</div>
        <div class="main-box">
          <div class="login-container">
            <div class="form-item">
              <label>Email:</label>
              <input name="email" type="email" onInput={this.handleEmail.bind(this)} />
            </div>
            {this.validationMessage && <div class="error-message">{this.validationMessage}</div>}
            <div class="form-item">
              <label>Password:</label>
              <input name="password" type="password" onInput={this.handlePassword.bind(this)} />
            </div>
            <div>
              <button onClick={this.handleLogin}>Login</button>
            </div>
            <div class="sign-up-box">
              Not a user ? &nbsp;<a {...href('/sign-up')}>Sign-In</a>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
