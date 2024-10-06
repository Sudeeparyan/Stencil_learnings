import { newE2EPage } from '@stencil/core/testing';

describe('auth-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<auth-root></auth-root>');

    const element = await page.find('auth-root');
    expect(element).toHaveClass('hydrated');
  });
});
