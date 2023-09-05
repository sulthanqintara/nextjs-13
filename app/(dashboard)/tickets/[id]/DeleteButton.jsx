"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";

export default function DeleteButton({ id }) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, { method: "DELETE" });
    const json = await res.json();
    if (json.error) {
      console.log(json.error);
      return setIsLoading(false);
    }
    router.refresh();
    router.push("/tickets");
  };
  return (
    <button className="btn-primary" onClick={handleClick} disabled={isLoading}>
      <TiDelete />
      {!isLoading ? "Delete Ticket" : "Deleting.."}
    </button>
  );
}
