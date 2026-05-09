import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 text-center">
      <p className="section-label mb-4">404</p>
      <h1 className="font-heading font-black uppercase text-teal text-4xl md:text-6xl leading-none mb-6">
        Story Not Found.
      </h1>
      <p className="font-body italic text-teal/60 text-xl mb-10">
        This page doesn&apos;t exist — but there are plenty of real ones waiting for you.
      </p>
      <Link href="/episodes" className="btn-primary">
        Read the Stories
      </Link>
    </div>
  );
}
