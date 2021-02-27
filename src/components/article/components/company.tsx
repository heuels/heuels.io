import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';
import { ColorSchemeContext } from 'components/color-scheme';
import { Print, Screen } from 'components/utility';
import { ImageSet } from 'types';
import '../article.module.css';
interface Props {
  link: string | null;
  name: string | null;
  src: ImageSet | null;
}

export const Company = ({ link, name, src }: Props) => {
  const { colorScheme } = useContext(ColorSchemeContext);

  if (src) {
    return (
      <Fragment>
        <Print>
          <img alt={name} src={src.light} styleName="article__logo" />
        </Print>
        <Screen>
          {link ? (
            <a href={link} rel="noreferrer noopener" target="blank">
              <img
                alt={name}
                src={src[colorScheme]}
                styleName="article__logo"
              />
            </a>
          ) : (
            <img alt={name} src={src[colorScheme]} styleName="article__logo" />
          )}
        </Screen>
      </Fragment>
    );
  }

  return <div styleName="article__heading">{name}</div>;
};
