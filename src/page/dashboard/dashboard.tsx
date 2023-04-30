import { useEffect, useState } from "react";
import {
  Pie,
  XAxis,
  Area,
  YAxis,
  Tooltip,
  PieChart,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

import { IData } from "../../models";
import { Icon } from "../../assets/Icon";
import { Sidebar, DataList, SourceData } from "../../components";
import { GraphHeader } from "../../components/Sidebar/Sidebar.styles";

import {
  Main,
  Title,
  SubTitle,
  Container,
  TitleCount,
  ContentTitle,
  ViewAnalytics,
  DoughnutItems,
  GraphContainer,
  DoughnutHeader,
  DashboardHeader,
  DoughnutContainer,
  DashboardContent,
} from "./dashboard.styles";

// const colors = {
//   facebook: "#0FB77A",
//   instagram: "#844FF6",
//   google: "#599EEA",
//   linkedin: "#FAB70A",
// };

export const Dashboard = () => {
  const [data, setData] = useState<IData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fe-task-api.mainstack.io/");
        const data = await response.json();
        setData(data);
      } catch (err) {
        const error = err as Error;
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const showData = !loading && !error;

  const topSources = data?.top_sources.map(({ source, percent }) => {
    return {
      name: source,
      value: percent,
    };
  });

  const topLocations = data?.top_locations.map(({ country, percent }) => {
    return {
      name: country,
      value: percent,
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

        <DashboardContent>
          <GraphContainer>
            <GraphHeader>
              <ContentTitle>Page Views</ContentTitle>
              <Icon name="Info" />
            </GraphHeader>
            <SubTitle>All time</SubTitle>
            <TitleCount>500</TitleCount>
            <div className="graph">
              <ResponsiveContainer width={"100%"} height={250}>
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
                  {loading && <p>Loading...</p>}
                  {showData &&
                    data?.top_locations.map((items) => (
                      <DataList {...items} key={items.country} />
                    ))}
                </div>

                <div className="piechart-wrapper">
                  <PieChart width={400} height={250}>
                    <Pie
                      data={topLocations}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#844FF6"
                    />
                  </PieChart>
                </div>
              </div>
            </DoughnutItems>
            <DoughnutItems>
              <DoughnutHeader>
                <ContentTitle>Top Referral source</ContentTitle>
                <ViewAnalytics>View full reports</ViewAnalytics>
              </DoughnutHeader>
              <div className="list-items">
                <div className="data-wrapper">
                  {loading && <p>Loading...</p>}
                  {showData &&
                    data?.top_sources.map((items) => (
                      <SourceData {...items} key={items.source} />
                    ))}
                </div>
                <div className="piechart-wrapper">
                  <PieChart width={400} height={250}>
                    <Pie
                      data={topSources}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#599EEA"
                    />
                  </PieChart>
                </div>
              </div>
            </DoughnutItems>
          </DoughnutContainer>
        </DashboardContent>
      </Main>
    </Container>
  );
};
