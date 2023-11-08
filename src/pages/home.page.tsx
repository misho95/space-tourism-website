import ContentPageContainer from "../components/content.page.containter";

const HomePage = () => {
  return (
    <ContentPageContainer>
      <div className="w-1/2 lg:w-min select-none flex justify-center items-center flex-col text-center">
        <h3 className="text-[#D0D6F9] text-[16px] sm:text-[20px] lg:text-[28px]">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-[80px] sm:text-[150px] text-white">SPACE</h1>
        <p className="text-[#D0D6F9] text-[15px] sm:text-[16px] lg:text-[18px] ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <button className="text-[20px] sm:text-[32px] bg-white rounded-full w-[150px] h-[150px] sm:w-[242px] sm:h-[242px] lg:w-[274px] lg:h-[274px]">
          EXPLORE
        </button>
      </div>
    </ContentPageContainer>
  );
};

export default HomePage;
