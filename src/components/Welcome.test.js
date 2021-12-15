import React from "react";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Welcome from './Welcome';

Enzyme.configure({ adapter: new Adapter() })

test('should increment counter when button is clicked', () => {
  const incrementCounter = jest.fn();

  const wrapper = shallow(<Welcome incrementCounter={incrementCounter} message="Hi"/>);
  const button = wrapper.find('button');

  expect(button).toHaveLength(1);

  button.simulate('click')

  expect(incrementCounter).toHaveBeenCalledTimes(1);
});
