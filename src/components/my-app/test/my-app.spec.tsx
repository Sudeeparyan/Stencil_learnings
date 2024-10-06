import { newSpecPage } from '@stencil/core/testing';
import { MyApp } from '../my-app';

describe('my-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyApp],
      html: `<my-app></my-app>`,
    });
    expect(page.root).toEqualHtml(`
      <my-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-app>
    `);
  });
});
