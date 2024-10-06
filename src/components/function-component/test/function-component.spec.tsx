import { newSpecPage } from '@stencil/core/testing';
import { FunctionComponent } from '../function-component';

describe('function-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FunctionComponent],
      html: `<function-component></function-component>`,
    });
    expect(page.root).toEqualHtml(`
      <function-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </function-component>
    `);
  });
});
