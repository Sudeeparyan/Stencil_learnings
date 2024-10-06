import { newSpecPage } from '@stencil/core/testing';
import { AuthRoot } from '../auth-root';

describe('auth-root', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AuthRoot],
      html: `<auth-root></auth-root>`,
    });
    expect(page.root).toEqualHtml(`
      <auth-root>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </auth-root>
    `);
  });
});
