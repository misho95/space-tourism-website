import bgDesktop from "../assets/home/background-home-desktop.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgMobile from "../assets/home/background-home-mobile.jpg";

const PageContainer = ({ children }) => {
  const getWindowWidth = () => window.innerWidth;

  const chooseBackgroundImage = () => {
    const width = getWindowWidth();

    if (width >= 1024) {
      return bgDesktop;
    } else if (width >= 768) {
      return bgTablet;
    } else {
      return bgMobile;
    }
  };

  const backgroundImage = chooseBackgroundImage();

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-full min-h-screen bg-center bg-no-repeat bg-cover pt-[40px] pl-[55px] flex flex-col"
    >
      {children}
    </div>
  );
};

export default PageContainer;
