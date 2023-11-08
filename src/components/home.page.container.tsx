import bgDesktop from "../assets/home/background-home-desktop.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgMobile from "../assets/home/background-home-mobile.jpg";
import { ReactNode } from "react";
import { useEffect, useState } from "react";

interface PropsType {
  children: ReactNode;
}

const HomePageContainer = ({ children }: PropsType) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the window width
    function handleResize() {
      setWindowWidth(window.innerWidth);
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
      return bgDesktop;
    } else if (width >= 768) {
      return bgTablet;
    } else {
      return bgMobile;
    }
  };

  useEffect(() => {
    setBackgroundImage(chooseBackgroundImage());
  }, [windowWidth]);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-full h-screen bg-center bg-no-repeat bg-cover lg:pt-[40px] md:pl-[55px]"
    >
      <div className="w-full h-full flex flex-col gap-6 items-center justify-start">
        {children}
      </div>
    </div>
  );
};

export default HomePageContainer;
