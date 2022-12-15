import buttonPrimary from './Button-primary.html';
import buttonSecondary from './Button-secondary.html';
import buttonTertiary from './Button-tertiary.html';
import buttonNegative from './Button-negative.html';
import buttonDisabled from './Button-disabled.html';
import buttonSizeSmall from './Button-size.html';
import buttonShape from './Button-shape.html';

export default {
  title: 'Components/Button',
  parameters: { layout: 'centered' },
};

export const primary = () => buttonPrimary;
export const secondary = () => buttonSecondary;
export const tertiary = () => buttonTertiary;
export const negative = () => buttonNegative;
export const disabled = () => buttonDisabled;
export const size = () => buttonSizeSmall;
export const shape = () => buttonShape;
