import { newE2EPage } from '@stencil/core/testing';

describe('function-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<function-component></function-component>');

    const element = await page.find('function-component');
    expect(element).toHaveClass('hydrated');
  });
});
