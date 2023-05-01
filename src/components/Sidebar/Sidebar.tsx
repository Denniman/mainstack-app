import { Icon } from "../../assets/Icon";
import {
  Title,
  NavList,
  Avatar,
  Container,
  NavBottom,
  LinkWrapper,
  DividerTitle,
} from "./Sidebar.styles";

import { IconType } from "../../assets/Icon";
import { SideBarProps } from "./Sidebar.interface";

export const Sidebar: React.FC<SideBarProps> = ({ className, routes }) => {
  return (
    <Container className={className}>
      <div className="logo-container">
        <Icon name="mainstackLogo" size={50} />
      </div>
      <LinkWrapper>
        {routes?.slice(0, 4).map(({ icon, path, title }) => (
          <NavList key={title} isActive={path === "/dashboard"}>
            <div>
              <Icon name={icon as IconType} />
            </div>
            <li>{title}</li>
          </NavList>
        ))}
        <DividerTitle>OTHERS 1</DividerTitle>

        {routes?.slice(4, 6).map(({ icon, path, title }) => (
          <NavList key={title} isActive={path === "/dashboard"}>
            <div>
              <Icon name={icon as IconType} />
            </div>
            <li>{title}</li>
          </NavList>
        ))}

        <DividerTitle>OTHER 2</DividerTitle>

        {routes?.slice(6).map(({ icon, path, title }) => (
          <NavList key={title} isActive={path === "/dashboard"}>
            <div>
              <Icon name={icon as IconType} />
            </div>
            <li>{title}</li>
          </NavList>
        ))}
      </LinkWrapper>
      <NavBottom>
        <Avatar src="https://randomuser.me/api/portraits/women/25.jpg" />
        <Title>Blessing Daniels</Title>
        <div className="icon-wrapper ">
          <Icon name="More" />
        </div>
      </NavBottom>
    </Container>
  );
};

Sidebar.defaultProps = {
  routes: [
    {
      icon: "Dashboard",
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: "Edit",
      title: "Items 1",
      path: "/items 1",
    },
    {
      icon: "Group",
      title: "Items 2",
      path: "/items 2",
    },
    {
      icon: "Hourglass",
      title: "Items 3",
      path: "/items 3",
    },
    {
      icon: "AddPhoto",
      title: "Item 4",
      path: "/Item 4",
    },
    {
      icon: "Delete",
      title: "Item 5",
      path: "/Item 5",
    },
    {
      icon: "Subscription",
      title: "Item 6",
      path: "/Item 6",
    },
    {
      icon: "FilePresent",
      title: "Item 7",
      path: "/Item 7",
    },
    {
      icon: "Alarm",
      title: "Item 8",
      path: "/Item 8",
    },
  ],
};
