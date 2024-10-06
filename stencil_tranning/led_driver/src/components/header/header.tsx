import { Component, h } from '@stencil/core/internal';

@Component({
  tag: 'driver-header',
  styleUrl: './header.css',
  shadow: true,
})
export class Header {
  render() {
    return <div class="header-title">LED Driver</div>;
  }
}
