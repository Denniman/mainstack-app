import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "nav main"
    "nav  main"
    "nav  main";
  grid-template-rows: 5rem 1fr;
  grid-template-columns: 30.4rem 1fr;

  .nav {
    grid-area: nav;
    background-color: ${({ theme }) => theme.colors.WHITE_COLOR};
  }
`;

export const Main = styled.main`
  grid-area: main;
  padding: 2rem 6rem;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.BLACK_COLOR};
`;

export const TitleCount = styled.p`
  font-size: 3rem;
  margin-top: 1.7rem;
  margin-left: 3rem;
  font-family: ${({ theme }) => theme.fonts.Söhne};
`;

export const DashboardHeader = styled.header`
  margin-top: 4.6rem;
`;

export const SubTitle = styled.p`
  font-size: 1.4rem;
`;

export const GraphSubTitle = styled(SubTitle)`
  margin-top: 1.7rem;
  margin-left: 3rem;
`;

export const FilterContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
`;

export const FilterButton = styled.button<{ isSelected: boolean }>`
  width: 12rem;
  font-size: 1.4rem;
  padding: 0.7rem 1.3rem;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.ORANGE_COLOR : theme.colors.BLACK_COLOR};
  border-radius: 40px;
  border: 1.5px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.ORANGE_COLOR : theme.colors.BORDER_GRAY};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? "#ffddcc" : theme.colors.WHITE_COLOR};
`;

export const ViewAnalytics = styled.div`
  display: flex;
  font-size: 1.4rem;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.ORANGE_COLOR};
`;

export const DashboardContent = styled.div`
  margin-top: 5rem;
`;

export const GraphContainer = styled.div`
  height: 45rem;
  width: 100%;
  font-size: 1.4rem;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};

  .graph {
    width: 100%;
  }
`;

export const GraphHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 1.7rem;
  justify-content: space-between;
`;

export const DoughnutContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  align-items: center;
  margin-top: 2.4rem;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.EXTRA_LARGE_VIEWPORT}) {
    flex-direction: row;
  }
`;

export const DoughnutItems = styled.div`
  height: 30rem;
  padding: 2.4rem;
  flex-basis: 100%;
  font-size: 1.7rem;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};

  .list-items {
    gap: 1rem;
    display: flex;
    margin-top: 1rem;
    align-items: center;
  }

  .data-wrapper {
    display: flex;
    flex-direction: column;
  }

  .message-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DoughnutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 1.2rem;
  color: ${({ theme }) => theme.colors.BLACK_COLOR};
`;

export const ErrorMessage = styled.p`
  color: red;
`;
