class CommentsView {
  outputSelector = '#root';
  commentsContainerSelector = '.comments-area';
  listTemplate = document.querySelector('[data-template="comments"]');

  getTemplate() {
    const clone = this.listTemplate.content.cloneNode(true);

    return clone;
  }

  createCommentsList(comments) {
    const commentsList = document.createDocumentFragment();

    for (const comment of comments) {
      const template = this.getTemplate();

      const commentText = template.querySelector('span'); //commentText

      commentText.innerText = comment.body;

      commentsList.appendChild(template);
    }

    return commentsList;
  }

  display(what) {
    document.querySelector(this.commentsContainerSelector).appendChild(what);
  }

  renderCommentsList(comments) {
    const html = this.createCommentsList(comments);

    this.display(html);
  }
}
