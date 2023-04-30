import { Container, ListItems } from "./DataList.style";
import { ITopLocations } from "../../models";

export const DataList = ({ country, percent }: ITopLocations) => {
  return (
    <Container>
      <ListItems country={country}>
        <p>{country}</p>
        <p>{`${percent}%`}</p>
      </ListItems>
    </Container>
  );
};
