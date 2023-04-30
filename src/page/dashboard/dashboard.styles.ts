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
  font-family: ${({ theme }) => theme.fonts.Söhne};
`;

export const DashboardHeader = styled.header`
  margin-top: 4.6rem;
`;

export const SubTitle = styled.p`
  font-size: 1.4rem;
  margin-top: 1.5rem;
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
  padding: 2.4rem;
  font-size: 1.4rem;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};

  .graph {
    width: 100%;
  }
`;

export const DoughnutContainer = styled.div`
  margin-top: 2.4rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.EXTRA_LARGE_VIEWPORT}) {
    flex-direction: row;
  }

  > * {
    flex-basis: 100%;
  }
`;

export const DoughnutItems = styled.div`
  width: 100%;
  height: 35rem;
  padding: 2.4rem;
  font-size: 1.7rem;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};

  .list-items {
    gap: 1rem;
    display: flex;
    margin-top: 1rem;
    align-items: center;

    > * {
      flex-basis: 100%;
    }
  }

  .data-wrapper {
    display: flex;
    flex-direction: column;
  }

  .recharts-wrapper {
    max-width: 30rem;
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
  color: ${({ theme }) => theme.colors.BLACK_COLOR};
`;
