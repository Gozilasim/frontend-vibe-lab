import { ArrowUpRight, Globe } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="animate-fade-in bento-grid" style={{ padding: '0' }}>
      
      {/* Top Main Panel: Welcome & Sparkline */}
      <div style={{ background: 'var(--bg-color)', padding: '40px', gridColumn: '1 / 2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: 800, margin: '0 0 16px 0', letterSpacing: '-0.04em', color: 'var(--text-main)', lineHeight: '1.1' }}>
          Global<br/>Command.
        </h1>
        <div className="bento-top-row" style={{ display: 'flex', gap: '60px', marginTop: '60px', flexWrap: 'wrap' }}>
          <div>
             <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Total Throughput</span>
             <h2 className="hero-stat" style={{ fontSize: '4rem', margin: '8px 0 0 0', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>14.2M</h2>
             <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600, fontSize: '1rem', marginTop: '8px' }}><ArrowUpRight size={20}/> 18.4% WoW</span>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', height: '120px', gap: '4px', minWidth: '200px' }}>
             {/* Seamless Sparkline */}
             {Array.from({length: 40}).map((_, i) => (
                <div key={i} style={{ 
                  flex: 1, 
                  background: 'var(--primary-color)', 
                  height: `${Math.random() * 80 + 20}%`, 
                  opacity: i > 32 ? 1 : 0.3,
                  borderRadius: '2px 2px 0 0'
                }} className="hover-scale" />
             ))}
          </div>
        </div>
      </div>

      {/* Top Right Panel: Vitals */}
      <div style={{ background: 'var(--bg-color)', padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px', justifyContent: 'center' }}>
         <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>System Vitals</h3>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Latency</span>
           <span style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1.2rem' }}>42ms</span>
         </div>
         <div style={{ height: '1px', background: 'var(--surface-color)' }} />
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Uptime</span>
           <span style={{ fontWeight: 700, color: '#10b981', fontSize: '1.2rem' }}>99.999%</span>
         </div>
         <div style={{ height: '1px', background: 'var(--surface-color)' }} />
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Active Nodes</span>
           <span style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1.2rem' }}>2,042</span>
         </div>
         <div style={{ height: '1px', background: 'var(--surface-color)' }} />
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Errors/min</span>
           <span style={{ fontWeight: 700, color: '#ef4444', fontSize: '1.2rem' }}>0.02</span>
         </div>
      </div>

      {/* Bottom Main Panel: Geography Status */}
      <div style={{ background: 'var(--bg-color)', padding: '60px', gridColumn: '1 / -1', minHeight: '40vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
         <h3 style={{ margin: 0, zIndex: 1, position: 'relative', color: 'var(--text-main)', fontSize: '1.5rem', fontWeight: 600 }}>Live Deployments</h3>
         
         {/* Huge background globe icon to break the boxy feel */}
         <Globe className="bento-globe" size={800} strokeWidth={0.5} style={{ position: 'absolute', right: '-15%', top: '-30%', color: 'var(--surface-border)', opacity: 0.5, pointerEvents: 'none' }} />
         
         <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', position: 'relative', zIndex: 1, background: 'var(--surface-border)' }}>
            {['US-EAST-1', 'EU-CENTRAL-1', 'AP-SOUTHEAST-2', 'SA-EAST-1'].map((region, i) => (
               <div key={region} className="dropdown-option" style={{ background: 'var(--bg-color)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                     {/* Pulsing indicator */}
                     <div style={{ width: 10, height: 10, borderRadius: '50%', background: i === 3 ? '#f59e0b' : '#10b981', boxShadow: `0 0 10px ${i === 3 ? '#f59e0b' : '#10b981'}88` }} />
                     <span style={{ fontWeight: 700, letterSpacing: '1px', color: 'var(--text-muted)' }}>{region}</span>
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--text-main)' }}>{i === 3 ? 'Degraded' : 'Healthy'}</div>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
};
