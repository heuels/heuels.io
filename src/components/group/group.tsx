import { Fragment, h } from 'preact';
import { IGroup } from 'types';
import { Event } from 'components/event';
import { Label, Thread, Dot, Company } from 'components/article/components';
import '../article/article.module.css';

interface Props extends IGroup {
  gradient: [string, string];
}

export const Group = ({
  name,
  dates,
  color,
  events,
  gradient,
  images: { icon, logo },
}: Props) => (
  <article styleName="article">
    <Label color={color} dates={dates} />

    {events.map((event, index) => {
      const isFirstEvent = index === 0;
      const isLastEvent = index === events.length - 1;

      return (
        <Fragment>
          <Label color={color} dates={event.dates} />
          <Thread gradient={gradient} last={isLastEvent}>
            <Dot color={color} large={isFirstEvent} src={icon} />
          </Thread>

          <div>
            {isFirstEvent && <Company name={name} src={logo} />}
            <Event name={event.name} text={event.text} />
          </div>
        </Fragment>
      );
    })}
  </article>
);
