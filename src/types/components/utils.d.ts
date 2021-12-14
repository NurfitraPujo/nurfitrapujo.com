import { ReactNode } from "react";

declare type WithChildren<T = {}> = T & {
  children?: ReactNode;
};
