import { useState, useEffect } from "react";
import ContentPageContainer from "../components/shared/content.page.containter";
import json from "../data.json";
import DesContent from "../components/des/des.content";

export interface DataType {
  id: number;
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const DesPage = () => {
  const [active, setActive] = useState<number>(0);
  const [data, setData] = useState<DataType | undefined>();

  useEffect(() => {
    const findDestination = json.destinations.find((d) => {
      if (d.id === active) return d;
    });

    setData(findDestination);
  }, [active]);

  return (
    <ContentPageContainer>
      <DesContent data={data} active={active} setActive={setActive} />
    </ContentPageContainer>
  );
};

export default DesPage;
