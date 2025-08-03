import React, { useState } from 'react';
import './index.css';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  const [visible, setVisible] = useState({
    course: true,
    book: true,
    blog: true
  });

  return (
    <div className="container">
      <div className="section">
        <CourseDetails show={visible.course} />
      </div>
      <div className="section">
        <BookDetails show={visible.book} />
      </div>
      <div className="section">
        <BlogDetails show={visible.blog} />
      </div>
    </div>
  );
}

export default App;
