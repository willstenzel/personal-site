import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import { Inter } from '@next/font/google';

const interVariable = Inter();

export default function App({
  Component,
  pageProps: { ...pageProps }
}) {
  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
