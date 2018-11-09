import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import style from './style.scss';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid E-mail';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'La constraseña debe contener al menos 8 caracteres';
  }
  return errors;
};

const renderField = ({ input, label, className, type, meta: { touched, error } }) => (
  <div className={style.field}>
    <label htmlFor="{label}">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched && (error && <span className={style.alert}>{error}</span>)}
    </div>
  </div>
);

const SyncValidationForm = props => {
  const { onSubmit, disabled } = props;

  return (
    <div className={style.overlay}>
      <form onSubmit={onSubmit} className={`${style.login} ${style.fadeInDown} ${style.animated}`}>
        <Field name="email" type="email" component={renderField} label="Email" className={style.space} />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          className={style.space}
        />
        <div>
          <button type="submit" disabled={disabled} className={`${style.space} ${style.submit}`}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

SyncValidationForm.propTypes = {
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool
};

export default reduxForm({
  form: 'syncValidation',
  validate
})(SyncValidationForm);

// import style from './style.scss';

// class LoginForm extends Component {
// state = {
//   loggedIn: false
// };

// loginHandle = () => {
//   this.setState(() => ({ loggedIn: true }));
// };

//   render() {
//     const status = this.state.loggedIn ? (
//      <Redirect to="/Game" />
//     ) : (
//       <Fragment>
//         <div className={style.overlay}>
//           <div className={`${style.login} ${style.fadeInDown} ${style.animated}`}>
//             <input className={style.space} type="text" id="email" placeholder="E-mail" />
//             <input className={style.space} type="password" id="password" placeholder="Password" />
//             <input
//               className={`${style.space} ${style.submit}`}
//               type="submit"
//               value="Log In"
//               onClick={this.loginHandle}
//             />
//           </div>
//         </div>
//       </Fragment>
//     );

//     return status;
//   }
// }
