import { h } from 'preact';
import { Group } from 'components/group';
import { Title } from 'components/title';
import { ITimeline } from 'types';
import './timeline.module.css';

export const Timeline = ({ id, name, groups }: ITimeline) => (
  <section styleName="timeline">
    <Title id={id} medium>
      {name}
    </Title>

    {groups.map((group, index) => (
      <Group
        {...group}
        gradient={[group.color, groups[index + 1]?.color || 'transparent']}
      />
    ))}
  </section>
);
