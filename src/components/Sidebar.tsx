import { useState, useEffect } from 'react';
import { LayoutDashboard, Users, Settings, MessageSquare, Activity, Puzzle, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import './Sidebar.css'; 

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', hash: '#dashboard' },
  { icon: Activity, label: 'Analytics', hash: '#analytics' },
  { icon: Users, label: 'Users', hash: '#users' },
  { icon: MessageSquare, label: 'Messages', hash: '#messages' },
  { icon: Puzzle, label: 'Integrations', hash: '#integrations' },
  { icon: ShieldCheck, label: 'Security', hash: '#security' },
  { icon: Settings, label: 'Settings', hash: '#settings' },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#dashboard');

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash || '#dashboard');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <aside className={`sidebar glass-panel ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          {!isCollapsed && <span className="logo-text">Live Preview</span>}
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentHash.startsWith(item.hash);
          return (
            <a 
              href={item.hash} 
              key={index} 
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={22} className="nav-icon" />
              {!isCollapsed && <span className="nav-label">{item.label}</span>}
            </a>
          );
        })}
      </nav>

      <div className="sidebar-footer" style={{ display: 'flex', justifyContent: isCollapsed ? 'center' : 'flex-end', padding: isCollapsed ? '16px 0' : '16px 20px' }}>
        <button 
          className="collapse-btn" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle Sidebar"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
    </aside>
  );
};
