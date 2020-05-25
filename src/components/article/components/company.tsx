import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';
import { ColorSchemeContext } from 'components/color-scheme';
import { Print, Screen } from 'components/utility';
import { ImageSet } from 'types';
import '../article.module.css';
interface Props {
  name: string | null;
  src: ImageSet | null;
}

export const Company = ({ name, src }: Props) => {
  const { colorScheme } = useContext(ColorSchemeContext);

  if (src) {
    return (
      <Fragment>
        <Print>
          <img alt={name} src={src.light} styleName="article__logo" />
        </Print>
        <Screen>
          <img alt={name} src={src[colorScheme]} styleName="article__logo" />
        </Screen>
      </Fragment>
    );
  }

  return <div styleName="article__heading">{name}</div>;
};
