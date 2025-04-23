

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#171717]"
      >
        {children}
      </body>
    </html>
  );
}
