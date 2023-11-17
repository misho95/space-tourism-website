import { useState, useEffect } from "react";
import ContentPageContainer from "../components/shared/content.page.containter";
import json from "../data.json";
import TechContent from "../components/tech/tech.content";

export interface TechDataType {
  id: number;
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

const TechPage = () => {
  const [active, setActive] = useState<number>(0);
  const [data, setData] = useState<TechDataType | undefined>();

  useEffect(() => {
    const findDestination = json.technology.find((d) => {
      if (d.id === active) return d;
    });

    setData(findDestination);
  }, [active]);

  return (
    <ContentPageContainer>
      <TechContent data={data} active={active} setActive={setActive} />
    </ContentPageContainer>
  );
};

export default TechPage;
