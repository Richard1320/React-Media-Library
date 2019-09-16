import {expect} from 'chai';
import Enzyme, {mount} from 'enzyme';
import * as  React from 'react';
import 'jsdom-global/register';
import Adapter from 'enzyme-adapter-react-16';
import {ReactMediaLibrary} from "../src";

Enzyme.configure({adapter: new Adapter()});

describe('<ReactMediaLibrary />', () => {
	function onHide() {
	}

	it('allows us to set props', () => {
		const wrapper = mount(<ReactMediaLibrary show={true} onHide={onHide}/>);
		expect(wrapper.props().show).to.be.true;
	});
});

