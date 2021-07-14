import { Catalog } from "src/components/catalog/catalog";
import { CatalogUniversityDto } from "src/interfaces/catalogFilterDto";
import style from "src/components/catalog/style/catalogView.module.css";
import { LocalizedText, useLocalizedText } from "src/components/common/LocalizedText";
import { BreadcrumbsBlock } from "@project/components/src/blocks/BreadcrumbsBlock/breadcrumbsBlock";
import { useIntl } from "react-intl";
import { HousingCatalogElement } from "./catalogElement";

const HousingCatalogPage = () => {
  const lang = useIntl().locale;
  const intl = useIntl();
  return (
    <div style={{ backgroundColor: "#f9fafd" }}>
      <div className={style.catalogWrapper}>
        <div className={`mr-auto mb-7 ` + style.catalog__bread}>
          <BreadcrumbsBlock
            items={[
              {
                name: <LocalizedText id={"breadcrumbs_Main"} />,
                link: `/${lang}`,
              },
              {
                name: <LocalizedText id={"breadcrumbs_Housing"} />,
                link: `/${lang}/catalog/housing`,
              },
            ]}
          />
        </div>
        <Catalog<CatalogUniversityDto>
          title={useLocalizedText({ id: "catalogHousing_title" }, intl)}
          elementRenderer={HousingCatalogElement}
          apiElementName="university"
        />
      </div>
    </div>
  );
};

export default HousingCatalogPage;
