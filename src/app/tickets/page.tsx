import clsx from "clsx";
import Link from "next/link";
import initialTickets  from "@/data";
import { ticketPath } from "@/paths";


const CheckIcon = () => (

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
)

const PencilIcon = () => (

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
  </svg>
)  

const OpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>
)

const Ticket_Icons = {
    "OPEN": <OpenIcon />,
    "IN_PROGRESS": <PencilIcon />,
    "DONE": <CheckIcon />,
    "CANCELLED": "🔴",
    "PENDING": "🟡",
    "CLOSED": "🟢",
    "REJECTED": "🔴",
    "APPROVED": "🟢",
}

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
            <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
            <p className="text-sm text-muted-foreground"> 
                All your tickets at one place
            </p>
        </div>

        <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {initialTickets.map((ticket) => (
            <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-black-200 rounded" >
                <div> {Ticket_Icons[ticket.status]} </div>
                <h3 className="text-lg truncate">{ticket.title}</h3>
                <p className= {clsx("text-sm text-slate-500 truncate", {
                    "line-through": ticket.status === "DONE",
                })}>{ticket.description}</p>
                <Link href={ticketPath(ticket.id)} className="text-sm underline">
                    View Ticket
                </Link>
            </div>
        ))}
        </div>
    </div>

    )
  };
  
  export default TicketsPage;