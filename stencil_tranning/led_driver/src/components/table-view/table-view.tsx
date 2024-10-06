import { Component, Fragment, Listen, State, getAssetPath, h } from '@stencil/core/internal';

@Component({
  tag: 'table-view',
  styleUrl: './table-view.css',
})
export class TableView {
  @State() currentOperationMode: string = 'Normal';
  @State() currentSelectedFilter: string = 'Show All';
  @State() shouldDisplayFilterDropDown: boolean = false;

  @Listen('operationMode', { target: 'window' })
  updateOperationMode(event: CustomEvent<string>) {
    if (event.detail === 'Normal' || event.detail === 'Sleep') this.currentOperationMode = event.detail;
    else this.currentSelectedFilter = event.detail;

    this.shouldDisplayFilterDropDown = false;
  }

  toggleFilterDropDownVisibility(event: MouseEvent) {
    event.preventDefault();
    this.shouldDisplayFilterDropDown = !this.shouldDisplayFilterDropDown;
  }

  ledDeviceNames = ['LED A', 'LED B', 'LED C', 'LED D', 'LED E', 'LED F'];
  render() {
    const deafultAssetLocation = '../../assets/';
    const dropDownIconPath = getAssetPath(deafultAssetLocation + 'down-arrow.png');
    const searchIconPath = getAssetPath(deafultAssetLocation + 'search.png');
    return (
      <>
        <div class="table-manipulators">
          <div class="search-bar">
            <label htmlFor="search-index">Search : </label>
            <input id="search-index" type="text" placeholder="Search by LED Names" />
            <img src={searchIconPath} class="search-icon" />
          </div>
          <div class="filter-bar">
            <label htmlFor="filter-index">Filter by : </label>
            <span class="filter-options" onClick={event => this.toggleFilterDropDownVisibility(event)}>
              {this.currentSelectedFilter} <img src={dropDownIconPath} class="dropdown-icon" />
            </span>
            {this.shouldDisplayFilterDropDown && <dropdown-list id="filter-index" dropDownOptions={['Show All', 'Show enabled channels only', 'Show disabled channels only']} />}
          </div>
        </div>
        <div class="table-data">
          <table>
            <tr>
              <th>
                LED Name <span></span>
              </th>
              <th>
                Status <span> &uarr;</span>
              </th>
            </tr>
            {this.ledDeviceNames.map(ledDeviceName => {
              return (
                <tr>
                  <td id={ledDeviceName.split(' ')[1]}>{ledDeviceName}</td>
                  <td class="led-details">
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                    <span id={ledDeviceName.split(' ')[1]}>Enabled</span>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}
