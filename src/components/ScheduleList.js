import React from 'react';
import ScheduleDate from './ScheduleDate';

function ScheduleList() {
  return(
    <React.Fragment>
      <h3>Schedule List goes here.</h3>
      <hr></hr>
      <ScheduleDate />
      <ScheduleDate />
      <ScheduleDate />
    </React.Fragment>
  );
}

export default ScheduleList;