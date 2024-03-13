import buttonPrimary from './html/Button-primary.html';
import buttonSecondary from './html/Button-secondary.html';
import buttonTertiary from './html/Button-tertiary.html';
import buttonNegative from './html/Button-negative.html';
import buttonDisabled from './html/Button-disabled.html';
import buttonSizeSmall from './html/Button-size.html';
import buttonShape from './html/Button-shape.html';

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
