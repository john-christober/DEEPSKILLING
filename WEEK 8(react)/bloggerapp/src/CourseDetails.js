import React from 'react';

function CourseDetails({ show }) {
  switch (show) {
    case true:
      return (
        <div>
          <h2>Course Details</h2>
          <p><strong>Angular</strong></p>
          <p>9/5/2026</p>
          <p><strong>React</strong></p>
          <p>7/8/2026</p>
        </div>
      );
    default:
      return null;
  }
}

export default CourseDetails;
