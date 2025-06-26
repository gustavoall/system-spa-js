import { render, include } from "../../helpers/render";

import introElement from "./intro.html?raw";
import headerElement from "../../components/header/header.html?raw";
import footerElement from "../../components/footer/footer.html?raw";
import "./intro.scss";

const data = {
  title: "Hello from intro",
  lessons: [
    {
      title: "lesson-01",
    },
    {
      title: "lesson-02",
    },
    {
      title: "lesson-03",
    },
  ],
}


export function intro(ctx, next) {
  render("#app", introElement, data);
  include("header-element", headerElement);
  include("footer-element", footerElement);
}
