export interface ITopLocations {
  country: string;
  count: number;
  percent: number;
}

export type ITopSources = Omit<ITopLocations, "country"> & {
  source: string;
};

export type IData = {
  graph_data: {
    views: object;
  };
  top_sources: ITopSources[];
  top_locations: ITopLocations[];
};
