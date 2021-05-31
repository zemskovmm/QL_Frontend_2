import { useIntl } from "react-intl";
import { FooterDataDto } from "src/interfaces/footerDataDto";
import styles from "./main.module.css";
import cn from "classnames";
import Logo from "src/assets/images/logoFooter.svg";
import Arrow from "src/assets/images/icons/arrow.svg";
import { default as Social } from "src/assets/icons/socialFooter";
import { ContactUsFormButton } from "src/components/common/contactUsForm/contactUsForm";
import React from "react";

export const MainFooter = (props: FooterDataDto) => {
  const lang = useIntl().locale;
  return (
    <footer className="bg-bgsecondary text-third flex flex-col">
      <div className={cn("flex justify-between max-w-screen-xl w-full my-0 mx-auto px-10 py-16", styles.footer_menu)}>
        <div className="flex items-center">
          <img className="mr-20" src={Logo} alt="Quartier Latin" />
          <ul className="flex">
            {props[lang].headLinks.map((link, i) => (
              <li key={i + "footerHeadLink"}>
                <a className="flex mx-7 whitespace-nowrap font-bold" href={link.link.url}>
                  <img className="mr-3" src={link.icon} alt="" />
                  {link.link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className={styles.footer_arrow} href="#header">
          <img src={Arrow} alt="" />
        </a>
      </div>
      <div className="flex flex-wrap max-w-screen-xl w-full my-0 mx-auto mx-8 px-10 pt-14">
        {props[lang].links.map(({ group, items }, index) => (
          <div key={index + "MainFooter"} className={cn("w-1/3", styles.footer_column)}>
            <a className="font-bold" href={group.url}>
              {group.title}
            </a>
            <ul className="flex flex-col">
              {items.map((link, i) =>
                link.title ? (
                  <li key={i + "MainFooterLink"}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        ))}
        <div className={cn("w-1/3", styles.footer_column, styles.footer_address)}>
          <ul className="flex flex-col font-bold">
            <li>10 rue de la Lune</li>
            <li>75002 Paris</li>
            <li>+33 144 829 031</li>
            <li>Contact@quartier-latin.com</li>
            <li>Skype: QuartierLatinRU</li>
          </ul>
          {props[lang].writeUs && (
            <ContactUsFormButton footer={true}>
              <button className={styles.footer_writeus}>{props[lang].writeUs}</button>
            </ContactUsFormButton>
            // <ButtonFormBlock icon={Mail} myClass={`w-full`} name={props[lang].writeUs} align={`flex-center`} />
          )}
          <div className={styles.footer_social}>
            {props[lang].socials.map((link, i) =>
              link.title ? (
                <a key={i + "footerSocial"} href={link.url}>
                  <Social icon={link.title} />
                </a>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
