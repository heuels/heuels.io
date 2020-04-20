import cn from 'classnames';
import { h } from 'preact';
import { alpha } from 'utils';
import '../article.module.css';

interface Props {
  color: string;
  text?: string;
}

export const Label = ({ color, text }: Props) => {
  if (!text) return null;

  return (
    <span
      style={{ color, backgroundColor: alpha(color, 0.13) }}
      styleName={cn('article__label', {
        article__label_small: text.split(' ').length === 1,
      })}
    >
      {text}
    </span>
  );
};
