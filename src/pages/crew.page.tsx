import { useState, useEffect } from "react";
import ContentPageContainer from "../components/shared/content.page.containter";
import json from "../data.json";
import CrewContent from "../components/crew/crew.content";

export interface CrewDataType {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const DesPage = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState<CrewDataType | undefined>();

  useEffect(() => {
    const findDestination = json.crew.find((d) => {
      if (d.id === active) return d;
    });

    setData(findDestination);
  }, [active]);

  return (
    <ContentPageContainer>
      <CrewContent data={data} active={active} setActive={setActive} />
    </ContentPageContainer>
  );
};

export default DesPage;
