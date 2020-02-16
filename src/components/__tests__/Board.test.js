import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from '../Board';

configure({adapter: new Adapter()});

describe('<Board/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <Board board={[
          [{}, {}, {}, {}],
          [{letter: 'L'}, {letter: 'E'}, {letter: 'T'}, {letter: 'S'}],
          [{}, {letter: 'G'}, {letter: 'O'}, {}],
          [{}, {}, {}, {}],
        ]}/>
    );
  });

  it('should load .board', () => {
    expect(wrapper.find('.board')).toHaveLength(1);
  });

  it('should load .board-background', () => {
    expect(wrapper.find('.board-background')).toHaveLength(1);
  });

  it('should load .board-row', () => {
    expect(wrapper.find('.board-row')).toHaveLength(4);
  });

  it('should load .board-cell', () => {
    expect(wrapper.find('.board-cell')).toHaveLength(16);
  });
});
