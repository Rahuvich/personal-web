export enum Sort {
  RELEVANCE = "RELEVANCE",
  DATE_ASC = "DATE ASC",
  DATE_DESC = "DATE DESC",
}

export interface ReposResponse {
  projects: Project[];
  stats: Statistics;
}

export interface Statistics {
  lately: Language[];
  ever: [number, Language][];
}
export interface Project {
  id: string;
  name: string;
  descriptionHTML: string;
  createdAt: string;
  url: string;
  isPrivate: boolean;
  stargazers: number;
  languages: Language[];
  readme: string;
  mabe: Mabe;
}
export interface Language {
  color: string;
  name: string;
}
export interface Mabe {
  title: string;
  version: string;
  url?: string;
  tag_tools: string[];
  platforms: string[];
  private: boolean;

  link?: string;
  link_text?: string;

  assets: string[];
  assets_is_vertical?: boolean[];
  assets_is_image?: boolean[];
  assets_platform: string[];
}

export interface WebState {
  projects: Project[];
  sort: Sort;
  stats?: Statistics;
  isLoading: boolean;
  error: boolean;

  filteringByTags: boolean;
  tagsSelected: string[];

  darkMode: boolean;
}

// Projects Actions
export const GET_PROJECTS = "GET_PROJECTS";
interface GetProjectsAction {
  type: typeof GET_PROJECTS;
}

export const GOT_PROJECTS = "GOT_PROJECTS";
interface GotProjectsAction {
  type: typeof GOT_PROJECTS;
  projects: Project[];
  stats: Statistics;
}

export const FAILED_ON_GETTING_PROJECTS = "FAILED_ON_GETTING_PROJECTS";
interface FailedOnGettingProjectsAction {
  type: typeof FAILED_ON_GETTING_PROJECTS;
}

// Sort Actions
export const CHANGE_SORT = "CHANGE_SORT";
interface ChangeSort {
  type: typeof CHANGE_SORT;
  sort: Sort;
}

export type ProjectsActionTypes =
  | GetProjectsAction
  | GotProjectsAction
  | FailedOnGettingProjectsAction
  | ChangeSort;

// Tag Actions
export const ADD_TAG = "ADD_TAG";
interface AddTag {
  type: typeof ADD_TAG;
  tag: string;
}

export const REMOVE_TAG = "REMOVE_TAG";
interface RemoveTag {
  type: typeof REMOVE_TAG;
  tag: string;
}

export const REMOVE_FILTERING = "REMOVE_FILTERING";
interface RemoveFiltering {
  type: typeof REMOVE_FILTERING;
}

export type TagsActionTypes = AddTag | RemoveTag | RemoveFiltering;

// Dark/Light Theme
export const CHANGE_THEME = "CHANGE_THEME";
interface ChangeTheme {
  type: typeof CHANGE_THEME;
  darkTheme: boolean;
}

export type AppActionTypes = ChangeTheme;

export type ActionTypes =
  | TagsActionTypes
  | ProjectsActionTypes
  | AppActionTypes;
