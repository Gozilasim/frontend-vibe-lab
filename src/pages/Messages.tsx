import { Search, Send, Image as ImageIcon, Paperclip } from 'lucide-react';

export const Messages = () => {
  return (
    <div className="animate-fade-in delay-100" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 80px)' }}>
      <header style={{ marginBottom: '24px', flexShrink: 0 }}>
        <h1>Messages</h1>
        <p>Team communication and alerts.</p>
      </header>

      <div className="glass-panel" style={{ flex: 1, display: 'flex', borderRadius: 'var(--card-radius, 12px)', overflow: 'hidden' }}>
        {/* Chat Sidebar */}
        <div style={{ width: '300px', borderRight: 'var(--border-width, 1px) solid var(--surface-border)', display: 'flex', flexDirection: 'column', background: 'var(--surface-color)' }}>
          <div style={{ padding: '20px', borderBottom: 'var(--border-width, 1px) solid var(--surface-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-color)', padding: '10px 14px', borderRadius: '8px', border: 'var(--border-width, 1px) solid var(--surface-border)' }}>
              <Search size={18} color="var(--text-muted)" />
              <input type="text" placeholder="Search..." style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', outline: 'none', width: '100%', fontSize: '0.9rem' }} />
            </div>
          </div>
          <div style={{ overflowY: 'auto', flex: 1 }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ padding: '16px 20px', borderBottom: 'var(--border-width, 1px) solid var(--surface-border)', cursor: 'pointer', background: i === 1 ? 'var(--primary-glow)' : 'transparent', borderLeft: i === 1 ? '3px solid var(--primary-color)' : '3px solid transparent' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{i === 1 ? 'Engineering Team' : `Project Alpha ${i}`}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>10:42 AM</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Alice: The new deployment is live.
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg-color)' }}>
          <div style={{ padding: '20px', borderBottom: 'var(--border-width, 1px) solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Engineering Team</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>3 members online</p>
            </div>
          </div>
          
          <div style={{ flex: 1, padding: '30px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Alice Cooper • 10:30 AM</div>
              <div style={{ background: 'var(--surface-color)', padding: '12px 16px', borderRadius: '12px 12px 12px 0', border: 'var(--border-width, 1px) solid var(--surface-border)' }}>
                Did everyone check the new analytics dashboard? The themes look completely different on each page now!
              </div>
            </div>
            
            <div style={{ alignSelf: 'flex-end', maxWidth: '70%' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', textAlign: 'right' }}>You • 10:42 AM</div>
              <div style={{ background: 'var(--primary-color)', color: 'var(--bg-color)', padding: '12px 16px', borderRadius: '12px 12px 0 12px' }}>
                Yes! The User table and this Chat layout show off the contrast between "Control Room" and "Editorial Dark" perfectly.
              </div>
            </div>
          </div>
          
          <div style={{ padding: '20px', borderTop: 'var(--border-width, 1px) solid var(--surface-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--surface-color)', padding: '10px 16px', borderRadius: 'var(--btn-radius, 8px)', border: 'var(--border-width, 1px) solid var(--surface-border)' }}>
              <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}><Paperclip size={20} /></button>
              <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}><ImageIcon size={20} /></button>
              <input type="text" placeholder="Type a message..." style={{ flex: 1, background: 'transparent', border: 'none', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem' }} />
              <button style={{ background: 'var(--primary-color)', color: 'var(--bg-color)', border: 'none', borderRadius: '4px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
