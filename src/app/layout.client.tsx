"use client"

import { ReactNode } from "react";

export function RootLayoutClient(props: { children: ReactNode }) {
  return (
    <>
      { props.children }
    </>
  );
}