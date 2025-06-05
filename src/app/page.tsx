import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
        <h2 className="text-3xl font-bold tracking-tight">HomePage</h2>
      <p className="text-sm text-muted-foreground"> 
        Your home place to start
      </p>
      <div>
        <Link href="/tickets" className="underline">
          Go to Tickets
        </Link>
      </div> 
    </div>
  );
};

export default HomePage;