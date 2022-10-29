import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1 className="text-2xl text-orange-600">Product</h1>
      <div className="mt-8">{children}</div>
    </>
  );
};

export default layout;
