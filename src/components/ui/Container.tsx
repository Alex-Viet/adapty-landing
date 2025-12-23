import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  as?: "div" | "section";
}>;

export function Container({ as = "div", children }: ContainerProps) {
  const Component = as;

  return (
    <Component className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </Component>
  );
}


