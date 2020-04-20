import { h, ComponentChildren } from 'preact';
import './utils.module.css';

interface Props {
  children: ComponentChildren;
}

export const Print = ({ children }: Props) => (
  <span styleName="print">{children}</span>
);
