// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "./Component/Topheader";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Head from "next/head";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Default metadata
export const metadata: Metadata = {
  title: "Shopping Website",
  description: "Your one-stop shop for the latest products.", // Add fallback if null/undefined
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          {/* Convert title to a simple string */}
          <title>{String(metadata.title) || "Default Title"}</title>
          <meta name="description" content={String(metadata.description) || "Default description"} />
        </Head>
        
          <TopHeader />
          <Header />
          <main>{children}</main>
          <Footer />
        
      </body>
    </html>
  );
}



// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import TopHeader from "./Component/Topheader";
// import Header from "./Component/Header";
// import Footer from "./Component/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Shopping Website",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <TopHeader/>
//         <Header/>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }
