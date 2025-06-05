const initialTickets = [
    {
        id: "1",
        title: "Ticket 1",
        description: "This is the first ticket.",
        status: "DONE" as const,
    },
    {
        id: "2",
        title: "Ticket 2",
        description: "This is the second ticket.",
        status: "OPEN" as const,
    },
    {
        id: "3",
        title: "Ticket 3",
        description: "This is the third ticket.",
        status: "IN_PROGRESS" as const,
    },
    
];

export default initialTickets;