import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'unknown-route',
  shadow: true,
})
export class UnknownRoute {
  render() {
    return (
      <Host>
        <h2>Page Not Found :)</h2>
      </Host>
    );
  }
}
