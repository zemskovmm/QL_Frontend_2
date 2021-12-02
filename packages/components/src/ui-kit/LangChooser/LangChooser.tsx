import React,{ FunctionComponent,useState,ReactNode } from "react";
import { FlagIcon } from "@project/components/src/ui-kit/FlagIcon";


import cn from "classnames";
import styles from "./langChooser.module.css";


const LANGS:{[key:string]:string} = {
    en: "$",
    fr: "€",
    ru: "₽", 
    cn: "¥", 
    esp: "P",
};

const allLangsId = Object.keys(LANGS);


type LinkPropsType = {
    lang:string;
}

export type LangChooserPropsType = {
    lang: string;
    linkComponent: (lang:string)=>ReactNode;
}

export const LangChooser:FunctionComponent<LangChooserPropsType> = ({ 
    lang,
    linkComponent,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const currLang = (lang in LANGS) ? lang : "en"
    return (
        <div onClick={() => setIsOpen(!isOpen)} className={cn(styles.lang, "bg-button-secondary", "rounded-primary")}>
            <FlagIcon lang={currLang} />
            <span>{LANGS[currLang]}</span>
            {allLangsId.length > 0 && (
            <>
                <div className={isOpen ? styles.back : ""} />
                <ul className={isOpen ? styles.open : ""}>
                {allLangsId.map((el, index) => (
                    <li key={el + index + "LangChooser"} className={el === lang ? "font-bold" : ""}>
                        {linkComponent(el)}
                    </li>
                ))}
                </ul>
            </>
            )}
        </div>
    );
};