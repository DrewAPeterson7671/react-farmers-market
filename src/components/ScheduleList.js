import React from 'react';
import ScheduleDate from './ScheduleDate';
import PropTypes from 'prop-types';

function ScheduleList(props) {
  return(
    <React.Fragment>
      <h3>Our Next Scheduled Market Dates.</h3>
      <hr />
      {props.marketSchedule.map((date, index) => 
        <ScheduleDate
          day={date.day}
          location={date.location}
          hours={date.hours}
          booth={date.booth}
          key={index} />
      )}
    </React.Fragment>
  );
}

ScheduleList.propTypes = {
  marketSchedule: PropTypes.object
};

export default ScheduleList;