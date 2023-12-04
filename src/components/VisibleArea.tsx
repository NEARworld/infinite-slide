import { FC, PropsWithChildren } from "react";

type Props = {
  width: number;
  height: number;
};

export const VisibleArea: FC<PropsWithChildren<Props>> = ({
  width,
  height,
  children,
}) => {
  return (
    <div
      style={{
        width,
        height,
        overflow: "hidden",
        backgroundColor: "pink",
      }}
    >
      {children}
    </div>
  );
};
