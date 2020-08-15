import React from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import "../style/SurveyNew.css";

class SurveyNew extends React.Component {
  state = { showFormReview: false };

  renderContent = () => {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  };

  render() {
    return <div className="survey-new">{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
