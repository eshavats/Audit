import React from "react";
import { connect } from "react-redux";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please review your entries!</h5>
      <button onClick={onCancel} className="yellow darken-3 btn">
        Back
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps)(SurveyFormReview);
