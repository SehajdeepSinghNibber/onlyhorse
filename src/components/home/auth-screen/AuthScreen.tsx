import HeroSection from "./HeroSection";
import UnderlinedText from "../../decoraters/UnderlinedText";
import TodaysHighlight from "./TodaysHighlight";
import RotatedText from "../../decoraters/RotatedText";
import MasonaryGrid from "./MasonaryGrid";

const AuthScreen = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <div className="mb-20 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-3xl md:text-5xl tracking-tight mt-4  mb-8 font-semibold text-center">
            Today's{" "}
            <UnderlinedText className="underline-offset-8 md:underline-offset-12 decoration-wavy">
              Highlight
            </UnderlinedText>
            <span>👇</span>
          </p>

          {/* Featured Post */}

          <div className="flex flex-col gap-10 mt-10">
            <TodaysHighlight />

            <div className="mt-24">
              <p className="text-2xl md:text-5xl text-center tracking-tight font-bold">
                Meet the <RotatedText>Stars</RotatedText> of Our Farm
              </p>
              <MasonaryGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthScreen;
