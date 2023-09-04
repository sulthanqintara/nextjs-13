"use client";

import { headers } from "@/next.config";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const ticket = { title, body, priority };

    const res = await fetch("http://localhost:3000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    });

    const json = await res.json();
    if (json.error) {
      return console.log(json.error.message);
    }
    if (json.data) {
      router.refresh()
      router.push('/tickets')
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input type="text" required onChange={(e) => setTitle(e.target.value)} value={title} />
      </label>
      <label>
        <span>Body:</span>
        <textarea required onChange={(e) => setBody(e.target.value)} value={body} />
      </label>
      <label>
        <span>Priority:</span>
        <select name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading} type="submit">
        {!isLoading ? "Add Ticket" : "Loading..."}
      </button>
    </form>
  );
}
