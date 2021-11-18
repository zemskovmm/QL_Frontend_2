import { useForm } from "react-hook-form";
import { FunctionalComponent } from "preact";
import { Link, route } from "preact-router";
import { InputControlled } from "@project/components/src/form/InputControlled";
import { useSignInStore } from "./_store";
import { useEffect } from "react";
import { Button } from "@project/components/src/ui-kit/Button";
import { SchemaOf, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CenterCardLayout } from "layouts/CenterCardLayout";
import { UserStatuseLoginProps } from "stores/UserStatuseStore";
import {
  CREATE_APPLICATIONS_TEMPLATE,
  SIGN_UP_REDIRECT_CREATE_APPLICATIONS_TEMPLATE,
  useRouterStore,
} from "stores/RouterStore";
import { useLocalesStore } from "stores/LocalesStore";

const schema: SchemaOf<UserStatuseLoginProps> = object({
  email: string().required("Required to fill"),
  password: string().required("Required to fill"),
});

type PropsType = {
  applicationType?: string;
  entityId?: string;
};

export const SignInPage: FunctionalComponent<PropsType> = ({ applicationType, entityId }) => {
  const { handleSubmit, control } = useForm<UserStatuseLoginProps>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { isLoading, isSuccess, loginAction } = useSignInStore();
  const { lang } = useLocalesStore();
  const { PROFILE_PATH, SIGN_UP_PATH } = useRouterStore();

  const signUpPath = applicationType
    ? SIGN_UP_REDIRECT_CREATE_APPLICATIONS_TEMPLATE.getRoute({ lang, params: [applicationType, entityId || "0"] })
    : SIGN_UP_PATH;

  useEffect(() => {
    const successPath = applicationType
      ? CREATE_APPLICATIONS_TEMPLATE.getRoute({ lang, params: [applicationType, entityId || "0"] })
      : PROFILE_PATH;
    isSuccess && route(successPath);
  }, [isSuccess, applicationType, entityId]);

  return (
    <CenterCardLayout title="Вход в личный кабинет" subtitle="Войдите или создайте аккаунт">
      <form className="flex flex-col px-28 w-full" onSubmit={handleSubmit(loginAction) as any}>
        <InputControlled
          className="mb-4"
          name="email"
          label="Адрес электронной почты"
          placeholder="Ваша электронная почта"
          control={control}
          type="email"
          sign={true}
        />
        <InputControlled
          className="mb-8"
          name="password"
          label="Пароль"
          placeholder="Ваш пароль"
          control={control}
          type="password"
          sign={true}
        />
        <Button className="mb-4" text="Войти" type="submit" disabled={isLoading} color={`red`} />
        <Link href={signUpPath}>
          <Button text="Зарегистрироваться" color="gray" isFullWidth />
        </Link>
      </form>
    </CenterCardLayout>
  );
};
