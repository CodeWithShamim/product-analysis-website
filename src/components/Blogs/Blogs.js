import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container container row mx-auto mt-5">
      <div className="col-md-6">
        <h2>What is Context API?</h2>
        <p>
          Context API helps to avoid prop drilling. In React, we can pass the
          data only in a single direction, i.e. from top to down (parent to
          child) via props. Prop drilling is a process where we need to pass
          down the props at each level in a deeply nested component tree so that
          we can access them in the component at the lowest level. Context API
          just provides a way to pass the data directly to the required
          components rather than passing them through every level of the
          component tree. So using React Context, we don't have to pass the
          props unnecessarily to all those intermediate components that do not
          need the props.
        </p>
      </div>
      <div className="col-md-6">
        <h2>What is semantic tag?</h2>
        <p>
          Semantic tag address this shortcoming by defining specific tags to
          indicate clearly what role is played by the content those tags
          contain.For example, header, Footer, article are considered semantic
          elements. As they clearly describe their purpose and the type of
          content they should enclose. Semantic tags also help search engines to
          parse the webpage correctly and find accurate information. Thus,
          helping search engines to correctly index the page.
        </p>
        <h5>HTML5 Semantic tag ex...</h5>
        <div className="semantic-tag-item">
          <ul>
            <li>Main</li>
            <li>Section</li>
            <li>Article</li>
            <li>Aside</li>
            <li>Header</li>
            <li>Footer</li>
            <li>Heading</li>
            <li>audio & video</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
