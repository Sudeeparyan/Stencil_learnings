import { newE2EPage } from '@stencil/core/testing';

describe('profile-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<profile-page></profile-page>');

    const element = await page.find('profile-page');
    expect(element).toHaveClass('hydrated');
  });
});
