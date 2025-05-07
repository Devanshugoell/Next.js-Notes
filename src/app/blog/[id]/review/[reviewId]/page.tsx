export default async function reviewID({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <h1>You are viewing review number: {id}</h1>;
}
