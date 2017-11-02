import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false,
      stable: false
    };
  }

  componentWillReceiveProps(nextProps) {
    let stable;
    let inc;
    let dec;
    if (nextProps.rating > this.props.rating) {
      stable = false
      inc = true
      dec = false
    } else if (nextProps.rating === this.props.rating) {
      stable = true
      inc = false
      dec = false
    } else if (nextProps.rating < this.props.rating) {
      stable = false
      inc = false
      dec = true
    }
    this.setState({
      increasing: inc,
      decreasing: dec,
      stable: stable
    })
  }

  render() {
    let trend;
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    } else if (this.state.stable) {
      trend = 'stable'
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
