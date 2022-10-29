import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4 flex gap-7">
      <Link className="underline text-orange-500" href="/product">
        product list page
      </Link>
    </div>
  );
}
