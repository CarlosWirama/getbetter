import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
} from '@material-ui/core';

class GoalList extends React.Component {
  render() {
    const { goals, onCheck } = this.props;
    return (
      <List {...this.props} >
        { goals.map(({ title, status }, idx) => (
          <ListItem button key={idx}>
            <ListItemText>
              {title}
            </ListItemText>
            <ListItemSecondaryAction>
              <Checkbox checked={status === 'done'} onChange={() => onCheck(idx)} />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

GoalList.propTypes = {
  goals: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired, // 'Make February's Medium post'
    status: PropTypes.string.isRequired, // 'todo'
  })),
  onCheck: PropTypes.func.isRequired,
}

// const StyledGoalList = styled(GoalList)`
//   background-color: 'black';
// `;

export default GoalList;
