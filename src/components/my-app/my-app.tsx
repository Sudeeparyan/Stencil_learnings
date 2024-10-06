import { Component, Host, Prop, h, Element, State, Watch } from '@stencil/core';
import { FunctionComponent } from '../function-component/function-component';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: true,
})
export class MyApp {
  @Prop() myName: string = 'dev';

  @Element() hostElem: HTMLElement;

  @State() secondsAfterReload: number = 0;
  @State() textInput: string = '';
  @State() userNameInput: string = '';
  @State() clickCount: number = 0;
  @State() userLists: string[] = [];

  @Watch('secondsAfterReload')
  // watchPropHandler(newValue: number, oldValue: number) {
  //   console.log('Old value', oldValue);
  //   console.log('New value', newValue);
  // }

  // connectedCallback() {
  //   console.log('HOST Element:', this.hostElem.tagName);
  //   console.log('connectedCallback');
  // }

  // disconnectedCallback() {
  //   console.log('disconnectedCallback');
  // }
  componentWillLoad() {
    //this method is only called once, it's a good place to
    //load data asynchronously.
    setInterval(() => {
      this.secondsAfterReload++;
    }, 1000);
    console.log('componentWillLoad component is about to load');
  }

  // componentWillRender() {
  //   // It's always recommended to make any rendered state updates
  //   //  within componentWillRender()
  //   console.log('componentWillRender');
  // }

  // componentDidLoad() {
  //   //Called once just after the component fully loaded
  //   // and the first render() occurs.
  //   console.log('componentDidLoad');
  // }

  // componentShouldUpdate() {
  //   //This hook is called when a component's Prop or State
  //   //property changes and a rerender is about to be requested.
  //   return true;
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate - is called since we are updating this.myAPIData in componentDidLoad');
  // }

  getMyName = () => {
    return this.myName;
  };

  private getInputBoxValue = (event: Event) => {
    this.textInput = (event.target as HTMLInputElement).value;
  };

  private captureEvent = (click: any) => {
    console.log('Click Event Captured', click);
    this.clickCount++;
  };

  private getUserName = (event: Event) => {
    this.userNameInput = (event.target as HTMLInputElement).value;
  };

  private addUser = () => {
    this.userLists = [...this.userLists, this.userNameInput];
  };

  render() {
    return (
      <Host>
        <nav-bar></nav-bar>
        <h2>Hello {this.getMyName()}</h2>
        <label>
          Seconds After Reload: <b>{this.secondsAfterReload}</b>
        </label>
        <child-component onClickEvents={click => this.captureEvent(click)} textInput={this.textInput} isTextBoxEmpty={this.textInput.length === 0 ? true : false}>
          <h3>From Child Component</h3>
          <input slot="inputBox" type="text" onInput={this.getInputBoxValue}></input>
        </child-component>
        <p>
          You Clicked <b>{this.clickCount}</b> times!
        </p>
        <div>
          <input type="text" onInput={this.getUserName}></input>
          <button onClick={this.addUser}>Add</button>
        </div>
        <user-list users={this.userLists} />
        <FunctionComponent name="Stencil">
          <h3>I am the Child of Functional Component</h3>
        </FunctionComponent>
      </Host>
    );
  }
}
