// _app.tsx
import { AppProps } from 'next/app';
import Login from './components/Login/LoginLayout'; // ต้องใช้ไพล์ที่เราสร้างขึ้นใหม่


function MyApp({ Component, pageProps }: AppProps) {
  // ใช้ Component แทนคอมโพเนนต์ที่เข้าถึงโดยแต่ละหน้า
  if (Component === Login) {
    return <Login {...pageProps} />;
  }
  return <Component {...pageProps} />;
}

export default MyApp;
