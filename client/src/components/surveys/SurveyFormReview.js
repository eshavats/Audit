import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import _ from "lodash";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom"

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = () => {
    return _.map(formFields, ({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <h5>Please review your entries!</h5>
      <div>{reviewFields()}</div>
      <button onClick={onCancel} className="yellow white-text darken-4 btn left">
        Back
      </button>
      <button onClick={() => submitSurvey(formValues, history)} className="green white-text darken-3 btn right">
        Send Survey <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
