import cn from 'classnames';
import { h } from 'preact';
import './title.module.css';

const Title = (props) => {
  const {
    id,
    children,
    large,
    medium,
    primary,
    secondary,
    small,
    tagName,
    display,
    suffix = 'dot',
    className: extraStyleName,
  } = props;

  const styleName = cn('title', extraStyleName, {
    'title_small': small,
    'title_medium': medium,
    'title_large': large,
    'title_primary': primary,
    'title_secondary': secondary,
    'title_display-inline-block': display === 'inline-block',
    'title_suffix-colon': suffix == 'colon',
    'title_suffix-dot': suffix == 'dot',
  });

  let TagName;
  switch (true) {
    case !!tagName:
      TagName = tagName;
      break;
    case large:
      TagName = 'h1';
      break;
    case medium:
      TagName = 'h2';
      break;
    case small:
      TagName = 'h3';
      break;
    default:
      TagName = 'p';
      break;
  }

  return (
    <TagName id={id} styleName={styleName}>
      {children}
    </TagName>
  );
};

export { Title };
