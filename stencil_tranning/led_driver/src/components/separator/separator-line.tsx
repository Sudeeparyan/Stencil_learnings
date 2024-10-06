import { Component, h } from '@stencil/core/internal';

@Component({
  tag: 'separator-line',
  styleUrl: './separator.css',
})
export class SeparatorLine {
  render() {
    return <div class="separator-line"></div>;
  }
}
