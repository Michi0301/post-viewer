import React from 'react';
import PostContent from './PostContent';
import { shallow } from 'enzyme';

it("shows a given content", () => {
	const content = "Some content";

  const wrapper = shallow(<PostContent content={content}/>);
  expect(wrapper.text()).toEqual( "Some content");
});
