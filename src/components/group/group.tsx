import { Fragment, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Event } from 'components/event';
import { Label, Thread, Dot, Company } from 'components/article/components';
import { ColorSchemeContext } from 'components/color-scheme';
import { ColorSet, IGroup } from 'types';
import { getColor } from 'utils';
import '../article/article.module.css';

interface Props extends IGroup {
  color: string | ColorSet;
  gradient: [string, string];
}

export const Group = ({
  link,
  name,
  dates,
  color,
  events,
  gradient,
  images: { icon, logo },
}: Props) => {
  const { colorScheme } = useContext(ColorSchemeContext);
  const mainColor = getColor(color, colorScheme);

  return (
    <article styleName="article">
      <Label color={mainColor} dates={dates} />

      {events.map((event, index) => {
        const isFirstEvent = index === 0;
        const isLastEvent = index === events.length - 1;

        return (
          <Fragment key={index}>
            <Label key={color} color={mainColor} dates={event.dates} />
            <Thread gradient={gradient} last={isLastEvent}>
              <Dot color={mainColor} large={isFirstEvent} src={icon} />
            </Thread>

            <div>
              {isFirstEvent && <Company link={link} name={name} src={logo} />}
              <Event name={event.name} text={event.text} />
            </div>
          </Fragment>
        );
      })}
    </article>
  );
};
