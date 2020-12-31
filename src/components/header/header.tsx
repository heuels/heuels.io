import { h } from 'preact';
import { useCallback, useContext } from 'preact/hooks';
import { TranslateContext } from '@denysvuika/preact-translate';

import { Language as LanguageSwitcher } from 'components/language';
import { Switch as ColorSchemeSwitcher } from 'components/switch';
import { Title } from 'components/title';
import { Screen } from 'components/utility';
import './header.module.css';

export const Header = ({ data: timelines }) => {
  const { t } = useContext(TranslateContext);
  const onClick = useCallback((event: MouseEvent, anchor: string) => {
    event.preventDefault();

    const title = document.querySelector(anchor);
    if (title) title.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }, []);

  return (
    <header styleName="header">
      <ColorSchemeSwitcher />
      <LanguageSwitcher />
      <div styleName="header__title">
        <Title large primary>
          <Screen>{t('intro')} </Screen>
          {t('title')}
        </Title>
        <Title large secondary tagName="p" suffix="none">
          {t('subtitle')}
        </Title>
        <span styleName="header__title-print">
          {t('print')}
          <span styleName="header__title-print_underline">
            heuels.io
            {window.location.pathname}
          </span>
        </span>
      </div>
      <div styleName="header__contacts">
        <Title small display="inline-block" suffix="colon">
          {t('contact')}
        </Title>
        <a href="https://heuels.io" styleName="header__contacts-entry">
          heuels.io
        </a>
        <span styleName="header__contacts-separator">·</span>
        <a href="mailto:hello@heuels.io" styleName="header__contacts-entry">
          hello@heuels.io
        </a>
        <span styleName="header__contacts-separator">·</span>
        <a href="https://github.com/heuels" styleName="header__contacts-entry">
          github.com/heuels
        </a>
        <span styleName="header__contacts-separator">·</span>
        <a
          href="https://linkedin.com/in/heuels"
          styleName="header__contacts-entry"
        >
          linkedin.com/in/heuels
        </a>
      </div>
      <nav styleName="header__navigation">
        <ul styleName="header__navigation-list">
          {timelines.map(({ id, shortName }) => (
            <li styleName="header__navigation-entry">
              <button
                onClick={(event) => onClick(event, '#' + id)}
                styleName="header__navigation-link"
              >
                {shortName}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
