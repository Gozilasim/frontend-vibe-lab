import { ShieldCheck, Fingerprint, Lock, RadioTower, AlertTriangle, XCircle, Key } from 'lucide-react';

export const Security = () => {
  return (
    <div className="animate-fade-in security-split" style={{ padding: '0' }}>
      
      {/* Left Pane: Posture Audit */}
      <div className="security-left">
         <div style={{ padding: '60px 40px', borderBottom: '1px solid var(--surface-border)', textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', margin: '0 auto 24px', borderRadius: '50%', border: '4px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', boxShadow: '0 0 40px rgba(16, 185, 129, 0.2)' }}>
               <ShieldCheck size={60} />
            </div>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 8px 0', color: 'var(--text-main)', letterSpacing: '-0.02em', fontWeight: 800 }}>Secure</h2>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Last scan: 2 mins ago</p>
         </div>
         
         <div style={{ flex: 1, padding: '40px' }}>
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px', fontWeight: 700 }}>Threat Matrix</h4>
            {['DDoS Protection', 'SQL Injection Filter', 'Zero-Day Heuristics', 'Rate Limiting'].map((threat, i) => (
               <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px dashed var(--surface-border)' }}>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500 }}>{threat}</span>
                  <span style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1px' }}>ACTIVE</span>
               </div>
            ))}
         </div>
      </div>

      {/* Right Pane: Access Log Terminal */}
      <div className="security-right custom-scrollbar">
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--text-main)', fontWeight: 700, letterSpacing: '-0.02em' }}>Audit Ledger</h1>
            <button className="btn" style={{ border: '1px solid #ef4444', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontWeight: 600 }}>
               <XCircle size={18} /> Force Terminate Connections
            </button>
         </div>

         {/* Strict Ledger Flow Layout */}
         <div style={{ width: '100%', border: '1px solid var(--surface-border)', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-color)' }}>
            
            {/* Ledger Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr 1.5fr 1fr', padding: '20px 24px', background: 'var(--surface-color)', borderBottom: '1px solid var(--surface-border)', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>
               <span>Event Type</span>
               <span>Trace Origin</span>
               <span>Timestamp</span>
               <span style={{ textAlign: 'right' }}>Status</span>
            </div>
            
            {/* Ledger Rows */}
            {[
               { e: 'Admin Login', ip: '192.168.1.42 (US)', t: '2026-10-15 09:42:11', s: 'SUCCESS', c: '#10b981', icon: Fingerprint, block: false },
               { e: 'API Key Gen', ip: '172.56.21.1 (US)', t: '2026-10-15 08:11:04', s: 'SUCCESS', c: '#10b981', icon: Key, block: false },
               { e: 'Failed Auth', ip: '82.12.99.10 (UK)', t: '2026-10-14 23:54:55', s: 'BLOCKED', c: '#ef4444', icon: AlertTriangle, block: true },
               { e: 'Password Change', ip: '192.168.1.42 (US)', t: '2026-09-01 14:20:01', s: 'SUCCESS', c: '#10b981', icon: Lock, block: false },
               { e: 'Port Scan', ip: 'Unknown Origin', t: '2026-08-22 03:14:09', s: 'DROPPED', c: '#f59e0b', icon: RadioTower, block: true },
               { e: 'Admin Login', ip: '192.168.1.42 (US)', t: '2026-08-21 09:00:11', s: 'SUCCESS', c: '#10b981', icon: Fingerprint, block: false },
            ].map((row, i) => (
               <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr 1.5fr 1fr', padding: '24px', borderBottom: i === 5 ? 'none' : '1px solid var(--surface-border)', alignItems: 'center', background: row.block ? 'rgba(239,68,68,0.03)' : 'transparent' }} className="hover-scale">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                     <div style={{ color: row.c, background: `${row.c}11`, padding: '10px', borderRadius: '8px' }}><row.icon size={20} /></div>
                     <span style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '1rem' }}>{row.e}</span>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontFamily: 'monospace' }}>{row.ip}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{row.t}</span>
                  <div style={{ textAlign: 'right' }}>
                     <span style={{ display: 'inline-block', padding: '6px 12px', borderRadius: '4px', border: `1px solid ${row.c}55`, background: `${row.c}15`, color: row.c, fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1px' }}>
                        {row.s}
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
};
