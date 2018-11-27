import React from 'react';
import style from './style.scss';

function LoaderHOC(WrappedComponent) {
  return function wrapper(props) {
    const {userLoading} = props;
   return userLoading ? (
      <div className={ style.skcubegrid}>
        <div className={` ${style.skcube} ${style.skcube1} `} />
        <div className={` ${style.skcube} ${style.skcube2} `} />
        <div className={` ${style.skcube} ${style.skcube3} `} />
        <div className={` ${style.skcube} ${style.skcube4} `} />
        <div className={` ${style.skcube} ${style.skcube5} `} />
        <div className={` ${style.skcube} ${style.skcube6} `} />
        <div className={` ${style.skcube} ${style.skcube7} `} />
        <div className={` ${style.skcube} ${style.skcube8} `} />
        <div className={` ${style.skcube} ${style.skcube9} `} />
        <div className={style.title}>Loading ...</div>
      </div>) : (<WrappedComponent {...props} />); 
  };
}

export default LoaderHOC;
