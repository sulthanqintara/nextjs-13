"use client";

import React from "react";

export default function Error({ error, reset }) {
  return (
    <main className="text-center">
      <h2 className="text-4xl">Oh no!</h2>
      <p>{error.message}</p>
      <button className="btn-primary mx-auto my-4" onClick={reset}>
        Maybe try again?
      </button>
    </main>
  );
}
