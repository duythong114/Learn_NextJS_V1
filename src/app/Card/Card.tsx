"use client";
import React, { useState } from "react";
import "./Card.css";
import custom from "./custom.module.scss";
import clsx from "clsx";

export default function Card() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [expanding, setExpanding] = useState(false);
  return (
    <div
      className={clsx("card", {
        [custom.card]: expanding,
      })}
    >
      Card
    </div>
  );
}
