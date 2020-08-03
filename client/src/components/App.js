import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
const Landing = () => <div>Landing</div>;
const Dashboard = () => <div>Dashboard</div>;
const SurveyNew = () => <div>SurveyNew</div>;

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
