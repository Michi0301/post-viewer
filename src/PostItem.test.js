import React from "react";
import PostItem from "./PostItem";
import { shallow } from "enzyme";

it("shows a given title", () => {
	const title = "Some title";

  const wrapper = shallow(<PostItem title={title}/>);
  expect(wrapper.text()).toEqual("Some title");
});

it("handles an onClick event", () => {
	const mockFunction = jest.fn();
  const wrapper = shallow(<PostItem handleClick={mockFunction} />);

  wrapper.simulate("click");
  expect(mockFunction).toBeCalled();
});
