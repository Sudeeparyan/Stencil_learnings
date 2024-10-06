import { Component, Event, EventEmitter, Prop, h } from '@stencil/core/internal';

@Component({
  tag: 'dropdown-list',
  styleUrl: './dropdown-list.css',
})
export class DropDownList {
  @Event() operationMode: EventEmitter<string>;
  @Prop() dropDownOptions: string[];

  emitSelectedOperation = (selectedOption: string) => {
    this.operationMode.emit(selectedOption);
  };

  render() {
    return this.dropDownOptions.map(dropDownOption => {
      return (
        <div class="drop-down-holder" onClick={() => this.emitSelectedOperation(dropDownOption)}>
          {dropDownOption}
        </div>
      );
    });
  }
}
