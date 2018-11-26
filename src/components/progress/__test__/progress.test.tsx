import React from "react";
import renderer from "react-test-renderer";

import Progress from "..";

describe("Progress component", () => {
  it("Should exist", () => {
    expect(Progress).toMatchSnapshot();
  });

  it("Should have notification classname", () => {
    const component = renderer.create(<Progress value={30} max={100} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("Should concat classname in props with Bulma classname", () => {
    const component = renderer.create(
      <Progress value={30} max={100} className="other-class this-is-a-test" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("Should use inline styles", () => {
    const component = renderer.create(
      <Progress value={30} max={100} style={{ width: 250 }} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("Should be Large", () => {
    const component = renderer.create(
      <Progress value={30} max={100} size="large" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("Should use use color black", () => {
    const component = renderer.create(
      <Progress value={30} max={100} color="black" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});