import { Component, h } from '@stencil/core';
import { createRouter, Route } from 'stencil-router-v2';

const Router = createRouter();

@Component({
  tag: 'app-router',
  shadow: true,
})
export class AppRouter {
  render() {
    return (
      <Router.Switch>
        <Route path="/">
          <login-page></login-page>
        </Route>
        <Route path="/sign-up">
          <signup-page></signup-page>
        </Route>
        <Route path="/assignments">
          <my-app myName="Manudev"></my-app>
        </Route>
        <Route path="/profile">
          <auth-root></auth-root>
        </Route>
        <Route path="*">
          <unknown-route></unknown-route>
        </Route>
      </Router.Switch>
    );
  }
}
