import { h, render } from 'preact';
import { ColorSchemeProvider } from 'components/color-scheme';
import { TranslateProvider } from '@denysvuika/preact-translate';
import { App } from 'components/app';

import en from 'assets/locales/en.json';
import ru from 'assets/locales/ru.json';
import './index.module.css';

function init() {
  render(
    <ColorSchemeProvider>
      <TranslateProvider translations={{ en, ru }}>
        <App />
      </TranslateProvider>
    </ColorSchemeProvider>,
    document.body,
  );
}

if (module.hot) {
  require('preact/devtools');
  module.hot.accept('./components/app', () => requestAnimationFrame(init));
}

init();
