import useSite from '../hooks/useSite';
import Home from '../components/Home';
import Subject from '../components/Subject';

export default function Index() {
  const {onHomePage} = useSite();

  return onHomePage ? <Home /> : <Subject />;
}
