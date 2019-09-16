import {expect} from 'chai';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from "react";

Enzyme.configure({adapter: new Adapter()});

const MyComponent: React.FC = (): JSX.Element => {
	return (<p>My custom component</p>);
};

describe("Testing suite", () => {
	it("tests Mocha active", () => {
		expect(true).to.be.true;
	});
	it("tests Enzyme active", () => {
		const wrapper = shallow(<MyComponent/>);
		expect(wrapper.text()).to.equal("My custom component");
	});
});

