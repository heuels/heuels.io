import { h, Fragment } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { TranslateContext } from '@denysvuika/preact-translate';

import data from 'data';
import { Header } from 'components/header';
import { Content } from 'components/content';
import { setLanguage, setTitleAndDescription } from 'utils';

export const App = () => {
  const { setLang, t } = useContext(TranslateContext);
  const timelines = data(t);

  useEffect(() => {
    const lang = setLanguage();
    setLang(lang);
    setTitleAndDescription(t);
  });

  return (
    <Fragment>
      <Header data={timelines} />
      <Content data={timelines} />
    </Fragment>
  );
};
