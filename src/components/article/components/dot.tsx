import cn from 'classnames';
import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';
import { ColorSchemeContext } from 'components/color-scheme';
import { Print, Screen } from 'components/utility';
import { ImageSet } from 'types';
import '../article.module.css';

interface Props {
  color: string;
  large?: boolean;
  src?: ImageSet;
}

export const Dot = ({ color, large, src }: Props) => {
  const { colorScheme } = useContext(ColorSchemeContext);

  return large && src ? (
    <Fragment>
      <Print>
        <img
          role="presentation"
          src={src.light}
          styleName={cn(
            'article__thread-dot',
            'article__thread-dot_with-image',
          )}
        />
      </Print>
      <Screen>
        <img
          role="presentation"
          src={src[colorScheme]}
          styleName={cn(
            'article__thread-dot',
            'article__thread-dot_with-image',
          )}
        />
      </Screen>
    </Fragment>
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
