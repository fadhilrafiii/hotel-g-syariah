import Colors from "src/shared/types/color";
import Loading from "../icons/Loading";

import "./Loading.scss";

const LoadingComponent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <Loading
        size={128}
        color={Colors.Primary700}
        colorSecondary={Colors.Primary200}
      />
      <div className="flex items-end justify-end gap-x-4 pt-4">
        <div>
          <h1 className="text-5xl font-medium !leading-none">Please wait</h1>
        </div>
        <div className="flex justify-start items-end gap-x-2 h-auto mb-1">
          <span className="loadingDots w-3 h-3 rounded-full bg-black inline-block mx-1"></span>
          <span className="loadingDots w-3 h-3 rounded-full bg-black inline-block mx-1"></span>
          <span className="loadingDots w-3 h-3 rounded-full bg-black inline-block mx-1"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
