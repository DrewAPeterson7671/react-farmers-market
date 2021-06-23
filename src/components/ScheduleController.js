import React from 'react';
import ScheduleHeader from './ScheduleHeader';
import ScheduleList from './ScheduleList';

function Schedule() {
  return (
    <React.Fragment>
      <h2>Schedule Controller</h2>
      <ScheduleHeader />
      <ScheduleList />
    </React.Fragment>
  );
}

export default Schedule;