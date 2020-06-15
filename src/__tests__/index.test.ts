import * as gm from 'gm';
import fetch from 'node-fetch';
import { delay } from '../utils';

describe.each(['en_US', 'ru_RU'])('%s', (locale: 'en_US' | 'ru_RU') => {
  const language = locale.slice(0, 2);

  describe('@media prefers-color-scheme', () => {
    beforeEach(async () => {
      await page.goto(`http://localhost:3000/${language}`);
      await page.evaluate(() => localStorage.clear());
    });

    describe('@media screen', () => {
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

      it.each(['no-preference', 'dark', 'light'])(
        'renders %s favicon',
        async (colorScheme: 'no-preference' | 'dark' | 'light') => {
          await page.emulateMedia({ media: 'screen', colorScheme });
          await delay(500);

          const favicon = await page.$eval(
            "link[rel*='icon']",
            ({ href }: HTMLLinkElement) => href,
          );

          const response = await fetch(favicon);
          await expect(response.buffer()).resolves.toMatchImageSnapshot();
        },
      );
    });

    describe('@media print', () => {
      it.each<any>(['no-preference', 'dark', 'light'])(
        'renders %s version',
        async (
          colorScheme: 'no-preference' | 'dark' | 'light',
          done: jest.DoneCallback,
        ) => {
          await page.emulateMedia({ media: 'print', colorScheme });
          await delay(500);

          const pdf = await page.pdf({
            format: 'A4',
            margin: {
              top: '10mm',
              right: '10mm',
              bottom: '10mm',
              left: '10mm',
            },
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
        },
      );
    });
  });
});
