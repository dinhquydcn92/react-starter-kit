import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import { getAllPosts, submitPost } from '../../actions/posts';
import s from './Test.css';

class Test extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    // Wrap all props to one parent props
    content: PropTypes.shape({
      // Document title
      title: PropTypes.string.isRequired,
      // Page title
      pageTitle: PropTypes.string.isRequired,
      // Page subtitle
      pageSubTitle: PropTypes.string,
    }).isRequired,
    posts: PropTypes.object,
    getAllPosts: PropTypes.func,
    submitPost: PropTypes.func,
  };

  componentWillMount() {
    this.props.getAllPosts();
  }

  createPost() {
    const author = document.getElementById('post-author').value;
    const content = document.getElementById('post-content').value;

    if (author && content) {
      this.props.submitPost({ author, content });

      // Reset input
      document.getElementById('post-author').value = null;
      document.getElementById('post-content').value = null;
    }
  }

  render() {
    return (
      <Layout childrenProps={this.props}>
        <div>
          <div className="row">
            <div className="col-lg-12">
              {/* Default box */}
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">Post form</h3>
                  <div className="box-tools pull-right">
                    <button
                      type="button" className="btn btn-box-tool"
                      data-widget="collapse" data-toggle="tooltip"
                      title="Collapse"
                    >
                      <i className="fa fa-minus"/>
                    </button>
                    <button
                      type="button" className="btn btn-box-tool"
                      data-widget="remove" data-toggle="tooltip" title="Remove"
                    >
                      <i className="fa fa-times"/>
                    </button>
                  </div>
                </div>
                <div className="box-body">
                  <p>Start creating your amazing application!</p>
                  <form role="form">
                    {/* text input */}
                    <div className="form-group">
                      <label htmlFor="post-author">Post author</label>
                      <input
                        id="post-author"
                        type="text" className="form-control post-author" placeholder="Enter ..."
                      />
                    </div>
                    {/* textarea */}
                    <div className="form-group">
                      <label htmlFor="post-content">Post content</label>
                      <textarea
                        id="post-content"
                        className="form-control post-content" rows={5} placeholder="Enter ..."
                        defaultValue={''}
                      />
                    </div>
                    <div className="form-group pull-right">
                      <button
                        id="post-submit"
                        type="button" className="btn btn-block btn-primary"
                        onClick={event => this.createPost(event)}
                      >Submit
                      </button>
                    </div>
                    <div className="clearfix"/>
                  </form>
                  <p>Or back to the <Link to="/">Home Page</Link></p>
                </div>
                {/* /.box-body */}
                <div className="box-footer">Footer</div>
                {/* /.box-footer*/}
              </div>
              {/* /.box */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">List of posts</h3>
                  <div className="box-tools pull-right">
                    <button
                      type="button" className="btn btn-box-tool"
                      data-widget="collapse" data-toggle="tooltip"
                      title="Collapse"
                    >
                      <i className="fa fa-minus"/>
                    </button>
                    <button
                      type="button" className="btn btn-box-tool"
                      data-widget="remove" data-toggle="tooltip" title="Remove"
                    >
                      <i className="fa fa-times"/>
                    </button>
                  </div>
                </div>
                <div className="box-body">
                  <ul className="list-group list-group-unbordered">
                    {this.props.posts.latest && this.props.posts.latest.map(post => (
                      <li className="list-group-item" key={post.id}>
                        <strong>{post.author}</strong>
                        <p>{post.content}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* /.box-body */}
                <div className="box-footer">Footer</div>
                {/* /.box-footer*/}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

}

const mapState = (state) => ({
  posts: state.posts,
});

const mapDispatch = {
  getAllPosts,
  submitPost,
};

export default withStyles(s)(connect(mapState, mapDispatch)(Test));
