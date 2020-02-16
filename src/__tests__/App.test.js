import React, { Fragment } from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Board from '../components/Board';

const mockStore = configureMockStore([thunk]);
configure({adapter: new Adapter()});

describe('<App/>', () => {
  let wrapper;

  beforeEach(() => {
    const store = mockStore({
      boardReducer: {
        board: [
          [{}, {}, {}, {}],
          [{letter: 'L'}, {letter: 'E'}, {letter: 'T'}, {letter: 'S'}],
          [{}, {letter: 'G'}, {letter: 'O'}, {}],
          [{}, {}, {}, {}],
        ],
        currentWord: '',
        loading: false,
        error: false
      },
      wordsReducer: {
        words: [],
        points: 0,
        loading: false,
        error: false
      },
      gameReducer: {
        timer: 0,
        playing: false,
        gameOver: false
      }
    });

    wrapper = mount(
      <Provider store={store}>
        <App/>
      </Provider>
    );
  });

  it('should load Board component', () => {
    expect(wrapper.contains(Board)).toEqual(true);
  });

  it('should load <header>', () => {
    expect(wrapper.contains(<header>
        <span>
          Boggle Game
        </span>
    </header>)).toEqual(true);
  });

  it('should load <footer>', () => {
    expect(wrapper.contains( <footer>
        <span>
          Elder Patten Ferreira 2020
        </span>
    </footer>)).toEqual(true);
  });
});
