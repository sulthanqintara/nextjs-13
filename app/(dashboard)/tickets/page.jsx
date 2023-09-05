import { Suspense } from "react";
import Link from "next/link";

// components
import TicketList from "./TicketList";
import Loading from "../loading";

export const metadata = {
  title: "Helpdesk | Ticket",
};

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
        <Link className="ml-auto" href="/tickets/create">
          <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
