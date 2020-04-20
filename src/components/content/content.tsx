import { h } from 'preact';
import { Timeline } from 'components/timeline';
import { ITimeline } from 'types';
import './content.module.css';

interface Props {
  data: ITimeline[];
}

export const Content = ({ data: timelines }: Props) => (
  <main styleName="content">
    {timelines.map((timeline) => (
      <Timeline {...timeline} />
    ))}
  </main>
);
