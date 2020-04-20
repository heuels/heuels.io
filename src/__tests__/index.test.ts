import * as gm from 'gm';
import { delay } from '../utils';

describe.each(['en_US', 'ru_RU'])('%s', (locale: 'en_US' | 'ru_RU') => {
  const language = locale.slice(0, 2);

  describe('@media prefers-color-scheme', () => {
    beforeAll(async () => {
      await page.goto(`http://localhost:3000/${language}`);
    });

    it.each(['no-preference', 'dark', 'light'])(
      'renders %s version',
      async (colorScheme: 'no-preference' | 'dark' | 'light') => {
        await page.emulateMedia({ media: 'screen', colorScheme });
        await page.evaluate(() => {
          const details = document.querySelectorAll('details');
          details.forEach((el) => el.setAttribute('open', 'true'));
        });
        await delay(500);

        await expect(
          page.screenshot({ fullPage: true }),
        ).resolves.toMatchImageSnapshot();
      },
    );
  });

  describe('@media print', () => {
    beforeAll(async () => {
      await page.goto(`http://localhost:3000/${language}`);
    });

    it('renders print version', async (done) => {
      await page.emulateMedia({ media: 'print' });

      const pdf = await page.pdf({
        format: 'A4',
        margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
      });

      gm(pdf)
        .density(300, 300)
        .resize(2480, 3508)
        .quality(100)
        .toBuffer('png', (err, buffer) => {
          expect(err).toBeNull();
          expect(buffer).toMatchImageSnapshot();
          done();
        });
    });
  });
});
