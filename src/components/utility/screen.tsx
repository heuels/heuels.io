import { h, ComponentChildren } from 'preact';
import './utils.module.css';

interface Props {
  children: ComponentChildren;
}

export const Screen = ({ children }: Props) => (
  <span styleName="screen">{children}</span>
);
