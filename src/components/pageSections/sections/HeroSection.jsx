import { TypeAnimation } from "react-type-animation";
import Button from "../../ui/Button";

const HeroSection = () => {
  return (
    <div className="relative w-full mt-3 z-10">
      <div className="h-7 mx-12 dark:bg-main-3 bg-light-hero rounded-t-md shadow-3xl transition-all duration-750"></div>
      <div className="flex justify-between items-center p-12 bg-mountain">
        <div>
          <p className="text-light-hero text-5xl">خوش آمدید به دنیای زیبای</p>
          <p className="text-light-hero text-5xl mt-2">برنامه نویسی!</p>
          <div className="flex justify-start items-center my-8">
            <span>
              <span className="text-light-hero">{"< "}</span>
              <span className="text-primary">رخ</span>
              <span className="text-light-hero">{" > "}</span>
            </span>
            <span className="text-light-hero mx-2">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  1000,
                  "من یک برنامه نویس هستم",
                  2000,
                  "من یک طراح سایت هستم",
                  2000,
                  "من دانش آموز رشته ریاضی هستم",
                  2000,
                  "من بسیار بسیار زیبا هستم",
                  1000,
                ]}
                speed={30}
                style={{ fontSize: "1.1rem" }}
                repeat={Infinity}
              />
            </span>
            <span>
              <span className="text-light-hero">{" </ "}</span>
              <span className="text-primary">رخ</span>
              <span className="text-light-hero">{" >"}</span>
            </span>
          </div>
          <div>
            <Button>مشاهده نمونه کار ها</Button>
          </div>
        </div>
        <img
          src="/img/hero.png"
          alt="Hero"
          className="absolute end-10 bottom-0 w-[360px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;