import React, { FunctionComponent, CSSProperties, ReactNode, MouseEvent } from "react";
import { Icon } from "@project/components/src/ui-kit/Icon";
import { Text } from "../Text";
import RIGHT_ARROW_ICON from "@project/components/src/assets/icons/right-arrow.svg";

export const LIST_ITEM_H = 40;

export type ListItemPropsType = {
  className?: string;
  key?: string;
  text: string;
  onClick?: () => void;
  depth?: number;
  style?: CSSProperties;
  isOpenArrow?: boolean;
  withArrow?: boolean;
  stopPropagation?: boolean;
};

export const ListItem: FunctionComponent<ListItemPropsType> = ({
  className,
  key,
  depth = 0,
  text,
  onClick = () => {},
  style,
  isOpenArrow = "false",
  withArrow,
  stopPropagation,
}) => {
  const ofset: Array<ReactNode> = [];
  for (let d = 0; d < depth; d++) {
    ofset.push(<div key={`item_${key}_ofset${d}`} className="pl-4" />);
  }

  const iconClassName = ["transition duration-200 ease-in-out", isOpenArrow ? "transform rotate-90" : ""].join(" ");

  return (
    <div
      key={key}
      className={`cursor-pointer relative border-l border-t border-r h-10 box-border flex-shrink-0 ${className}`}
      onClick={(e) => {
        stopPropagation && e.stopPropagation();
        onClick();
      }}
      style={style}
    >
      <div className="relative -bottom-px border-b flex items-center justify-between h-full px-4 py-3 md:py-1">
        <div className="flex max-h-9 overflow-hidden">
          {ofset}
          <Text text={text} size="small" className={`whitespace-nowrap`} />
        </div>
        {withArrow && <Icon className={iconClassName} src={RIGHT_ARROW_ICON} size="8" />}
      </div>
    </div>
  );
};
