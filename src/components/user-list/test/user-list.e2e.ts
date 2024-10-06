import { newE2EPage } from '@stencil/core/testing';

describe('user-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<user-list></user-list>');

    const element = await page.find('user-list');
    expect(element).toHaveClass('hydrated');
  });
});
