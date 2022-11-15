import React, { MouseEvent, ReactNode } from 'react';
// import { IconTypes } from '../Icon/Icon.types';

export type AnchorAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type RefType = React.Ref<HTMLButtonElement | HTMLAnchorElement>;

export type ButtonFill = 'default' | 'ghost' | 'outline';
export type ButtonTarget = '_blank' | '_parent' | '_self' | '_top';
export type ButtonType = 'button' | 'reset' | 'submit';
export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative';

interface SharedButtonProps {
  /** Specify the content of your Button */
  children?: ReactNode;

  /** Optional prop to specify classNames onto the Button */
  className?: string;

  /** Optional prop to specify the ID of the Button */
  id?: string;

  /** Optionally specify Button onClick function */
  onClick?: (e: MouseEvent<HTMLElement>) => void;

  /** Specify whether the Button is disables, or not */
  isDisabled?: boolean;

  /** Specify whether the Button is full width or not */
  isFullWidth?: boolean;

  /** Specify whether the Button is sized small or not */
  isSmall?: boolean;

  /** Optional prop to specify the icon label of the Button */
  // iconLabel?: string;

  // /** Optional prop to specify an Icon in the end position of the Button */
  // endIcon?: IconTypes;

  // /** Optional prop to specify an Icon in the start position of the Button */
  // startIcon?: IconTypes;

  /**
   * Optional prop to specify the fill style of the Button
   * @default 'default'
   */
  fill?: ButtonFill;

  /** Optional prop to specify the tabIndex of the Button */
  tabIndex?: number;

  /** Optional prop to specify the ID used for testing */
  testId?: string;

  /**
   * Specify the variant of the Button
   * @default 'default'
   */
  variant?: ButtonVariant;

  /** Optional property to provide component Ref */
  ref?: RefType;
}

export interface ButtonElementProps extends SharedButtonProps {
  /** Optional prop to specify the name of the Button */
  name?: string;

  /**
   * Optional prop to specify the type of the Button
   * @default 'button'
   */
  type?: ButtonType;

  /** Optional prop to specify the value of the Button */
  value?: string;

  // /** Only applies to <a />s */
  download?: never;
  href?: never;
  hrefLang?: never;
  rel?: never;
  target?: never;
}

export interface LinkElementProps extends SharedButtonProps {
  /** Optional prop to prompts a user to save the linked URL instead of navigating to it */
  download?: string;

  /** Optionally specify an href for your Button to become an <a> element */
  href?: string;

  /** Optionally specify the language of the linked URL */
  hrefLang?: string;

  /**
   * Relationship between the Button href URL and the current page. See
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).
   */
  rel?: string;

  /** Optional prop to to display where the linked URL will show */
  target?: ButtonTarget;

  /** Only applies to <button />s */
  name?: never;
  type?: never;
  value?: never;
  endIcon?: never;
  startIcon?: never;
}

export type ButtonProps = ButtonElementProps | LinkElementProps;

export type PolymorphicButton = (
  props: LinkElementProps | ButtonElementProps
) => JSX.Element;
