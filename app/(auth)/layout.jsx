import Link from "next/link";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Helpdesk</h1>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  );
}
