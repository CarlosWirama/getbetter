import React from "react";
import { Grid } from '@material-ui/core';
import GoalList from 'modules/goalList/GoalList';
import NewGoal from 'modules/goalList/NewGoal';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      goals: [],
    };
    this.addGoal = this.addGoal.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  addGoal(newGoal) {
    // console.log(event)
    this.setState({
      goals: [
        ...this.state.goals,
        {
          title: newGoal,
          status: 'on progress',
        },
      ],
    });
  }

  onCheck(index) {
    const modifiedGoals = this.state.goals;
    const currentStatus = modifiedGoals[index].status;
    modifiedGoals[index].status = currentStatus === 'done'
      ? 'on progress'
      : 'done';
    this.setState({ goals: modifiedGoals });
  }

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center" >
        <NewGoal addgoal={this.addGoal} />
        <GoalList goals={this.state.goals} onCheck={this.onCheck} />
      </Grid>
    );
  }
}
