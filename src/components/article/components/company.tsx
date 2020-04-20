import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { ColorSchemeContext } from 'components/color-scheme';
import { ImageSet } from 'types';
import '../article.module.css';
interface Props {
  name: string | null;
  src: ImageSet | null;
}

export const Company = ({ name, src }: Props) => {
  const { colorScheme } = useContext(ColorSchemeContext);

  if (src) {
    return <img alt={name} src={src[colorScheme]} styleName="article__logo" />;
  }

  return <div styleName="article__heading">{name}</div>;
};
