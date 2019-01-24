import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import queryString from "query-string";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";

import { FaCircleNotch } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import "~/styles/loading.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as BlogActions } from "~/store/ducks/blog";

import { Container, Post, Title, Info, Loading, BotaoMais } from "./styles";

class Blog extends Component {
  static propTypes = {
    indexRequest: PropTypes.func.isRequired,
    blog: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      response: PropTypes.shape({
        page: PropTypes.number,
        data: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            user: PropTypes.shape({
              name: PropTypes.string.isRequired
            }).isRequired,
            file: PropTypes.shape({
              url: PropTypes.string.isRequired
            }).isRequired,
            fromNow: PropTypes.string.isRequired
          })
        )
      }).isRequired
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    const { pagina } = queryString.parse(this.props.location.search);
    pagina ? this.props.indexRequest(pagina) : this.props.indexRequest();
  }

  handleLoadMore = () => {
    const { page } = this.props.blog.response;
    this.props.indexRequest(page + 1);
    this.props.history.push(`/blog?pagina=${page + 1}`);
  };

  handleLoadLess = () => {
    const { page } = this.props.blog.response;
    this.props.indexRequest(page - 1);
    this.props.history.push(`/blog?pagina=${page - 1}`);
  };

  redirectToDetails = id => {
    const { history } = this.props;
    history.push(`/post/${id}`);
  };

  render() {
    const { loading, response } = this.props.blog;
    const { page, lastPage, data } = response;

    const Lista = () => (
      <div>
        {response.data &&
          response.data.map(post => (
            <Post
              key={post.id}
              background={post.file.url}
              onClick={() => this.redirectToDetails(post.id)}
            >
              <Title>{post.title}</Title>
              <Info>
                por <span>{post.user.name}</span> {post.fromNow}
              </Info>
            </Post>
          ))}
      </div>
    );

    return (
      <Container>
        {loading ? (
          <Loading>
            <FaCircleNotch className="icon-spin" />
          </Loading>
        ) : (
          <div>
            <Lista />
            {data.length > 0 &&
              (page === 1 && lastPage > 1 ? (
                <BotaoMais>
                  <FiArrowRight onClick={this.handleLoadMore} />
                </BotaoMais>
              ) : page === lastPage && lastPage !== 1 ? (
                <BotaoMais>
                  <FiArrowLeft onClick={this.handleLoadLess} />
                </BotaoMais>
              ) : lastPage === 1 ? null : (
                <BotaoMais>
                  <FiArrowLeft onClick={this.handleLoadLess} />
                  <FiArrowRight onClick={this.handleLoadMore} />
                </BotaoMais>
              ))}
          </div>
        )}
        <ToastContainer autoClose={3000} toastClassName="round-toast" />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  blog: state.blog
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BlogActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Blog));
