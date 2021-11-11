import { Text } from "@project/components/src/ui-kit/Text";
import { FunctionalComponent } from "preact";
import { useLocalesStore } from "stores/LocalesStore";
import { RowsPresenter } from "@project/components/src/blocks";
import { Button } from "@project/components/src/ui-kit/Button";
import { useContext, useEffect } from "preact/hooks";
import { ComponentHostDashboardContext } from "@project/components/src/FormBuilderBlocks/HostLayout";
import { useGlobalSettingsStore } from "stores/GlobalSettingsStore";
import {
  ApplicationPostProps,
  useApplicationStore,
} from "routes/MyApplicationsPage/_components/ApplicationTab/ApplicationStore";
import { useForm } from "react-hook-form";
import { Preload } from "@project/components/src/ui-kit/Preload";

type PropsType = {
  className?: string;
  applicationId: number;
};

export const ApplicationTab: FunctionalComponent<PropsType> = ({ className, applicationId }) => {
  const { APPLICATION_LANG } = useLocalesStore();
  const cl = useContext(ComponentHostDashboardContext);
  const store = useApplicationStore();
  const { application, postApplicationAction, isLoading: isLoadingStore } = store;
  const { isLoading: isLoadingGS, gs, getGlobalSettings } = useGlobalSettingsStore();
  const { lang } = useLocalesStore();
  const { handleSubmit, control, setValue } = useForm<ApplicationPostProps>();

  useEffect(() => {
    getGlobalSettings(lang);
  }, [lang, getGlobalSettings]);

  useEffect(() => {
    store.getApplication(applicationId);
  }, [applicationId]);

  cl!.personalInfo = application.commonApplicationInfo;

  useEffect(() => {
    setValue("type", application.type);
    setValue("entityId", application.entityId);
    setValue("commonApplicationInfo", cl?.personalInfo ?? {});
    setValue("entityTypeSpecificApplicationInfo", {});
  }, [store]);

  const classes = ["flex flex-col border gap-2 p-2", className ? className : ""].join(" ");

  return (
    <div className={classes}>
      <Preload isLoading={isLoadingStore || isLoadingGS} color="white">
        {/*<Text text={APPLICATION_LANG} size="title-medium" />*/}
        {gs?.personalCabinet[application.type.toString().toLowerCase()] ? (
          <form className="flex flex-col mx-0" onSubmit={handleSubmit(postApplicationAction) as any}>
            <RowsPresenter
              rows={gs?.personalCabinet[application.type.toString().toLowerCase()].form.pageData.rows ?? []}
            />
            <Button className="ml-auto my-2" text="Обновить" type="submit" disabled={isLoadingStore} />
          </form>
        ) : (
          "Form is not allowed"
        )}
      </Preload>
    </div>
  );
};
