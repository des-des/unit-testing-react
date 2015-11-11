var Test = require('tape');
var ReactTestUtils = require('react-addons-test-utils');
var React = require('react');

var App = require('./MainComponent.jsx');

var shallowRenderer = ReactTestUtils.createRenderer();
shallowRenderer.render(<App />);

var appRender = shallowRenderer.getRenderOutput();

Test('Checking App', function(tester) {
  tester.equal(appRender.type, 'div', 'app has type div');
  tester.equal(appRender.props.children.length, 2,
    'app has correct number of children');
  tester.end();
});

// console.log(appRender);
console.log(appRender.props.children[0]);
Test('Testing SubComponent', function(tester) {
  var SubComponent = appRender.props.children[0];
  tester.equal(
    SubComponent.type.displayName,
    'SubComponent',
    'SubComponent has correct type'
  );
  tester.equal(
    SubComponent.props.hiddenText,
    'the apps childen should have their props ' +
      'initialised when app is shallow rendered',
    'SubComponent\'s props have been initialised'
  );
  tester.equal(
    typeof SubComponent.props.children,
    'undefined',
    'SubComponent has no children'
  );
  tester.end();
});
