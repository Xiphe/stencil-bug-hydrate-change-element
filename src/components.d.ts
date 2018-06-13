/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface AnyElm {

    }
  }

  interface HTMLAnyElmElement extends StencilComponents.AnyElm, HTMLStencilElement {}

  var HTMLAnyElmElement: {
    prototype: HTMLAnyElmElement;
    new (): HTMLAnyElmElement;
  };
  interface HTMLElementTagNameMap {
    'any-elm': HTMLAnyElmElement;
  }
  interface ElementTagNameMap {
    'any-elm': HTMLAnyElmElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'any-elm': JSXElements.AnyElmAttributes;
    }
  }
  namespace JSXElements {
    export interface AnyElmAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
