import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'profile-page',
  styleUrl: 'profile-page.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class ProfilePage {
  @Prop() image = 'user.jpg';
  userInfo = localStorage.getItem('user');
  userName = JSON.parse(this.userInfo);
  render() {
    const imageSrc = getAssetPath(`./assets/${this.image}`);
    return (
      <Host>
        <nav-bar></nav-bar>
        <div class="profile-box">
          <div>
            <img src={imageSrc} class="user-profile" />
          </div>
          <div>
            <p>
              Welcome, <b>{this.userName.name}</b>
            </p>
          </div>
        </div>
      </Host>
    );
  }
}
