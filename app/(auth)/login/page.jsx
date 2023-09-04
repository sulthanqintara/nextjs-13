"use client";

import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// components
import AuthForm from "../AuthForm";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return setError(error.message);
    }
    return router.push("/");
  };

  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />

      {error && <div className="error">{error}</div>}
    </main>
  );
}
