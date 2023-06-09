import { useEffect, useState } from "react";
import moment from "moment";
import {
  Pie,
  XAxis,
  Area,
  Cell,
  YAxis,
  Tooltip,
  PieChart,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { IData } from "../../models";
import { Icon } from "../../assets/Icon";
import { Sidebar, DataList, SourceData } from "../../components";

import {
  Main,
  Title,
  SubTitle,
  Container,
  GraphHeader,
  TitleCount,
  GraphTitle,
  FilterButton,
  ContentTitle,
  ViewAnalytics,
  DoughnutItems,
  ErrorMessage,
  GraphSubTitle,
  GraphContainer,
  DoughnutHeader,
  FilterContainer,
  DashboardHeader,
  DoughnutContainer,
  DashboardContent,
} from "./dashboard.styles";

const cellColors = {
  Nigeria: "#599EEA",
  Germany: "#844FF6",
  Ghana: "#0FB77A",
  Finland: "#FAB70A",
  "United Kingdom": "#F09468",
};

const filter = ["1 Day", "3 Days", "30 Days", "All Time", "Custom Date"];
export const Dashboard = () => {
  const [data, setData] = useState<IData>();
  const [isLoading, setIsLoading] = useState(true);
  const [filterBy, setFilterBy] = useState(filter[3]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://fe-task-api.mainstack.io/");
        const data = await response.json();
        setData(data);
      } catch (err) {
        const error = err as Error;
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const showData = !isLoading && !error;
  const showError = !isLoading && error;

  const topSources = data?.top_sources.map(({ source, percent }) => {
    return {
      name: source,
      value: percent,
    };
  });

  const topLocations = data?.top_locations.map(({ country, percent }) => {
    const colorType = country as keyof typeof cellColors;
    return {
      name: country,
      value: percent,
      color: cellColors[colorType],
    };
  });

  const graphViews = Object.entries(Object(data?.graph_data.views)).map(
    ([key, value]) => {
      return {
        name: moment(key).format("D MMM"),
        uv: value,
        pv: value,
        amt: value,
      };
    }
  );

  return (
    <Container>
      <Sidebar className="nav" />
      <Main>
        <Title>Dashboard</Title>
        <DashboardHeader>
          <Title>Good morning, Blessing ⛅️</Title>
          <ViewAnalytics>View analytics</ViewAnalytics>
          <SubTitle>Check out your dashboard summary.</SubTitle>
        </DashboardHeader>
        <FilterContainer>
          {filter.map((item, index) => (
            <FilterButton
              key={item}
              isSelected={item === filterBy}
              onClick={() => setFilterBy(filter[index])}
            >
              {item}
            </FilterButton>
          ))}
        </FilterContainer>

        <DashboardContent>
          <GraphContainer>
            <GraphHeader>
              <GraphTitle>Page Views</GraphTitle>
              <Icon name="Info" />
            </GraphHeader>
            <GraphSubTitle>All time</GraphSubTitle>
            <TitleCount>500</TitleCount>
            <div className="graph">
              <ResponsiveContainer width={"98%"} height={250}>
                <AreaChart
                  width={500}
                  height={200}
                  data={graphViews}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="2 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#FF5403"
                    fill="#FF5403"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GraphContainer>
          <DoughnutContainer>
            <DoughnutItems>
              <DoughnutHeader>
                <ContentTitle>Top Locations</ContentTitle>
                <ViewAnalytics>View full reports</ViewAnalytics>
              </DoughnutHeader>
              <div className="list-items">
                <div className="data-wrapper">
                  {isLoading && (
                    <div className="message-container">
                      <p>Loading...</p>
                    </div>
                  )}
                  {showError && (
                    <div className="message-container">
                      <ErrorMessage>Error: {error.message}</ErrorMessage>
                    </div>
                  )}
                  {showData &&
                    data?.top_locations.map((items) => (
                      <DataList {...items} key={items.country} />
                    ))}
                </div>

                <ResponsiveContainer width={"70%"} height={250}>
                  <PieChart>
                    <Pie
                      data={topLocations}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#844FF6"
                    >
                      {topLocations?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </DoughnutItems>
            <DoughnutItems>
              <DoughnutHeader>
                <ContentTitle>Top Referral source</ContentTitle>
                <ViewAnalytics>View full reports</ViewAnalytics>
              </DoughnutHeader>
              <div className="list-items">
                <div className="data-wrapper">
                  {isLoading && (
                    <div className="message-container">
                      <p>Loading...</p>
                    </div>
                  )}
                  {showError && (
                    <div className="message-container">
                      <ErrorMessage>Error: {error.message}</ErrorMessage>
                    </div>
                  )}
                  {showData &&
                    data?.top_sources.map((items) => (
                      <SourceData {...items} key={items.source} />
                    ))}
                </div>
                <ResponsiveContainer width={"70%"} height={250}>
                  <PieChart>
                    <Pie
                      data={topSources}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#599EEA"
                    >
                      {topLocations?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </DoughnutItems>
          </DoughnutContainer>
        </DashboardContent>
      </Main>
    </Container>
  );
};
