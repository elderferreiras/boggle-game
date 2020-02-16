import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WordsPlayed from '../WordsPlayed';

configure({adapter: new Adapter()});

describe('<WordsPlayed/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WordsPlayed words={[{word: 'W', points: 0, valid: false}]}/>
    );
  });

  it('should load .words', () => {
    expect(wrapper.find('.words')).toHaveLength(1);
  });

  it('should load .words', () => {
    expect(wrapper.find('.word-content')).toHaveLength(1);
  });

  it('should load .points', () => {
    expect(wrapper.find('.word-content')).toHaveLength(1);
  });
});
