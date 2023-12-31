import bgDesktopHome from "./assets/home/background-home-desktop.jpg";
import bgTabletHome from "./assets/home/background-home-tablet.jpg";
import bgMobileHome from "./assets/home/background-home-mobile.jpg";
import bgDesktopDes from "./assets/destination/background-destination-desktop.jpg";
import bgTabletDes from "./assets/destination/background-destination-tablet.jpg";
import bgMobileDes from "./assets/destination/background-destination-mobile.jpg";
import bgDesktopCrew from "./assets/crew/background-crew-desktop.jpg";
import bgTabletCrew from "./assets/crew/background-crew-tablet.jpg";
import bgMobileCrew from "./assets/crew/background-crew-mobile.jpg";
import bgDesktopTech from "./assets/technology/background-technology-desktop.jpg";
import bgTabletTech from "./assets/technology/background-technology-tablet.jpg";
import bgMobileTech from "./assets/technology/background-technology-mobile.jpg";

export interface bgImagesType {
  bgDesktop: string;
  bgTablet: string;
  bgMobile: string;
}

export const bgImages = [
  {
    bgDesktop: bgDesktopHome,
    bgTablet: bgTabletHome,
    bgMobile: bgMobileHome,
  },
  {
    bgDesktop: bgDesktopDes,
    bgTablet: bgTabletDes,
    bgMobile: bgMobileDes,
  },
  {
    bgDesktop: bgDesktopCrew,
    bgTablet: bgTabletCrew,
    bgMobile: bgMobileCrew,
  },
  {
    bgDesktop: bgDesktopTech,
    bgTablet: bgTabletTech,
    bgMobile: bgMobileTech,
  },
];
