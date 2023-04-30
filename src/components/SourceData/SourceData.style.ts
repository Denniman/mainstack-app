import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-size: 1.6rem;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.BLACK_COLOR};

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  p {
    text-transform: capitalize;
  }
`;

export const ListItems = styled.div<{ source: string }>`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  &::after {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme, source }) => {
      switch (source) {
        case "google":
          return theme.colors.SKYBLUE_COLOR;

        case "instagram":
          return theme.colors.PUPPLE_COLOR;

        case "facebook":
          return theme.colors.GREEN_COLOR;

        case "linkedin":
          return theme.colors.ANDORA_ORANGE_COLOR;

        default:
          return theme.colors.OTHERS_ORANGE_COLOR;
      }
    }};
  }
`;
