import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

export default function Title({ children, id }: Props) {
  return (
    <h1
      id={id && id}
      className="text-3xl flex items-center justify-center font-medium mb-10"
    >
      {children}
    </h1>
  );
}
