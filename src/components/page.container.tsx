import { ReactNode, useRef } from "react";
import { useEffect, useState } from "react";
import { bgImagesType } from "../bgimages";
import { useLocation } from "react-router-dom";

interface PropsType {
  children: ReactNode;
  imgs: bgImagesType;
}

const PageContainer = ({ children, imgs }: PropsType) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindwoHeight] = useState(window.innerHeight);
  const [wide, setWide] = useState(false);
  const page = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Function to update the window width
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setWindwoHeight(window.innerHeight);
    }

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const chooseBackgroundImage = () => {
    const width = windowWidth;

    if (width >= 1024) {
      return imgs.bgDesktop;
    } else if (width >= 768) {
      return imgs.bgTablet;
    } else {
      return imgs.bgMobile;
    }
  };

  useEffect(() => {
    setBackgroundImage(chooseBackgroundImage());
    if (windowWidth > windowHeight * 2) {
      setWide(true);
    } else {
      setWide(false);
    }
  }, [windowWidth, windowHeight, location.pathname]);

  return (
    <div
      ref={page}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`w-full ${
        wide ? "min-h-screen" : "h-screen"
      } lg:h-screen bg-center bg-no-repeat bg-cover lg:pt-[40px] md:pl-[55px] lg:pb-0`}
    >
      <div className="w-full h-full flex flex-col gap-6 items-center justify-start">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
