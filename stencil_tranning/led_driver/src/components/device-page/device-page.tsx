import { Component, Fragment, h } from '@stencil/core/internal';

@Component({
  tag: 'device-page',
  shadow: true,
  styleUrl: './device-page.css',
})
export class DevicePage {
  render() {
    return (
      <>
        <driver-header />
        <configuration-panel />
        <device-configuration-holder />
      </>
    );
  }
}
