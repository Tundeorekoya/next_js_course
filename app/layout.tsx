import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "home page",
    template: " %s| code-evolution",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{ background: "green", justifyContent: "center", padding: 1 }}
        >
          <h1>header</h1>
        </header>
        {children}
        <footer
          style={{ background: "blue", justifyContent: "center", padding: 1 }}
        >
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
