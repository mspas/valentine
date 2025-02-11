import { RefObject } from "react";

export const scrollInto = (elemRef: RefObject<HTMLDivElement>): void => {
  setTimeout(() => {
    elemRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}
