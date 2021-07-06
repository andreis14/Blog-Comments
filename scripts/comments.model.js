class CommentsModel {
  postId;

  constructor(postId) {
    this.postId = postId;
  }

  getAll() {
    return fetch(`http://localhost:3000/posts/${this.postId}/comments`).then(
      this.handleResponse
    );
  }

  handleResponse(res) {
    if (!res.ok) {
      throw new Error(
        'Something went wrong with our request to the server for comments.'
      );
    }
    return res.json();
  }
}
