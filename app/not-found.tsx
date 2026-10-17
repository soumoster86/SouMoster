"use client";

import NextError from "next/error";

// Requests the middleware doesn't handle (outside any locale) land here.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <NextError statusCode={404} />
      </body>
    </html>
  );
}
