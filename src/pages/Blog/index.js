import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BlogActions } from '~/store/ducks/blog';

import {
  Container, Post, Title, Info,
} from './styles';

class Blog extends Component {
  static propTypes = {
    indexRequest: PropTypes.func.isRequired,
    blog: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      response: PropTypes.shape({
        data: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            user: PropTypes.shape({
              name: PropTypes.string.isRequired,
            }).isRequired,
            file: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }).isRequired,
            fromNow: PropTypes.string.isRequired,
          }),
        ),
      }).isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.props.indexRequest();
  }

  render() {
    const { loading } = this.props.blog;

    return (
      <Container>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          this.props.blog.response.data.map(post => (
            <Post key={post.id} background={post.file.url}>
              <Title>{post.title}</Title>
              <Info>
                por <span>{post.user.name}</span> {post.fromNow}
              </Info>
            </Post>
          ))
        )}
      </Container>
    );
  }
}

/**
 * {this.props.response.data.map(post => (
          <Post key={post.id}>
            <Title>{post.title}</Title>
            <Info>
              por <span>{post.user.name}</span> há {post.created_at}
            </Info>
          </Post>
        ))}
 */

const mapStateToProps = state => ({
  blog: state.blog,
});

const mapDispatchToProps = dispatch => bindActionCreators(BlogActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blog);
