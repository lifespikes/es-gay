import {useEffect, useState} from 'react';

const HOME = '**HOME';

const ucfirst = (s: string) => (s[0].toUpperCase()) + s.substring(1).toLowerCase();

const getSubdomain = () => {
  const chunks = document.location.host.split('.');

  return (chunks.length !== 3 || chunks[0] === 'www')
    ? null
    : ucfirst(chunks.shift() ?? 'none');
};

export default function useSite() {
  const [currentSite, setCurrentSite] = useState<string | null>(null);
  const onHomePage = currentSite === HOME;

  useEffect(() => {
    setCurrentSite(
      getSubdomain() ?? HOME
    );
  }, []);

  return {
    currentSite,
    onHomePage,
  }
};
