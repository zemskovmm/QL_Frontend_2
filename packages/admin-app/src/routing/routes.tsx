import React from "react";
import { Route } from "mobx-state-router";
import { convertRoutes } from "./route";
import { IndexPage } from "src/pages/indexPage";
import { PageEditorPage } from "src/pages/pageEditorPage";
import { PageListPage } from "src/pages/pageListPage";
import { FilesPage } from "src/pages/filesPage";
import { TraitListPage } from "../pages/trait/traitListPage";
import { TraitPage } from "../pages/trait/traitPage";
import { TraitItemPage } from "../pages/trait/traitItemPage";
import { UniversityListPage } from "../pages/university/universityListPage";
import { UniversityPage } from "../pages/university/universityPage";
import { UniversityCreatePage } from "../pages/university/universityCreatePage";
import { UniversityTraitEditPage } from "../pages/university/universityTraitEditPage";

export enum RouteNames {
  notFound = "not-found",
  index = "index",
  pageList = "pageList",
  editPage = "editPage",
  newPage = "newPage",
  fileList = "fileList",
  traitList = "traitList",
  traitPage = "traitPage",
  traitItemPage = "traitItemPage",
  universityList = "universityList",
  universityPage = "universityPage",
  universityCreatePage = "universityCreatePage",
  universityTraitEditPage = "universityTraitEditPage",
}

export const RouteViewMap = {
  [RouteNames.notFound]: <div>404 - not found</div>,
  [RouteNames.index]: <IndexPage />,
  [RouteNames.newPage]: <PageEditorPage />,
  [RouteNames.editPage]: <PageEditorPage />,
  [RouteNames.pageList]: <PageListPage />,
  [RouteNames.fileList]: <FilesPage />,
  [RouteNames.traitList]: <TraitListPage />,
  [RouteNames.traitPage]: <TraitPage />,
  [RouteNames.traitItemPage]: <TraitItemPage />,
  [RouteNames.universityList]: <UniversityListPage />,
  [RouteNames.universityPage]: <UniversityPage />,
  [RouteNames.universityCreatePage]: <UniversityCreatePage />,
  [RouteNames.universityTraitEditPage]: <UniversityTraitEditPage />,
};

export const Routes: Route[] = convertRoutes([
  {
    pattern: "/not-found",
    name: RouteNames.notFound,
  },
  {
    pattern: "/",
    name: RouteNames.index,
  },
  {
    pattern: "/pages",
    name: RouteNames.pageList,
  },
  {
    pattern: "/pages/new",
    name: RouteNames.newPage,
    onEnter: (root) => root.pageEditorPage.load(),
  },
  {
    pattern: "/pages/:id",
    name: RouteNames.editPage,
    onEnter: (root, to) => root.pageEditorPage.load(parseInt(to.params["id"])),
  },
  {
    pattern: "/files",
    name: RouteNames.fileList,
  },
  {
    pattern: "/traits",
    name: RouteNames.traitList,
    onEnter: (root) => root.traitListPage.load(),
  },
  {
    pattern: "/traits/:id",
    name: RouteNames.traitPage,
    onEnter: (root, to) => root.traitPage.load(to.params.id),
  },
  {
    pattern: "/traits/item/:id",
    name: RouteNames.traitItemPage,
    onEnter: (root, to) => root.traitItemPage.load(to.params.id),
  },
  {
    pattern: "/universities",
    name: RouteNames.universityList,
    onEnter: (root) => root.universityListPage.load(),
  },
  {
    pattern: "/universities/create",
    name: RouteNames.universityCreatePage,
  },
  {
    pattern: "/universities/:id",
    name: RouteNames.universityPage,
    onEnter: (root, to) => root.universityPage.load(to.params.id),
  },
  {
    pattern: "/universities/:id/trait",
    name: RouteNames.universityTraitEditPage,
    onEnter: (root, to) => root.universityTraitEditPage.load(to.params.id),
  },
]);
