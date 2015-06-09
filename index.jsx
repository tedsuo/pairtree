// views
var PairTree = React.createClass({
  render: function() {
    var timeline = this.props.timeline;
    console.log(timeline);
    return <h1>PairTree</h1>;
  }
});

// main
React.render(
  <PairTree timeline={new newRandomTimeline(12)} />,
  document.getElementById('container')
);
