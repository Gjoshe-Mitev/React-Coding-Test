import Adapter from 'enzyme-adapter-react-15.4';
import Enzyme from 'enzyme';

import chai from 'chai';
import chaiJestSnapshot from 'chai-jest-snapshot';

import hook from 'css-modules-require-hook';
import sass from 'node-sass';

chai.use(chaiJestSnapshot);

chaiJestSnapshot.resetSnapshotRegistry();

hook({
    extensions: [ '.scss' ],
    preprocessCss: data => sass.renderSync({ data }).css
});

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'http://localhost/',
});
const { window } = jsdom;

function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);

Enzyme.configure({ adapter: new Adapter() });
