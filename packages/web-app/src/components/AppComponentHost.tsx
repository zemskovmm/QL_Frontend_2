import React, { useState } from "react";
import { ComponentHostContext, IComponentHost } from "@project/components/src/blocks";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { getLocaleMessages } from "../locales/locales";
import { ContactUsFormController } from "./common/ContactUsForm";
import { siteApi } from "../clients/siteApiClient";
import Head from "next/head";
import Link from "next/link";
import { RequestFormDto } from "admin-app/src/interfaces/GlobalSettingsDto";

type appComponentHostType = {
  headTitle: string;
  headMeta?: { name: string; content: string; property: string }[] | null;
  requestSetting: RequestFormDto;
  oldHousing: boolean;
};

export const AppComponentHost: React.FC<appComponentHostType> = ({
  headTitle,
  headMeta,
  requestSetting,
  oldHousing,
  children,
}) => {
  const [isContactUsFormShown, setContactUsFormShown] = useState(false);
  const router = useRouter();
  const lang = router.query.lang || "en";
  const host: IComponentHost = {
    showContactUsForm: () => setContactUsFormShown(true),
    filters: siteApi,
    lang: lang as string,
    linkComponent: Link,
    requestSetting: requestSetting,
    oldHousing: oldHousing,
  };
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Quartier Latin {headTitle && `| ${headTitle}`}</title>
        <meta name="viewport" content="width=1600" />
        <meta name="viewport" content="width=device-width, user-scalable=yes" />
        {headMeta && headMeta.map((el) => <meta name={el.name} content={el.content} property={el.property} />)}
      </Head>
      <IntlProvider locale={lang as string} defaultLocale="en" messages={getLocaleMessages(lang as string)}>
        <ComponentHostContext.Provider value={host}>
          {children}
          {isContactUsFormShown ? <ContactUsFormController onDismiss={() => setContactUsFormShown(false)} /> : null}
        </ComponentHostContext.Provider>
      </IntlProvider>
    </>
  );
};
