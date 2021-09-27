import React, { FC } from "react";
import style from "../course/catalogCourseInnerAbout.module.css";
import { ContactUsFormButton } from "src/components/common/contactUsForm/contactUsForm";
import { HtmlPresenter } from "@project/components/src/ui/HtmlPresenter/htmlPresenter";
import { LocalizedText } from "src/components/common/LocalizedText";
import { ClientSchoolDto } from "../../../interfaces/clientSchoolDto";
import { ApiBaseUrl } from "@project/components/src/api/apiClientBase";
import notIcon from "../../../assets/icons/done_outline.svg";

const CatalogCallBack = () => {
  return (
    <div className={style.catalogCallBack + " w-full"}>
      <div className={style.catalogCallBack__top}>
        <h3 className={style.catalogCallBack__title}>
          <LocalizedText id={"university_question"} />
        </h3>
        <div className={style.catalogCallBack__subtitle}>
          <LocalizedText id={"university_answer"} />
        </div>
      </div>
      <ContactUsFormButton footer={true}>
        <button className={style.catalogCallBack__btn}>
          <LocalizedText id={"university_button"} />
        </button>
      </ContactUsFormButton>
    </div>
  );
};

type CatalogInnerSchoolAboutProps = {
  data: ClientSchoolDto;
};

export const CatalogSchoolInnerAbout: FC<CatalogInnerSchoolAboutProps> = ({ data }) => {
  return (
    <div className={style.catalogInnerAbout__bg}>
      <div className={style.catalogInnerAbout__maxWidth}>
        <div className={style.catalogInnerAbout}>
          <h2 className={style.catalogInnerAbout__title}>
            <LocalizedText id={"courses_tab_about_school"} />
          </h2>
          <HtmlPresenter text={data.descriptionHtml} />
          <div className={style.info__row}>
            <div className={`${style.info__columnItem} w-full`}>
              <span className={`${style.info__columnTitle}`}>
                <LocalizedText id={"trait_directions_study"} />
              </span>
              <div className={style.info__columnItem__list}>
                {data.traits.namedTraits["directions-study"]?.map((el) => (
                  <span>{el.name}</span>
                ))}
              </div>
            </div>
            <div className={`${style.info__columnItem} w-6/12`}>
              <span className={`${style.info__columnTitle}`}>
                <LocalizedText id={"university_lang"} />
              </span>
              <div className={style.info__columnItem__list}>
                {data.traits.namedTraits["instruction-language"]?.map((el) => (
                  <span>{el.name}</span>
                ))}
              </div>
            </div>
            <div className={`${style.info__columnItem} w-6/12`}>
              <span className={`${style.info__columnTitle}`}>
                <LocalizedText id={"trait_age"} />
              </span>
              <div className={style.info__columnItem__list}>
                {data.traits.namedTraits["Age"]?.map((el) => (
                  <span>{el.name}</span>
                ))}
              </div>
            </div>
            <div className={`${style.info__columnItem} w-6/12`}>
              <span className={`${style.info__columnTitle}`}>
                <LocalizedText id={"trait_sites"} />
              </span>
              <div className={style.info__columnItem__list}>
                {data.traits.namedTraits["sites"]?.map((el) => (
                  <a href={el.name}>{el.name}</a>
                ))}
              </div>
            </div>
            <div className={`${style.info__columnItem} w-6/12`}>
              <span className={`${style.info__columnTitle}`}>
                <LocalizedText id={"university_foundation"} />
              </span>
              <div className={style.info__columnItem__list}>{data.foundationYear}</div>
            </div>
          </div>
          <div className={`mb-6 flex flex-wrap px-4 lg:px-16`}>
            {data.traits.namedTraits["benefits"]?.map((el, index) => (
              <div className={`flex flex-col items-center mx-10 w-40 mb-10`} key={el.name + index}>
                <div className={`p-2 w-10 h-10 rounded-full mr-8 lg:mr-10`} style={{ backgroundColor: "#EFF3FA" }}>
                  <img src={el.iconId ? `${ApiBaseUrl}/api/media/scaled/${el.iconId}` : notIcon} alt="" />
                </div>
                <span style={{ color: "#373737" }} className={`text-sm`}>
                  {el.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <CatalogCallBack />
      </div>
    </div>
  );
};