import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { defaultTheme } from '../themes/defaultTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div sx={{ display: 'grid', placeItems: 'center' }}>
        <Component {...pageProps} />{' '}
      </div>
    </ThemeProvider>
  );
}
export default MyApp;
