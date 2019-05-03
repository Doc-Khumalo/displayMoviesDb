import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

let wrapper;
describe('App tests', () => {
  wrapper = shallow(<App />);

  it('should render without crashing', () => {
    expect(wrapper.find('.App').length).toEqual(1)
  });
});
