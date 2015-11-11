var React = require('react');

var SubComponent = React.createClass({
  getDefaultProps: function() {
    return {
      hiddenText: 'the apps childen should have their props initialised when app is shallow rendered'
    };
  },
  render: function() {
    return (
      <div>
        <p> im another paragraph element. </p>
        <p>You will not see me on a shallow render of App.jsx </p>
        <p>Because this components render will not be called</p>
      </div>
    );
  }
});

module.exports = SubComponent;
