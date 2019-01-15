import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from '@material-ui/core';

class NewGoal extends React.Component {
  constructor() {
    super();
    this.state = {
      goalInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addgoal(this.state.goalInput);
    this.setState({ goalInput: '' });
  }

  render() {
    const { goalInput } = this.state;
    const { className } = this.props;
    return (
      <form className={className} onSubmit={this.onSubmit} >
        <input
          name="goalInput"
          type="text"
          value={goalInput}
          onChange={this.handleChange}
        />
        <SubmitButton>
          Add
        </SubmitButton>
      </form>
    );
  }
}

NewGoal.propTypes = {
  addgoal: PropTypes.func.isRequired,
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

const StyledNewGoal = styled(NewGoal)`
  background-color: 'black';
`;

export default StyledNewGoal;
