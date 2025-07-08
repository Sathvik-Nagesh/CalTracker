
import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import LogFood from './components/LogFood';
import History from './components/History';
import LoginPage from './components/LoginPage';
import { Sun, Moon, LayoutDashboard, UtensilsCrossed, History as HistoryIcon, User } from 'lucide-react';
import Loader from './components/ui/Loader';

type View = 'dashboard' | 'logFood' | 'history' | 'profile';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

const AppContent: React.FC = () => {
  const { currentUser, profile, theme, setTheme, loading } = useApp();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <Loader message="Loading App..." />
      </div>
    );
  }

  if (!currentUser) {
    return <LoginPage />;
  }

  if (!profile) {
    return (
       <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200">
         <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">Calorie Tracker</h1>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
        </header>
        <main className="p-4">
          <Profile />
        </main>
      </div>
    )
  }

  return <MainApp />;
}

const MainApp: React.FC = () => {
  const { theme, toggleTheme } = useApp();
  const [view, setView] = useState<View>('dashboard');

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard />;
      case 'logFood':
        return <LogFood close={() => setView('dashboard')} />;
      case 'history':
        return <History />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  const NavItem: React.FC<{ currentView: View; view: View; setView: (view: View) => void; icon: React.ReactNode; label: string }> = ({ currentView, view, setView, icon, label }) => (
    <button
      onClick={() => setView(view)}
      className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors duration-200 ${
        currentView === view ? 'bg-primary-500 text-white' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200">
      <div className="pb-24">
        <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">Calorie Tracker</h1>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </header>

        <main className="p-4">
          {renderView()}
        </main>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-t-lg z-20">
        <div className="max-w-md mx-auto grid grid-cols-4 gap-2 p-2">
          <NavItem currentView={view} view="dashboard" setView={setView} icon={<LayoutDashboard size={24} />} label="Dashboard" />
          <NavItem currentView={view} view="logFood" setView={setView} icon={<UtensilsCrossed size={24} />} label="Log Food" />
          <NavItem currentView={view} view="history" setView={setView} icon={<HistoryIcon size={24} />} label="History" />
          <NavItem currentView={view} view="profile" setView={setView} icon={<User size={24} />} label="Profile" />
        </div>
      </nav>
    </div>
  );
};

const AppWithContext: React.FC = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);


export default AppWithContext;