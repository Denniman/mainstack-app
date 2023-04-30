import { Container, ListItems } from "./SourceData.style";
import { ITopSources } from "../../models";
import { Icon } from "../../assets/Icon";
import { IconType } from "../../assets/Icon";

export const SourceData = ({ source, percent }: ITopSources) => {
  return (
    <Container>
      <ListItems source={source}>
        <div>
          <Icon name={source as IconType} />
        </div>
        <p>{source}</p>
        <p>{`${percent}%`}</p>
      </ListItems>
    </Container>
  );
};
