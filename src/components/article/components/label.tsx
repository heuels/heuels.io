import cn from 'classnames';
import { h, Fragment } from 'preact';
import { alpha } from 'utils';
import '../article.module.css';

interface Props {
  color: string;
  dates: [string] | [string, string];
}

export const Label = ({
  color,
  dates: [date1, date2 = null] = [null, null],
}: Props) => {
  if (!date1 && !date2) return null;

  return (
    <div styleName={cn('article__label-container')}>
      <span
        style={{ color, backgroundColor: alpha(color, 0.13) }}
        styleName={cn('article__label', {
          article__label_small: date1.length === 4,
        })}
      >
        {date1}
      </span>
      {date2 && (
        <Fragment>
          <span
            style={{ backgroundColor: color }}
            styleName="article__label-separator"
          />
          <span
            style={{ color, backgroundColor: alpha(color, 0.13) }}
            styleName={cn('article__label', {
              article__label_small: date2.length === 4,
            })}
          >
            {date2}
          </span>
        </Fragment>
      )}
    </div>
  );
};
