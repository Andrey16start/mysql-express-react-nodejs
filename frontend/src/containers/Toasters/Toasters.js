import React from "react";
import { connect } from 'react-redux';

import './Toasters.scss';
import Toast from "./components/Toast";


const Toasters = (props) => {
  return (
    <>
      {props.ids.map((id, i) => (
        <Toast
          id={id}
          key={id}
          index={i}
        />
      ))}
    </>
  )
};

const mapStateToProps = (state) => ({
  ids: state.notifications.ids,
});

export default connect(mapStateToProps)(Toasters);