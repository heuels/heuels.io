import cn from 'classnames';
import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { ColorSchemeContext } from 'components/color-scheme';
import '../article.module.css';
import { ImageSet } from 'types';

interface Props {
  color: string;
  large?: boolean;
  src?: ImageSet;
}

export const Dot = ({ color, large, src }: Props) => {
  const { colorScheme } = useContext(ColorSchemeContext);

  return large && src ? (
    <img
      role="presentation"
      src={src[colorScheme]}
      styleName={cn('article__thread-dot', 'article__thread-dot_with-image')}
    />
  ) : (
    <span
      style={{ backgroundColor: color }}
      styleName={cn('article__thread-dot', 'article__thread-dot_round', {
        'article__thread-dot_large': large,
        'article__thread-dot_small': !large,
      })}
    />
  );
};
