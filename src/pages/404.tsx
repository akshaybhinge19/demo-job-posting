import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-4">
        Sorry!, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className="font-mono">src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/" className="underline">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
