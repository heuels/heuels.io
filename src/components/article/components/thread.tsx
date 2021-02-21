import cn from 'classnames';
import { h, ComponentChild } from 'preact';
import { alpha, linearGradient } from 'utils';
import { Dot } from './dot';
import '../article.module.css';

interface Props {
  gradient: [string, string];
  last?: boolean;
  children?: ComponentChild;
}

export const Thread = ({
  children,
  gradient: [fromColor, toColor],
  last,
}: Props) => {
  console.log({ fromColor, toColor });
  return (
    <div styleName="article__thread">
      {children}
      <span
        style={{
          background: linearGradient(
            180,
            alpha(fromColor, 0.5),
            last ? alpha(toColor, 0.5) : alpha(fromColor, 0.5),
          ),
        }}
        styleName={cn('article__thread-line', {
          'article__thread-line_last': last,
        })}
      />
    </div>
  );
};
