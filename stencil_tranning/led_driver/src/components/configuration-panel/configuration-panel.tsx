import { Component, h } from '@stencil/core/internal';

@Component({
  tag: 'configuration-panel',
  styleUrl: './configuration-panel.css',
  shadow: true,
})
export class ConfigurationPanel {
  render() {
    return (
      <div class="configuration-section">
        <operation-mode />
        <separator-line />
        <error-flag />
        <separator-line />
      </div>
    );
  }
}
