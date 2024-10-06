import { newE2EPage } from '@stencil/core/testing';

describe('unknown-route', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<unknown-route></unknown-route>');

    const element = await page.find('unknown-route');
    expect(element).toHaveClass('hydrated');
  });
});
