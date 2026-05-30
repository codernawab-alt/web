import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-slate-900 to-dark text-white">
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
      )}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
