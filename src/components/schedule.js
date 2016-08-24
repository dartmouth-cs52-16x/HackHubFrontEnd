// use an api for scheduling
import React from 'react';
import ScheduleDisplay from './scheduleDisplay';

export default function Schedule(props) {
  return (
    <div>
      <div id="schedule">
        <ScheduleDisplay />
      </div>
      <div>
        <button className="btn btn-default">Update Schedule</button>
      </div>
      <div>
        <button className="btn btn-default">New Schedule</button>
      </div>
    </div>
  );
}
