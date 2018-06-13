import { Component, State } from "@stencil/core";

const elms = ["div", "h1", "span", "h2", "marquee"];

@Component({
  tag: "any-elm"
})
export class AnyElm {
  @State() Elm: string = "div";
  changeElm = () => {
    this.Elm = elms[elms.indexOf(this.Elm) + 1] || elms[0];
  };
  render() {
    return (
      <div>
        This is a: {this.Elm}
        <br />
        <button onClick={this.changeElm}>Set to s.th. else</button>
        <br />
        <this.Elm>
          <slot />
        </this.Elm>
      </div>
    );
  }
}
