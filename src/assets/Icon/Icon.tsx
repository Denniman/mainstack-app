/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconProps } from "./Icon.interface";

import Edit from "./assets/edit";
import Alarm from "./assets/alarm";
import More from "./assets/more";
import Info from "./assets/info";
import Group from "./assets/group";
import Google from "./assets/google";
import Delete from "./assets/delete";
import Nigeria from "./assets/nigeria";
import Twitter from "./assets/twitter";
import Instagram from "./assets/instagram";
import Linkdedin from "./assets/linkdedin";
import Facebook from "./assets/facebook";
import AddPhoto from "./assets/add-photo";
import Hourglass from "./assets/hourglass";
import Dashboard from "./assets/dashboard";
import FilePresent from "./assets/file-present";
import Subscription from "./assets/subscription";
import mainstackLogo from "./assets/mainstack-logo";

const iconMap = {
  Edit,
  Group,
  Info,
  More,
  Alarm,
  Delete,
  AddPhoto,
  Hourglass,
  Dashboard,
  FilePresent,
  Subscription,
  mainstackLogo,
  google: Google,
  nigeria: Nigeria,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkdedin,
  instagram: Instagram,
};

export type IconType = keyof typeof iconMap;

const resolver: Record<string, any> = {};

// eslint-disable-next-line react-refresh/only-export-components
export const iconNameList = Object.keys(iconMap) as IconType[];

export const Icon = ({
  name,
  size,
  ...props
}: IconProps & { name: IconType }) => {
  const style = size
    ? { height: size, width: size, viewBox: `0 0 ${size * 1.2} ${size * 1.2}` }
    : {};

  for (const [key, icon] of Object.entries(iconMap)) {
    // const icon = value as React.FunctionComponent<SvgProps & { name: IconType }>;
    resolver[key] = icon({ size, ...props, ...style });
  }

  return resolver[name];
};
