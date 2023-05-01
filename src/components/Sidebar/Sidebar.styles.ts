import styled from "styled-components";

export const Container = styled.aside<{ isActive?: boolean }>`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.GRAY_TEXT_COLOR};
  border-right: 1.5px solid ${({ theme }) => theme.colors.BORDER_GRAY};

  .logo-container {
    margin-top: 2rem;
    margin-left: 7.5rem;
  }
`;

export const LinkWrapper = styled.div`
  gap: 2.4rem;
  display: flex;
  flex-direction: column;
`;

export const NavList = styled.ul<{ isActive?: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  li {
    font-size: 1.6rem;
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.ORANGE_COLOR : theme.colors.GRAY_TEXT_COLOR};
  }

  &::before {
    content: "";
    width: 2px;
    height: 26px;
    margin-right: 6.1rem;
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.ORANGE_COLOR : theme.colors.TRANSPARENT_COLOR};
  }
`;

export const DividerTitle = styled.p`
  font-size: 1.2rem;
  margin-left: 7.3rem;
`;

export const NavBottom = styled.div`
  display: flex;
  margin-top: 10rem;
  margin-left: 7.5rem;
  align-items: center;
  .icon-wrapper {
    margin-left: 4rem;
  }
`;

export const Avatar = styled.img`
  height: 3.2rem;
  width: 3.2rem;
  margin-right: 1rem;
  border-radius: 50%;
`;
export const Title = styled.p`
  font-size: 1.5rem;
`;
