import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';
import { Users } from './pages/Users';
import { Messages } from './pages/Messages';
import { Analytics } from './pages/Analytics';
import { Integrations } from './pages/Integrations';
import { Security } from './pages/Security';
import { ThemeProvider } from './context/ThemeContext';

function Router() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#dashboard');

  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(window.location.hash || '#dashboard');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash.startsWith('#settings')) {
      return <Settings />;
    }
    if (currentHash.startsWith('#users')) {
      return <Users />;
    }
    if (currentHash.startsWith('#messages')) {
      return <Messages />;
    }
    if (currentHash.startsWith('#analytics')) {
      return <Analytics />;
    }
    if (currentHash.startsWith('#integrations')) {
      return <Integrations />;
    }
    if (currentHash.startsWith('#security')) {
      return <Security />;
    }
    // Default to Dashboard
    return <Dashboard />;
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
