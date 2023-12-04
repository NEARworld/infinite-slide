import { FC, PropsWithChildren } from "react";

export const VisibleArea: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        width: "1200px",
        height: "400px",
        overflow: "hidden",
        backgroundColor: "pink",
      }}
    >
      {children}
    </div>
  );
};
