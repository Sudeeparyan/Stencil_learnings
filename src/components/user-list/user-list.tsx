import { Component, Host, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'user-list',
  styleUrl: 'user-list.css',
  shadow: true,
})
export class UserList {
  @Prop() users: string[];

  render() {
    return (
      <Host>
        <h3>Added Users</h3>
        {this.users.map((userName: string) => {
          return <li>{userName}</li>;
        })}
      </Host>
    );
  }
}
