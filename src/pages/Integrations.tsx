import { Search, Github, Slack, Figma, Trello, GitMerge, Database, Cloud, Mail } from 'lucide-react';

export const Integrations = () => {
  const apps = [
    { id: 1, name: 'GitHub', icon: Github, color: 'var(--text-main)', desc: 'Sync repositories and pull requests automatically.', status: 'Installed' },
    { id: 2, name: 'Slack', icon: Slack, color: '#E01E5A', desc: 'Receive deployment notifications in your channels.', status: 'Install' },
    { id: 3, name: 'Figma', icon: Figma, color: '#F24E1E', desc: 'Embed live design mockups inside tickets.', status: 'Install' },
    { id: 4, name: 'Jira', icon: GitMerge, color: '#0052CC', desc: 'Bi-directional issue tracking synchronization.', status: 'Install' },
    { id: 5, name: 'AWS', icon: Cloud, color: '#FF9900', desc: 'Monitor cloud infrastructure directly from Nova.', status: 'Installed' },
    { id: 6, name: 'SendGrid', icon: Mail, color: '#1A82E2', desc: 'Manage transactional email templates.', status: 'Install' },
    { id: 7, name: 'MongoDB', icon: Database, color: '#47A248', desc: 'Link clusters for automatic query monitoring.', status: 'Install' },
    { id: 8, name: 'Trello', icon: Trello, color: '#0079BF', desc: 'Lightweight board integration for small teams.', status: 'Install' }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '0', height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* App Store Hero */}
      <div style={{ background: 'var(--surface-color)', padding: '80px 60px', borderBottom: '1px solid var(--surface-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, margin: '0 0 16px 0', color: 'var(--text-main)', letterSpacing: '-0.03em' }}>App Directory</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 0 32px 0' }}>Supercharge your workflow with integrations.</p>
        
        {/* Massive Search Input */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
          <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={24} />
          <input 
            type="text" 
            placeholder="Search integrations..." 
            style={{ 
              width: '100%', padding: '20px 20px 20px 60px', 
              fontSize: '1.2rem', borderRadius: '40px', 
              border: '1px solid var(--surface-border)', 
              background: 'var(--bg-color)', color: 'var(--text-main)',
              outline: 'none', boxShadow: 'var(--card-shadow, 0 10px 30px rgba(0,0,0,0.1))' 
            }}
          />
        </div>
      </div>

      {/* Categories & Cards */}
      <div style={{ padding: '60px', flex: 1, background: 'var(--bg-color)', overflowY: 'auto' }} className="custom-scrollbar">
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '40px' }}>
           {apps.map(app => (
              <div key={app.id} className="hover-scale" style={{ 
                display: 'flex', gap: '24px', alignItems: 'flex-start', padding: '32px', 
                borderRadius: '24px', background: 'var(--surface-color)', 
                border: '1px solid var(--surface-border)', cursor: 'pointer',
                transition: 'transform var(--motion-duration) var(--motion-easing), box-shadow 0.3s ease',
                boxShadow: 'var(--card-shadow, 0 4px 20px rgba(0,0,0,0.05))'
              }}>
                 <div style={{ padding: '20px', background: 'var(--bg-color)', borderRadius: '16px', color: app.color, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--surface-border)' }}>
                    <app.icon size={40} />
                 </div>
                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '1.3rem', color: 'var(--text-main)', fontWeight: 700 }}>{app.name}</h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{app.desc}</p>
                    <button style={{ 
                      padding: '10px 20px', borderRadius: '24px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                      border: app.status === 'Installed' ? '1px solid var(--surface-border)' : 'none',
                      background: app.status === 'Installed' ? 'transparent' : 'var(--text-main)',
                      color: app.status === 'Installed' ? 'var(--text-main)' : 'var(--bg-color)'
                    }} className="btn">
                       {app.status}
                    </button>
                 </div>
              </div>
           ))}
         </div>
      </div>
    </div>
  );
};
