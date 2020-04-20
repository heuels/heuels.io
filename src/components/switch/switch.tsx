import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';
import { ColorSchemeContext } from 'components/color-scheme';
import './switch.module.css';

export const Switch = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext);

  return (
    <Fragment>
      <input
        hidden
        id="checkbox"
        styleName="checkbox"
        type="checkbox"
        checked={colorScheme === 'dark'}
        onChange={() =>
          setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }
      />
      <label for="checkbox" styleName="selector">
        <span styleName="trigger">
          <span styleName="label" />
        </span>
      </label>
    </Fragment>
  );
};
