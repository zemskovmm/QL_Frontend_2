import { MouseEventHandler } from "react";

interface AdminButtonProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children?: any;
  color: string;
  href?: string;
}

export const AdminButton = (props: AdminButtonProps) => {
  const {color, href, onClick, ...rest} = props;
  var classes = "text-white font-bold py-2 px-4 rounded inline-block ";
  if (color == "primary") classes += "bg-blue-500 hover:bg-blue-100 hover:text-black";
  if (color == "success") classes += "bg-green-400 hover:bg-green-100 hover:text-black";
  if (color == "danger") classes += "bg-red-600 hover:bg-red-900";
  if (color == "success") classes += "bg-gray-400 hover:bg-gray-100 hover:text-black";

  return (
    <a
      className={classes}
      href={href || "#"}
      onClick={(e) => {
        if (onClick != null) {
          onClick(e);
        }
        return false;
      }}
      {...rest}
    />
  );
};
