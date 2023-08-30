import Link from "next/link";

async function getTickets() {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, //0 means it won't cache the data, if >0 means it'll cache the data for a set amount of time
    },
  });
  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && <p className="text-center">There are no open tickets, yay!</p>}
    </>
  );
}
