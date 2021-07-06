class PostDetailsController {
  model = new PostsModel('http://localhost:3000');
  commentsData;
  commentsView = new CommentsView();
  commentsModel;

  // view = new PostsView({ deleteHandler: this.deletePost.bind(this) });

  async renderPostDetails() {
    const id = PostDetailsController.getUrlParam('id');
    const post = await this.model.getById(id);
    this.commentsModel = new CommentsModel(post.id);
    this.commentsData = await this.commentsModel.getAll();
    this.commentsView.renderCommentsList(this.commentsData);
  }

  async deletePost(e) {
    e.preventDefault();
    // sa stergem de pe server
    await this.model.delete(PostDetailsController.getUrlParam('id'));

    // sa navigam inapoi la lista
    location = '/';
  }

  static getUrlParam(name) {
    //"?altceva=ceva&movieId=6018075fa1c19b0022112a01&test=8"
    const search = location.search.substr(1); // substr scoate semnul intrebarii din query string

    //"altceva=ceva&movieId=6018075fa1c19b0022112a01&test=8""
    const keyValuePairs = search.split('&');

    // array de stringuri cheie=valoare
    for (const pair of keyValuePairs) {
      // Array destructuring
      const [key, value] = pair.split('=');

      if (key === name) {
        return value;
      }
    }

    console.warn(
      'The query parameter you tried to get: "%s" is not available in the URL.',
      name
    );
    return undefined;
  }
}

const controller = new PostDetailsController();
controller.renderPostDetails();
