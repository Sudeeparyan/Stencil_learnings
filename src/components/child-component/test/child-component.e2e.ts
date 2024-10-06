import { newE2EPage } from '@stencil/core/testing';

describe('child-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<child-component></child-component>');

    const element = await page.find('child-component');
    expect(element).toHaveClass('hydrated');
  });
});
