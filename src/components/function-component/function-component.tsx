import { FunctionalComponent, h } from '@stencil/core';
import './function-component.css';

interface FunctionComponentProps {
  name: string;
}

export const FunctionComponent: FunctionalComponent<FunctionComponentProps> = (props, children) => {
  return [
    <h1>
      Functional Component using <b>{props.name}</b>
    </h1>,
    children,
  ];
};
