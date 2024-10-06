import { Component, Fragment, Listen, State, h } from '@stencil/core/internal';

@Component({
  tag: 'error-flag',
  styleUrl: './error-flag.css',
})
export class ErrorFlag {
  @State() currentOperationMode: string = 'Normal';
  @State() errorState: boolean = false;
  @State() resolveTime: number = 10;

  randomNumberInterval: number;
  resolveErrorInterval: number;

  @Listen('operationMode', { target: 'window' })
  updateOperationMode(event: CustomEvent<string>) {
    this.currentOperationMode = event.detail;
  }

  @Listen('operationMode', { target: 'window' })
  randomNumberGenerator(event: CustomEvent<string>) {
    if (event.detail === 'Normal') {
      this.randomNumberInterval = window.setInterval(() => {
        let randomNumber = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
        if (randomNumber === 10) {
          this.errorState = true;
          window.clearInterval(this.randomNumberInterval);
        }
      }, 2000);
    } else {
      this.errorState = false;
      window.clearInterval(this.randomNumberInterval);
    }
  }

  resolveError() {
    if (this.resolveTime === 0) {
      window.clearInterval(this.resolveErrorInterval);
      this.resolveTime = 10;
      const operationModeEvent = new CustomEvent('operationMode', {
        detail: 'Normal',
      });
      this.randomNumberGenerator(operationModeEvent);
    }

    if (this.errorState) {
      this.resolveErrorInterval = window.setInterval(() => {
        this.resolveTime = --this.resolveTime;
        if (this.resolveTime === 0) {
          this.errorState = false;
          this.resolveError();
        }
      }, 1000);
    }
  }

  render() {
    return (
      <>
        <div class="configuration-title">Error Flag {this.resolveTime < 10 && <small class="resolve-time">{this.resolveTime.toString() + 's'}</small>}</div>
        <div class="configuration-holder">
          <div class={this.errorState ? 'error-indicator' : 'positive-indicator'}></div>
          <div class="error-placeholder">{this.errorState ? 'ERR' : '--'}</div>
          <button
            class="clear-button"
            style={this.errorState ? { backgroundColor: '#118899', cursor: 'pointer' } : { backgroundColor: 'grey', cursor: 'default' }}
            onClick={() => this.resolveError()}
          >
            Clear
          </button>
        </div>
        {this.currentOperationMode === 'Sleep' ? <div class="inactive-layer" title="In Sleep Mode"></div> : null}
      </>
    );
  }
}
