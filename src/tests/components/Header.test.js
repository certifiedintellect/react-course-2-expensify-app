import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import React from 'react';
import {shallow} from 'enzyme';

test('testing out header component', () => {
    /* const renderer = new ReactShallowRenderer()
    renderer.render(<Header/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
    */
    const actualResult = shallow(<Header/>)
    expect(actualResult.find('h1').length).toBe(1)
    expect(actualResult).toMatchSnapshot()
})

