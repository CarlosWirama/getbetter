import React from "react";
import { render } from "react-dom";
import MainPage from './pages/MainPage';

const wrapper = document.getElementById('app');
wrapper && render(<MainPage />, wrapper);
