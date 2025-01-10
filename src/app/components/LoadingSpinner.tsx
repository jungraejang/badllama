import { Spin } from "antd";

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center p-4">
    <Spin size="large" />
  </div>
);

export default LoadingSpinner;
