import { notFound } from "next/navigation";

export default async function reviewID({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  if (parseInt(id) > 1000) {
    notFound();
  }
  return <h1>You are viewing review number: {id}</h1>;
}
