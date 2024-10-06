import { newSpecPage } from '@stencil/core/testing';
import { UnknownRoute } from '../unknown-route';

describe('unknown-route', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UnknownRoute],
      html: `<unknown-route></unknown-route>`,
    });
    expect(page.root).toEqualHtml(`
      <unknown-route>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </unknown-route>
    `);
  });
});
