import { FunctionComponent } from "react";
import classNames from 'classnames/bind';

type PropsType = {
    className?: string;
    data?: string;
}

export const HtmlEditorView: FunctionComponent<PropsType> = ({ className, data }) => {
    return (
        <div className={`BasicHtmlBlockInfo ${className}`} 
            dangerouslySetInnerHTML={{ __html: data || "" }}>
        </div>
    )
}
