import type {Metadata} from 'next';
import {Noto_Sans_Display} from 'next/font/google';
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from '@clerk/nextjs';
import {ThemeProvider} from '@/components/theme-provider';
import {Toaster} from '@/components/ui/toaster';

import './globals.css';

const noto = Noto_Sans_Display({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Dashboard Arvoredo',
  description: 'Powered by Boost',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={noto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
    // </ClerkProvider>
  );
}
