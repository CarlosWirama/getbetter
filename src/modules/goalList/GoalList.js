import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class GoalList extends React.Component {
  constructor() {
    super();
    this.state = {
      goal: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { goalInput } = this.state;
    return (
      <form>
        <input
          id="goal"
          type="text"
          value={goalInput}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
export default GoalList;

const wrapper = document.getElementById('app');
wrapper && render(<GoalList />, wrapper);