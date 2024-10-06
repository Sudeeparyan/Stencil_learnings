import { Component, Host, Prop, h, Event } from '@stencil/core';

@Component({
  tag: 'child-component',
  styleUrl: 'child-component.css',
  shadow: true,
})
export class ChildComponent {
  @Prop() textInput: string;
  @Prop() isTextBoxEmpty: boolean;
  @Event() clickEvents: any;

  private sendEvent = (click: any) => {
    this.clickEvents.emit(click);
  };

  render() {
    return (
      <Host>
        <br></br>
        <slot></slot>
        <p class="childBox">
          You Typed - <b>{this.isTextBoxEmpty ? 'Type Anything...' : this.textInput}</b>
        </p>
        <slot name="inputBox"></slot>
        <button onClick={click => this.sendEvent(click)}>Click me!</button>
      </Host>
    );
  }
}
