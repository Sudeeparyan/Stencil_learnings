import { newSpecPage } from '@stencil/core/testing';
import { ChildComponent } from '../child-component';

describe('child-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChildComponent],
      html: `<child-component></child-component>`,
    });
    expect(page.root).toEqualHtml(`
      <child-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </child-component>
    `);
  });
});
