import { User, Shield, MoreVertical } from 'lucide-react';

const DUMMY_USERS = [
  { id: 1, name: 'Alice Cooper', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Offline' },
  { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Viewer', status: 'Active' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', status: 'Active' },
];

export const Users = () => {
  return (
    <div className="animate-fade-in delay-100">
      <header style={{ marginBottom: '40px' }}>
        <h1>User Management</h1>
        <p>View and manage system users and their permissions.</p>
      </header>

      <div className="glass-panel" style={{ borderRadius: 'var(--card-radius, 12px)', overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: 'var(--border-width, 1px) solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>All Users</h2>
          <button className="btn" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Add New User</button>
        </div>
        
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: 'var(--border-width, 1px) solid var(--surface-border)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '16px 20px', fontWeight: 500 }}>User</th>
                <th style={{ padding: '16px 20px', fontWeight: 500 }}>Role</th>
                <th style={{ padding: '16px 20px', fontWeight: 500 }}>Status</th>
                <th style={{ padding: '16px 20px', fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {DUMMY_USERS.map((user) => (
                <tr key={user.id} style={{ borderBottom: 'var(--border-width, 1px) solid var(--surface-border)', transition: 'background var(--motion-duration) var(--motion-easing)' }}>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--surface-color)', border: 'var(--border-width, 1px) solid var(--surface-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)' }}>
                        <User size={18} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, color: 'var(--text-main)' }}>{user.name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '4px', background: 'var(--surface-color)', border: 'var(--border-width, 1px) solid var(--surface-border)', fontSize: '0.85rem' }}>
                      <Shield size={14} color="var(--primary-color)" /> {user.role}
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: user.status === 'Active' ? '#10b981' : '#64748b', boxShadow: user.status === 'Active' ? '0 0 8px rgba(16, 185, 129, 0.4)' : 'none' }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{user.status}</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
