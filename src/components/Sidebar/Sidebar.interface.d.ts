import { IconType } from "../../assets/Icon";

type Route = {
  path: string;
  title: string;
  icon: keyof Pick<
    IconType,
    "Edit" | "Group" | "Delete" | "AddPhoto" | "Dashboard",
    "FilePresent" | "Subscription" | "mainstackLogo"
  >;
};

export type SideBarProps = {
  className: string;
  routes?: Route[];
} & React.HTMLAttributes<HTMLDivElement>;
