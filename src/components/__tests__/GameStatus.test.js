import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameStatus from '../GameStatus';

configure({adapter: new Adapter()});

describe('<GameStatus/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GameStatus points={0} timer={0}/>
    );
  });

  it('should load .game-status', () => {
    expect(wrapper.find('.game-status')).toHaveLength(1);
  });

  it('should load .game-timer', () => {
    expect(wrapper.find('.game-timer')).toHaveLength(1);
  });

  it('should load <span>Points: {points}</span>', () => {
    expect(wrapper.contains(<span>Points: 0</span>)).toBe(true);
  });
});
