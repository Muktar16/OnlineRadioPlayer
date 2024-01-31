import React, { ReactNode } from "react";
import {
  RingLoader,
  ScaleLoader,
  BarLoader,
  SyncLoader,
  HashLoader,
  PacmanLoader,
} from "react-spinners";
import { SpinnerType } from "../../constants/AppConstants";

interface LoadingProps {
  message: string;
  spinnerType?: (typeof SpinnerType)[keyof typeof SpinnerType];
  isLoading: boolean;
  children?: ReactNode;
}

const Loading: React.FC<LoadingProps> = ({
  message,
  spinnerType = SpinnerType.RING,
  isLoading,
  children,
}) => {
  const getSpinnerComponent = () => {
    switch (spinnerType) {
      case SpinnerType.SCALE:
        return <ScaleLoader color="#36D7B7" height={10} />;
      case SpinnerType.BAR:
        return <BarLoader color="#36D7B7" height={5} width={150} />;
      case SpinnerType.SYNC:
        return <SyncLoader color="#36D7B7" size={15} />;
      case SpinnerType.HASH:
        return <HashLoader color="#36D7B7" size={40} />;
      case SpinnerType.PACEMAN:
        return <PacmanLoader color="#36D7B7" size={20} />;
      default:
        return <RingLoader color="#36D7B7" size={100} />;
    }
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center gap-2">
          {getSpinnerComponent()}
          <span className="text-gray-600 dark:text-white">{message}</span>
        </div>
      )}
      {!isLoading && children}
    </div>
  );
};

export default Loading;
