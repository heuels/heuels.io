import { h } from 'preact';
import snarkdown from 'snarkdown';
import { Title } from 'components/title';
import { IEvent } from 'types';
import '../article/article.module.css';

export const Event = (props: IEvent) => {
  const { name, text } = props;

  return (
    <div styleName="article__content">
      {name && <Title small>{name}</Title>}
      {text &&
        snarkdown(text)
          .split(/\n/)
          .map((__html: string) => (
            <div
              styleName="article__paragraph"
              dangerouslySetInnerHTML={{ __html }}
            />
          ))}
    </div>
  );
};
