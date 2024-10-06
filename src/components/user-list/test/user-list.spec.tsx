import { newSpecPage } from '@stencil/core/testing';
import { UserList } from '../user-list';

describe('user-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UserList],
      html: `<user-list></user-list>`,
    });
    expect(page.root).toEqualHtml(`
      <user-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </user-list>
    `);
  });
});
