import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}