import React from "react";
import ReactDOM from "react-dom";
import PostApplet from "./PostApplet";

it("renders without crashing", () => {
	const posts = [{
		title: "Some title",
		content: "some content"
	}]

  const div = document.createElement("div");
  ReactDOM.render(<PostApplet posts={posts}/>, div);
});
