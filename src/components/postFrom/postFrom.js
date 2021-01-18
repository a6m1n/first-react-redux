import React from "react";

const postFrom = (props) => {
  return (
    <div className="row">
      <div className="mb-3 form-group">
        <form onSubmit={props.submitHandler}>
          <label htmlFor="createPostFrom" className="form-label">
            Create post
          </label>
          <input
            type="text"
            className="form-control"
            id="createPostFrom"
            placeholder="Enter post title"
            name="title"
            value={props.title}
            onChange={props.onChangeHandler}
          />
          <button type="submit" className="btn btn-success mt-3">
            Create post
          </button>
        </form>
        <hr></hr>
      </div>
    </div>
  );
};

export default postFrom;
