import React from 'react';

import style from '../formField/style.scss';

const renderField = ({ input, label, className, type, meta: { touched, error } }) => (
  <div className={style.field}>
    <label htmlFor="{label}">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched && (error && <span className={style.alert}>{error}</span>)}
    </div>
  </div>
);

export default renderField;
