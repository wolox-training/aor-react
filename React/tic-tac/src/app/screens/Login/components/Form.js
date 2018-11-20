import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FORM_CONST from '../../../../constants/formNames';
import validate from '../components/formField/validate';
import PropTypes from 'prop-types';

import style from './styles.scss';
import renderField from './formField/index';

const loginForm = ({ handleSubmit, onSubmit, submitting, onClick }) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${style.login} ${style.fadeInDown} ${style.animated}`}
    >
      <Field name="email" type="email" component={renderField} label="Email" className={style.inputField} />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
        className={style.inputField}
      />
      <div>
        <button
          type="submit"
          disabled={submitting}
          className={`${style.inputField} ${style.submit}`}
          onClick={onClick}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

loginForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  onClick: PropTypes.func
};

export default reduxForm({
  form: FORM_CONST.SYNC_VALIDATION,
  validate
})(loginForm);
