export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="text-red-500">Auth Layout</h1>
      {children}
    </div>
  );
}
