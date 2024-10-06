import { Component, Fragment, Listen, State, getAssetPath, h } from '@stencil/core/internal';

@Component({
  tag: 'operation-mode',
  styleUrl: './operation-mode.css',
})
export class OperatingMode {
  connectedCallback() {
    const operationModeEvent = new CustomEvent('operationMode', {
      detail: 'Normal',
    });
    window.dispatchEvent(operationModeEvent);
  }

  @State() currentOperationMode: string = 'Normal';
  @State() shouldDisplayOperationsDropDown: boolean = false;

  @Listen('operationMode')
  updateOperationMode(event: CustomEvent<string>) {
    this.currentOperationMode = event.detail;
    this.shouldDisplayOperationsDropDown = false;
  }

  toggleOperationsDropDownVisibility(event: MouseEvent) {
    event.preventDefault();
    this.shouldDisplayOperationsDropDown = !this.shouldDisplayOperationsDropDown;
  }

  render() {
    const deafultAssetLocation = '../../assets/';
    const modeIconPath = getAssetPath(deafultAssetLocation + 'mode.svg');
    const dropDownIconPath = getAssetPath(deafultAssetLocation + 'down-arrow.png');
    return (
      <>
        <div class="configuration-title">Operating Mode</div>
        <div class="configuration-holder">
          <img class="operation-mode-icon" src={modeIconPath} />
          <div class="current-operation">{this.currentOperationMode}</div>
          <img class="drop-down-icon" src={dropDownIconPath} onClick={event => this.toggleOperationsDropDownVisibility(event)} />
        </div>
        {this.shouldDisplayOperationsDropDown && <dropdown-list dropDownOptions={['Normal', 'Sleep']} />}
      </>
    );
  }
}
