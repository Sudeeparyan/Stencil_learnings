import { Component, Host, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
  shadow: true,
})
export class NavBar {
  render() {
    return (
      <Host>
        <div class="navbar">
          <div class="navItems">
            <a {...href('/profile')}>Profile</a>
            <a {...href('/assignments')}>Assignments</a>
            <a {...href('/')}>Logout</a>
          </div>
        </div>
      </Host>
    );
  }
}
