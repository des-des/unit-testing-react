var React = require('react');

var SubComponent = require('./SubComponent.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <SubComponent color="blue" />
        <p> im a paragraph element </p>
      </div>
    );
  }
});

module.exports = App;
