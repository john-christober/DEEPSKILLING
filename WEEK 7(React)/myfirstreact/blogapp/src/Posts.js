
import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
  }

  render() {
    const { posts } = this.state;
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2 style={{ textAlign: "center", color: "#333" }}>Blog Posts</h2>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              borderRadius: "8px",
              padding: "15px",
              margin: "20px",
              maxWidth: "600px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#0a0b0bff" }}>{post.title}</h3>
            <p style={{ color: "#333", lineHeight: "1.6" }}>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
