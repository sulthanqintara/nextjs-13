import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// components
import Navbar from "../components/Navbar";

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({cookies});
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
}
