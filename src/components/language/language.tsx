import { h } from 'preact';
import { useCallback, useContext } from 'preact/hooks';
import { TranslateContext } from '@denysvuika/preact-translate';
import { storeLanguage, setTitleAndDescription } from 'utils';

import './language.module.css';

export const Language = () => {
  const { lang, setLang, t } = useContext(TranslateContext);
  const otherLang = lang === 'en' ? 'ru' : 'en';

  const updateLanguage = useCallback((newLanguage) => {
    setLang(newLanguage);
    setTitleAndDescription(t);
    storeLanguage(newLanguage);
    window.history.replaceState(null, '', '/' + newLanguage + '/');
  }, []);

  return (
    <button
      aria-label={`Change language to ${lang}`}
      onClick={() => updateLanguage(otherLang)}
      styleName="language"
    >
      <img
        role="presentation"
        src={`/icons/${otherLang}.svg`}
        styleName="language-icon"
      />
    </button>
  );
};
