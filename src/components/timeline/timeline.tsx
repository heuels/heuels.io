import { h } from 'preact';
import { useColorScheme } from 'components/color-scheme/useColorScheme';
import { Group } from 'components/group';
import { Title } from 'components/title';
import { ITimeline } from 'types';
import './timeline.module.css';
import { getColor } from 'utils';
import { useContext, useEffect } from 'preact/hooks';
import { ColorSchemeContext } from 'components/color-scheme';

export const Timeline = ({ id, name, groups }: ITimeline) => {
  const { colorScheme } = useContext(ColorSchemeContext);

  return (
    <section styleName="timeline">
      <Title id={id} medium>
        {name}
      </Title>

      {groups.map((group, index) => {
        const prevColor = getColor(group.color, colorScheme);
        const nextColor = getColor(groups[index + 1]?.color, colorScheme);

        return (
          <Group
            {...group}
            gradient={[prevColor, nextColor || 'transparent']}
          />
        );
      })}
    </section>
  );
};
