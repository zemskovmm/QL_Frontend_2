import React from "react";
import { Route } from "mobx-state-router";
import { convertRoutes } from "./route";
import { IndexPage } from "src/pages/indexPage";
import { PageEditorPage } from "src/pages/page/pageEditorPage";
import { PageListPage } from "src/pages/page/pageListPage";
import { PageTraitEditorPage } from "../pages/page/pageTraitEditPage";
import { FilesPage } from "src/pages/files/filesPage";
import { TraitListPage } from "../pages/trait/traitListPage";
import { TraitPage } from "../pages/trait/traitPage";
import { TraitItemPage } from "../pages/trait/traitItemPage";
import { UniversityListPage } from "../pages/university/universityListPage";
import { UniversityPage } from "../pages/university/universityPage";
import { UniversityCreatePage } from "../pages/university/universityCreatePage";
import { UniversityTraitEditorPage } from "../pages/university/universityTraitEditPage";
import { CreateSchoolPage, SchoolListPage, SchoolPage, SchoolTraitEditorPage } from "../pages/school/page";
import { CourseCreatePage, CourseEditPage, CourseListPage, CourseTraitEditorPage } from "../pages/course/page";

export enum RouteNames {
  notFound = "not-found",
  index = "index",
  pageList = "pageList",
  editPage = "editPage",
  newPage = "newPage",
  pageTraitEditPage = "pageTraitEditPage",

  fileList = "fileList",

  traitList = "traitList",
  traitPage = "traitPage",
  traitItemPage = "traitItemPage",

  universityList = "universityList",
  universityPage = "universityPage",
  universityCreatePage = "universityCreatePage",
  universityTraitEditPage = "universityTraitEditPage",

  schoolList = "schoolList",
  schoolPage = "schoolPage",
  schoolCreate = "schoolCreate",
  schoolTraitEditor = "schoolTraitEditor",

  courseList = "courseList",
  coursePage = "coursePage",
  courseCreate = "courseCreate",
  courseTraitEditor = "courseTraitEditor",
}

export const RouteViewMap = {
  [RouteNames.notFound]: <div>404 - not found</div>,
  [RouteNames.index]: <IndexPage />,
  [RouteNames.newPage]: <PageEditorPage />,
  [RouteNames.editPage]: <PageEditorPage />,
  [RouteNames.pageList]: <PageListPage />,
  [RouteNames.pageTraitEditPage]: <PageTraitEditorPage />,

  [RouteNames.fileList]: <FilesPage />,

  [RouteNames.traitList]: <TraitListPage />,
  [RouteNames.traitPage]: <TraitPage />,
  [RouteNames.traitItemPage]: <TraitItemPage />,

  [RouteNames.universityList]: <UniversityListPage />,
  [RouteNames.universityPage]: <UniversityPage />,
  [RouteNames.universityCreatePage]: <UniversityCreatePage />,
  [RouteNames.universityTraitEditPage]: <UniversityTraitEditorPage />,

  [RouteNames.schoolList]: <SchoolListPage />,
  [RouteNames.schoolPage]: <SchoolPage />,
  [RouteNames.schoolCreate]: <CreateSchoolPage />,
  [RouteNames.schoolTraitEditor]: <SchoolTraitEditorPage />,

  [RouteNames.courseCreate]: <CourseCreatePage />,
  [RouteNames.coursePage]: <CourseEditPage />,
  [RouteNames.courseList]: <CourseListPage />,
  [RouteNames.courseTraitEditor]: <CourseTraitEditorPage />,
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
    pattern: "/pages/:id/traits",
    name: RouteNames.pageTraitEditPage,
    onEnter: async (root, to) => await root.pageTraitEditPage.loadStore(Number(to.params.id)),
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
    onEnter: (root, to) => root.universityTraitEditPage.loadStore(Number(to.params.id)),
  },

  {
    pattern: "/school",
    name: RouteNames.schoolList,
    onEnter: (root, to) => root.schoolListPage.load(),
  },
  {
    pattern: "/school/create",
    name: RouteNames.schoolCreate,
    onEnter: (root) => root.schoolPageCreate.load(),
  },
  {
    pattern: "/school/:id",
    name: RouteNames.schoolPage,
    onEnter: async (root, to) => {
      await root.schoolPage.loadById(Number(to.params.id));
    },
  },
  {
    pattern: "/school/:id/traits",
    name: RouteNames.schoolTraitEditor,
    onEnter: async (root, to) => await root.schoolTraitEditor.loadStore(Number(to.params.id)),
  },
  {
    pattern: "/course",
    name: RouteNames.courseList,
    onEnter: (root, to) => root.courseListPage.load(),
  },
  {
    pattern: "/course/create",
    name: RouteNames.courseCreate,
    onEnter: (root) => root.courseCreate.load(),
  },
  {
    pattern: "/course/:id",
    name: RouteNames.coursePage,
    onEnter: async (root, to) => {
      await root.courseEdit.loadById(Number(to.params.id));
    },
  },
  {
    pattern: "/course/:id/traits",
    name: RouteNames.courseTraitEditor,
    onEnter: async (root, to) => await root.courseTraitEditor.loadStore(Number(to.params.id)),
  },
]);
