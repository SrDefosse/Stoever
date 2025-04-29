import '../styles/globals.css'; // Import global styles
import FloatingBizSwitch from '../components/layout/FloatingBizSwitch'; // Import the button

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FloatingBizSwitch />
    </>
  );
}
