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
      <Grid container direction="row" justify="center" alignItems="center" {...this.props} >
        <form>
          <input
            id="goal"
            type="text"
            value={goalInput}
            onChange={this.handleChange}
          />
          <SubmitButton>
            Add
          </SubmitButton>
        </form>
      </Grid>
    );
  }
}

const SubmitButton = styled(Button).attrs({
  component: React.input,
  type: 'submit',
  variant: 'contained',
  color: 'primary',
})`
  && {
    margin: 10px;
  }
`;

const StyledGoalList = styled(GoalList)`
  background-color: 'black';
`;

export default StyledGoalList;
