import React, { useState } from "react";
import { TypedBlockTypeInfo } from "../blocks-info";
import styles from "./reasonsCustomIconBlock.module.css";

export interface ReasonsCustomIconBlockElement {
  header: string;
  elements: { title: string; text: string; image: number | null }[];
  showButton: boolean;
  alignButton: string;
}

export const ReasonsCustomIconBlock = (props: ReasonsCustomIconBlockElement) => {
  // const [isOpen, Open] = useState(false);
  return (
    <div className="py-28">
      <div className="flex justify-between mx-auto max-w-screen-xl w-full">
        <div className={styles.reasonsCustomIconBlock}>
          <div className={styles.reasonsCustomIconBlock__title}>{props.header}</div>
          <div className={styles.reasonsCustomIconBlock__list}>
            {props.elements.map((el) => (
              <div className={styles.reasonsCustomIconBlock__item}>
                <div className={styles.reasonsCustomIconBlock__icon}>
                  <img src={`https://ql.dotlic.ru/api/media/${el.image}`} alt="" />
                </div>
                <div className={`flex flex-col`}>
                  <div className={styles.reasonsCustomIconBlock__itemTitle}>{el.title}</div>
                  <div className={styles.reasonsCustomIconBlock__text} dangerouslySetInnerHTML={{ __html: el.text }} />
                </div>
              </div>
            ))}
          </div>
          <div className={`flex ${props.alignButton}`}>
            {props.showButton && <button className={styles.reasonsCustomIconBlock__button}>Подобрать жилье</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReasonsCustomIconBlockInfo: TypedBlockTypeInfo<ReasonsCustomIconBlockElement> = {
  id: "reasonsCustomIconBlock",
  name: "ReasonsCustomIconBlock",
  renderer: ReasonsCustomIconBlock,
  initialData: {
    header: "Header",
    elements: [
      {
        title: "string",
        text: "string",
        image: null,
      },
    ],
    showButton: true,
    alignButton: "",
  },
  definition: {
    subTypes: {
      element: {
        fields: [
          {
            id: "title",
            type: "String",
            name: "Title",
          },
          {
            id: "text",
            type: "String",
            name: "Text",
          },
          {
            id: "image",
            name: "image",
            type: "Custom",
            customType: "Image",
          },
        ],
      },
    },
    fields: [
      {
        id: "header",
        type: "String",
        name: "Header",
      },
      {
        id: "elements",
        name: "Elements",
        type: "List",
        listType: "element",
      },
      {
        id: "showButton",
        type: "CheckBox",
        name: "Show Button",
      },
      {
        id: "alignButton",
        type: "Radio",
        name: "Align Button",
        possibleValues: [
          {
            id: "justify-start",
            name: "left",
          },
          {
            id: "justify-center",
            name: "center",
          },
          {
            id: "justify-end",
            name: "right",
          },
        ],
      },
    ],
  },
};
