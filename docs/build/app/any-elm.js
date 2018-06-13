/*! Built with http://stenciljs.com */
const { h } = window.App;

const elms = ["div", "h1", "span", "h2", "marquee"];
class AnyElm {
    constructor() {
        this.Elm = "div";
        this.changeElm = () => {
            this.Elm = elms[elms.indexOf(this.Elm) + 1] || elms[0];
        };
    }
    render() {
        return (h("div", null,
            "This is a: ",
            this.Elm,
            h("br", null),
            h("button", { onClick: this.changeElm }, "Set to s.th. else"),
            h("br", null),
            h(this.Elm, null,
                h("slot", null))));
    }
    static get is() { return "any-elm"; }
    static get properties() { return {
        "Elm": {
            "state": true
        }
    }; }
}

export { AnyElm };
