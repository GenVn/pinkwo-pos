export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen p-4 mx-auto">{children}</div>;
}
