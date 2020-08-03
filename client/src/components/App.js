import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => <div>Header</div>;
const Landing = () => <div>Landing</div>;
const Dashboard = () => <div>Dashboard</div>;
const SurveyNew = () => <div>SurveyNew</div>;

const App = () => {
  return (
    <div>
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
