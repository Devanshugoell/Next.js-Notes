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

# Nested Dynamic Routing

- You can nest dynamic routes by placing dynamic folders inside each other.
- Each folder with square brackets (`[param]`) represents a dynamic URL segment.
- Example: For route `/blog/123/comment/456`, use the folder structure:

- Inside `page.tsx`, access dynamic params like this:

```tsx
export default function CommentPage({
  params,
}: {
  params: { blogId: string; commentId: string };
}) {
  const { blogId, commentId } = params;

  return (
    <div>
      <h1>Blog ID: {blogId}</h1>
      <h2>Comment ID: {commentId}</h2>
    </div>
  );
}
```

# Catch-all Segments

- Catch-all segments let you match **multiple or optional path segments**.
- Syntax:
  - `[...slug]` → matches one or more segments (required)
  - `[[...slug]]` → matches zero or more segments (optional)

## Example 1: Required Catch-all

Folder structure:
app/
└── docs/
└── [...slug]/
└── page.tsx

Access path: `/docs/a/b/c`

## Catch-all Segment Example with Conditional Rendering

```tsx
export default function Docs({ params }: { params: { slug?: string[] } }) {
  if (params?.slug?.length === 2) {
    return (
      <h1>
        Viewing docs of feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params?.slug?.length === 1) {
    return <h1>Viewing docs of feature {params.slug[0]}</h1>;
  }

  return <h1>Docs Home page</h1>;
}
```

# Not Found Page

- Next.js provides a built-in way to handle 404 pages using a special `not-found.tsx` file.
- Place this file:
  - Globally in the `app/` directory, or
  - Inside any specific route folder to handle 404s **only for that segment**.

## Global Not Found Page

Example:

```tsx
export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
    </div>
  );
}
```

# usePathname Hook

- The `usePathname()` hook from `next/navigation` is used to get the **current URL path** in a client component.
- It only works in **Client Components**, so you must add `"use client"` at the top.

## How to Use

```tsx
"use client";
import { usePathname } from "next/navigation";

export default function CurrentPath() {
  const pathname = usePathname();

  return <p>Current path: {pathname}</p>;
}
```
