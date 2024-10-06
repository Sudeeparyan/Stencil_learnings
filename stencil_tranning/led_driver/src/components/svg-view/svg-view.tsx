import { Component, Element, Fragment, Listen, State, h } from '@stencil/core/internal';

@Component({
  tag: 'svg-view',
  styleUrl: './svg-view.css',
})
export class SvgView {
  @State() selectedLED: string = 'A';
  @State() currentOperationMode: string = 'Normal';

  @Listen('operationMode', { target: 'window' })
  updateOperationMode(event: CustomEvent<string>) {
    this.currentOperationMode = event.detail;
  }
  @Element() element: HTMLSvgViewElement;

  ledDeviceNames = ['LED A', 'LED B', 'LED C', 'LED D', 'LED E', 'LED F'];

  configureLEDs(ledDevice: string, event: Event) {
    let selectedElement = this.element.querySelector('#' + ledDevice.split(' ')[1]);
    if ((event.target as HTMLInputElement).checked) (selectedElement as HTMLElement).style.outline = '3px solid #118899';
    else {
      this.ledDeviceNames.map(ledDevice => {
        let ledElement = this.element.querySelector('#' + ledDevice.split(' ')[1]);
        if (ledElement.getAttribute('id') === ledDevice.split(' ')[1] && (ledElement as HTMLElement).style.backgroundColor === 'rgba(17, 135, 153, 0.44)')
          (ledElement as HTMLElement).style.backgroundColor = 'whitesmoke';
      });
      (selectedElement as HTMLElement).style.outline = '3px solid rgb(151, 150, 150)';
    }
  }

  enableAllLEDs() {
    this.ledDeviceNames.map(ledDevice => {
      let ledElement = this.element.querySelector('#' + ledDevice.split(' ')[1]);
      (ledElement as HTMLElement).style.outline = '3px solid #118899';
    });
    let ledEnablers = this.element.querySelectorAll('.led-enabler');
    ledEnablers.forEach(ledEnabler => {
      (ledEnabler as HTMLInputElement).checked = true;
    });
  }

  disableAllLEDs() {
    this.ledDeviceNames.forEach((ledDevice, index) => {
      if (index > 0) {
        let ledElement = this.element.querySelector('#' + ledDevice.split(' ')[1]);
        (ledElement as HTMLElement).style.outline = '3px solid rgb(151, 150, 150)';
        (ledElement as HTMLElement).style.backgroundColor = 'whitesmoke';
      }
    });
    let ledEnablers = this.element.querySelectorAll('.led-enabler');
    ledEnablers.forEach((ledEnabler, index) => {
      if (index > 0) (ledEnabler as HTMLInputElement).checked = false;
    });
  }

  displayLEDProperties(ledDeviceName: string, event: Event) {
    this.ledDeviceNames.map(ledDevice => {
      let ledElement = this.element.querySelector('#' + ledDevice.split(' ')[1]);
      (ledElement as HTMLElement).style.backgroundColor !== 'whitesmoke' && (event.target as HTMLElement).style.outline !== 'rgb(151, 150, 150) solid 3px'
        ? ((ledElement as HTMLElement).style.backgroundColor = 'whitesmoke')
        : null;
    });

    let ledEnablers = this.element.querySelectorAll('.led-enabler');
    ledEnablers.forEach(ledEnabler => {
      if (ledEnabler.getAttribute('id') === ledDeviceName && (ledEnabler as HTMLInputElement).checked) {
        if ((event.target as HTMLElement).style.backgroundColor === 'rgba(17, 135, 153, 0.44)') {
          (event.target as HTMLElement).style.backgroundColor = 'whitesmoke';
        } else {
          (event.target as HTMLElement).style.backgroundColor = 'rgba(17, 135, 153, 0.44)';
          this.selectedLED = ledDeviceName;
          console.log(this.selectedLED);
        }
      }
    });
  }

  componentDidLoad() {
    let ledElements = this.element.querySelectorAll('.led-device');
    ledElements.forEach(ledElement => {
      (ledElement as HTMLElement).style.outline = '3px solid rgb(151, 150, 150)';
    });
    (ledElements[0] as HTMLElement).style.outline = '3px solid #118899';
    (ledElements[0] as HTMLElement).style.backgroundColor = 'rgba(17, 135, 153, 0.44)';

    let ledEnabler = this.element.querySelector('.led-enabler');
    (ledEnabler as HTMLInputElement).checked = true;
  }

  render() {
    return (
      <>
        <div class="centralized-device">DEMO DEVICE</div>
        <div class="led-device-holder">
          {this.ledDeviceNames.map(ledDevice => {
            return (
              <div class="led-device-configuration-holder">
                <div class="led-device" id={ledDevice.split(' ')[1]} onClick={event => this.displayLEDProperties(ledDevice.split(' ')[1], event)}>
                  {ledDevice}
                </div>
                <input
                  class="led-enabler"
                  id={ledDevice.split(' ')[1]}
                  type="checkbox"
                  onChange={event => {
                    this.configureLEDs(ledDevice, event);
                  }}
                />
              </div>
            );
          })}
        </div>
        {this.currentOperationMode === 'Sleep' ? <div class="inactive-layer" title="In Sleep Mode"></div> : null}

        <div class="buttons-holder">
          <button class="controller-button" onClick={() => this.enableAllLEDs()}>
            Enable All
          </button>
          <button class="controller-button" onClick={() => this.disableAllLEDs()}>
            Disable All
          </button>
        </div>
      </>
    );
  }
}
