import { Component, Listen, State, h } from '@stencil/core/internal';

@Component({
  tag: 'device-configuration-holder',
  styleUrl: './device-configuration-holder.css',
})
export class DeviceConfigurationHolder {
  @State() viewMode: string = 'SVG';
  @State() currentOperationMode: string = 'Normal';

  @Listen('operationMode', { target: 'window' })
  updateOperationMode(event: CustomEvent<string>) {
    this.currentOperationMode = event.detail;
  }

  changeActiveViewMode(mode: string) {
    this.viewMode = mode;
  }

  render() {
    return (
      <div class="device-configuration-holder">
        <div class="device-configuration-placeholder">CONFIGURE DEVICE</div>
        <div class="device-configuration-header">
          <div class="view" onClick={() => this.changeActiveViewMode('SVG')} style={this.viewMode === 'SVG' && { backgroundColor: 'red ' }}>
            SVG View
          </div>
          <div class="view" onClick={() => this.changeActiveViewMode('Table')} style={this.viewMode === 'Table' && { backgroundColor: 'red ' }}>
            Table View
          </div>
          {this.currentOperationMode === 'Sleep' && <div class="inactive-layer" title="In Sleep Mode"></div>}
        </div>
        {this.viewMode === 'SVG' ? <svg-view /> : <table-view />}
      </div>
    );
  }
}
