import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ControlPanel from '../ControlPanel';

configure({adapter: new Adapter()});

describe('<ControlPanel/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ControlPanel submitClicked={() => {}} clearClicked={() => {}} word="JOE"/>
    );
  });

  it('should load .current-word', () => {
    expect(wrapper.find('.current-word')).toHaveLength(1);
  });

  it('should load .game-buttons', () => {
    expect(wrapper.find('.game-buttons')).toHaveLength(1);
  });

  it('should load button', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });

  it('should load p', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should load <p>JOE</p>', () => {
    expect(wrapper.contains(<p>JOE</p>)).toBe(true);
  });
});
