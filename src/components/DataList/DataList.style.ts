import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-size: 1.6rem;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.BLACK_COLOR};

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const ListItems = styled.div<{ country: string }>`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  &::after {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme, country }) => {
      switch (country) {
        case "Nigeria":
          return theme.colors.SKYBLUE_COLOR;

        case "Germany":
          return theme.colors.PUPPLE_COLOR;

        case "Ghana":
          return theme.colors.GREEN_COLOR;

        case "Finland":
          return theme.colors.ANDORA_ORANGE_COLOR;

        default:
          return theme.colors.OTHERS_ORANGE_COLOR;
      }
    }};
  }
`;
