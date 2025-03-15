import { PropsWithChildren } from "react";
import "./index.css";

export function MDXTable({ children }: PropsWithChildren) {
  return (
    <div className="tableWrapper ">
      <table className="table">{children}</table>
    </div>
  );
}
