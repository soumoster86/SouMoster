// The real root layout is app/[locale]/layout.tsx. This one only exists so the
// non-localized app/not-found.tsx has a parent.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
