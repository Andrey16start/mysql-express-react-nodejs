import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { removeNotification } from "../../../ducks/notifications";


const Toast = ({ toast = {}, ...props }) => {
  const {
    duration,
    color,
    text,
    id,
    dateCreated,
  } = toast;

  useEffect(() => {
    if (duration) {
      const interval = setInterval(() => {
        const diffInSeconds = (new Date() - dateCreated) / 1000;

        if (diffInSeconds > duration) {
          clearInterval(interval);
          props.removeNotification(id);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div
      className={'toast toast--' + color}
      style={{ top: (props.index * 55 + 10) + 'px' }}
    >
      <span>{text}</span>

      <button
        className='toast__close'
        onClick={() => props.removeNotification(id)}
      ></button>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  toast: state.notifications.entities[ownProps.id],
});

const mapDispatchToProps = {
  removeNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toast);