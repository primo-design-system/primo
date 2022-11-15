import buttonDefault from "./button.html";
import buttonPrimary from "./button-primary.html";
import buttonSecondary from "./button-secondary.html";
import buttonTertiary from "./button-tertiary.html";
import buttonNegative from "./button-negative.html";
import buttonDisabled from "./button-disabled.html";
import buttonSizeSmall from "./button-size.html";
import buttonShape from "./button-shape.html";

export default {
  title: 'Components/Button',
  parameters: { layout: "centered" },
};

export const button = () => buttonDefault;
export const primary = () => buttonPrimary;
export const secondary = () => buttonSecondary;
export const tertiary = () => buttonTertiary;
export const negative = () => buttonNegative;
export const disabled = () => buttonDisabled;
export const size = () => buttonSizeSmall;
export const shape = () => buttonShape;