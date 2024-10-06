import { Component, Host, h, State, AttachInternals, Prop } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'signup-page',
  styleUrl: 'signup-page.css',
  shadow: true,
  formAssociated: true,
})
export class SignupPage {
  @State() email: string;
  @State() passWord: string;
  @State() name: string;
  @State() validationMessage: string = '';
  @State() isSignupSuccess: boolean = false;
  @AttachInternals() internals: ElementInternals;

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
  handleName = (event: Event) => {
    const name = event.target as HTMLInputElement;
    this.name = name.value;
  };

  handleFormSubmit = () => {
    if (!this.name || !this.email || !this.passWord) alert('Fill all fields properly to Signup');
    else {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.passWord,
      };
      localStorage.setItem('user', JSON.stringify(formData));
      this.isSignupSuccess = true;
      window.location.href = '/';
    }
  };

  render() {
    return (
      <Host>
        <div class="heading">Create an Account</div>
        <div class="main-box">
          <div class="login-container">
            <div class="form-item">
              <label>Name:</label>
              <input type="name" name="username" onInput={this.handleName.bind(this)} />
            </div>
            <div class="form-item">
              <label>Email:</label>
              <input type="email" name="email" onInput={this.handleEmail.bind(this)} />
            </div>
            {this.validationMessage && <div class="error-message">{this.validationMessage}</div>}
            <div class="form-item">
              <label>Password:</label>
              <input type="password" name="password" onInput={this.handlePassword.bind(this)} />
            </div>
            <div>
              <button disabled={this.validationMessage !== ''} onClick={this.handleFormSubmit}>
                Sign-Up
              </button>
            </div>
            <div class="sign-up-box">
              Exsisting User? &nbsp;<a {...href('/')}>Login</a>
            </div>
          </div>
        </div>
        {/* {this.isSignupSuccess && <stencil-route-redirect url="/" />} */}
      </Host>
    );
  }
}
