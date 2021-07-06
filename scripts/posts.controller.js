class PostsController {
  model = new PostsModel('http://localhost:3000');
  view = new PostsView({ submitHandler: this.createNewPost.bind(this) });

  renderPostsList() {
    this.model.getAll().then((posts) => this.view.renderPostsList(posts));
  }

  async createNewPost(e) {
    e.preventDefault();
    const post = this.view.getNewPostData();

    const newPost = await this.model.create(post);
    this.view.renderPostsList([newPost]);
    this.view.resetForm();
  }

  renderPostDetalis() {}
}

const controller = new PostsController();
controller.renderPostsList();
