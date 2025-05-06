## What is Next.js?

[Next.js](https://nextjs.org/) is a **React framework** used for building **full-stack, production-ready web applications**.

While React focuses mainly on building user interfaces (UI), Next.js extends React by providing additional features that enable you to build robust and scalable web apps with ease.

### Key Features of Next.js:

- 🔁 **File-based Routing** – Automatically creates routes based on your file structure.
- ⚡ **Server-side Rendering (SSR)** – Renders pages on the server for better SEO and faster load times.
- 🧱 **Static Site Generation (SSG)** – Pre-renders pages at build time for performance.
- 🌐 **API Routes** – Build backend functionality directly in your project.
- 🔄 **Built-in Data Fetching** – Support for `getServerSideProps`, `getStaticProps`, and `getInitialProps`.
- 🖼️ **Image Optimization** – Automatically optimizes images with the `<Image />` component.
- 📦 **Automatic Code Splitting and Bundling** – Only loads what’s needed for each page.
- 🔁 **Fast Refresh** – Instant feedback while developing.
- ✅ **TypeScript Support** – Out-of-the-box support for TypeScript.

These features make Next.js a powerful framework for building modern, performant, and SEO-friendly web applications.

---

# React Server Components

This architecture was introduced by React team and quickly adopted by Next.js

This architecture introduces a new approach to creating React components by dividing them into two types :

- Server Components
- Client Components

## By default Next.js treats all components as server components.

# Why we should use Server Compoents?

- Data is fetched before rendering, so the user sees content immediately.

- Less client-side JS → smaller bundle → faster load.

- Great for SEO (HTML is fully ready on page load).

- These components can perform server side tasks like reading files or fetching data directly from the database.
- But they cannot use React hooks or handle user interactions.
- Client components are the traditional React components.

# Routing

Next.js has a file-system based routing system

- All routes must inside the app folder
- Route file must be either name page.tsx or page.js
- Each folder represents the segment of the URL path

# Dynamic Routing

- Create a folder with square brackets for dynamic segments: [id]
- Inside it, add a page.tsx or page.js file.
- Access the dynamic param via params.id.
- We need to use Async await for this

```tsx
export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <h1>You are viewing blog number: {id}</h1>;
}
```
