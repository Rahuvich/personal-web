import React from "react";
import Typed from "typed.js";

type TypedAboutMeProps = {
  strings: string[];
};

class TypedAboutMe extends React.Component<TypedAboutMeProps> {
  element: any;
  typed: any;
  props: TypedAboutMeProps;

  componentDidMount() {
    const { strings } = this.props;

    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
      cursorChar: "_",
    };

    this.typed = new Typed(this.element, options);

    this.typed.start();
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <span
        className="inline text-primary-blue font-semibold"
        ref={(el) => {
          this.element = el;
        }}
      />
    );
  }
}

export default TypedAboutMe;
