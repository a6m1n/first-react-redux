import React from "react";
import PostFrom from "./postFrom.js";
import { connect } from "react-redux";
import { createPost } from './action.js';

class PostFormContainer extends React.Component {
  // TODO: Maybe user formik?
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.length) {
      return 
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.setState({ title: "" });
    this.props.createPost(newPost);
  };

  onChangeHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <PostFrom
        submitHandler={this.submitHandler}
        title={this.state.title}
        onChangeHandler={this.onChangeHandler}
      />
    );
  }
}

const mapDispatchToProps = {
   createPost
}

export default connect(null, mapDispatchToProps)(PostFormContainer);