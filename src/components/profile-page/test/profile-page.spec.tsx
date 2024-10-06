import { newSpecPage } from '@stencil/core/testing';
import { ProfilePage } from '../profile-page';

describe('profile-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProfilePage],
      html: `<profile-page></profile-page>`,
    });
    expect(page.root).toEqualHtml(`
      <profile-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </profile-page>
    `);
  });
});
