import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

const FIELDS = [
  { name: "title", label: "Survey Title" },
  { name: "subject", label: "Subject Line" },
  { name: "body", label: "Email Body" },
  { name: "emails", label: "Recipient List" },
];

class SurveyForm extends React.Component {
  renderFields() {
    return (
      FIELDS.map( ({name, label}) => {
          return <Field key={name} type="text" component={SurveyField} name={name} label={label} />
      })
    );
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
