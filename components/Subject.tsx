import useSite from '../hooks/useSite';
import Layout from './Layout';

export default function Subject() {
  const {currentSite} = useSite();

  return (
    <Layout>
      <h1 className="text-6xl font-bold">
        <span className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">{currentSite}</span> es gay 🏳️‍🌈.
      </h1>
    </Layout>
  );
};
