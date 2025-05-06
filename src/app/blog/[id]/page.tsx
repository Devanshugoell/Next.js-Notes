export default function BlogPage({ params }: { params: { id: string } }) {
  return <h1>You are viewing blog number: {params.id}</h1>;
}
