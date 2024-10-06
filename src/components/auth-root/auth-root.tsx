import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'auth-root',
  shadow: true,
})
export class AuthRoot {
  @State() isAuthenticated: string = localStorage.getItem('isAuthenticated') ? localStorage.getItem('isAuthenticated') : null;

  render() {
    return <Host>{this.isAuthenticated === 'true' ? <profile-page></profile-page> : <login-page></login-page>}</Host>;
  }
}
