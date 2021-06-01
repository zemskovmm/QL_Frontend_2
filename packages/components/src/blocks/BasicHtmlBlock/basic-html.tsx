import React from "react";
import { TypedBlockTypeInfo } from "../blocks-info";
import styles from "./basichtml.module.css";
import preview from "./preview.png";

export interface BasicHtmlBlockProps {
  html: string;
}

export const BasicHtmlBlockInfo: TypedBlockTypeInfo<BasicHtmlBlockProps> = {
  id: "basic-html",
  name: "Basic HTML",
  preview: preview,
  initialData: {
    html: "<b>Lorem ipsum</b> <i>dolor sit amet</i>",
  },
  definition: {
    fields: [
      {
        id: "html",
        name: "html",
        type: "Custom",
        customType: "Html",
      },
    ],
  },
  renderer: (props) => <div className={styles.htmlBlock} dangerouslySetInnerHTML={{ __html: props.html }} />,
};
