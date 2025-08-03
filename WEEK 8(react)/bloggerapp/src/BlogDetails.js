import React from 'react';

function BlogDetails({ show }) {
  return (
    <>
      {show && ( 
        <div>
          <h2>Blog Details</h2>

          <p><strong>React Learning</strong></p>
          <p><em>Stephen Biz</em></p>
          <p>Welcome to learning React!</p>

          <p><strong>Installation</strong></p>
          <p><em>Schwezdenier</em></p>
          <p>You can install React from npm.</p>
        </div>
      )}
    </>
  );
}

export default BlogDetails;
