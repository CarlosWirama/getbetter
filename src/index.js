import React from "react";
import { render } from "react-dom";
import GoalList from './modules/goalList/GoalList';

const wrapper = document.getElementById('app');
wrapper && render(<GoalList />, wrapper);
