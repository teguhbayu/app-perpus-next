import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Tambah Buku - Perpus Telkom",
  description: "dibuat Bayu UwU",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  )
}
