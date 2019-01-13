import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid, Button } from '@material-ui/core';

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
      <Grid container direction="row" justify="center" alignItems="center">
        <form>
          <input
            id="goal"
            type="text"
            value={goalInput}
            onChange={this.handleChange}
          />
          <Button component={React.input} type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
      </Grid>
    );
  }
}
const StyledGoalList = styled(GoalList)`
  background-color: 'black';
`;

export default StyledGoalList;
