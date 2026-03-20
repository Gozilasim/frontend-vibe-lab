import { Filter } from 'lucide-react';

export const Analytics = () => {
  // Generate a realistic jagged graph
  const generateGraphData = () => {
    return Array.from({ length: 60 }).map((_, i) => {
      const trend = i * 0.5;
      const volatility = Math.random() * 30 - 15;
      return Math.max(10, Math.min(100, 30 + trend + volatility));
    });
  };

  const graphData = generateGraphData();

  return (
    <div className="animate-fade-in" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--surface-color)' }}>
      {/* 
        Analytics layout uses a flat, borderless canvas with massive typography 
        It breaks away entirely from the "cards" paradigm.
      */}

      {/* Top Header & Flat Metrics */}
      <div style={{ padding: '40px 60px', background: 'var(--bg-color)', display: 'flex', flexDirection: 'column', gap: '40px', borderBottom: '1px solid var(--surface-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: 0, color: 'var(--text-main)' }}>Audience Overview</h1>
          <button className="btn" style={{ background: 'transparent', border: '1px solid var(--surface-border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <Filter size={16}/> Last 30 Days
          </button>
        </div>

        <div className="analytics-header-stats" style={{ overflowX: 'auto', paddingBottom: '20px' }}>
          {[
            { label: 'Pageviews', val: '2.4M', active: true },
            { label: 'Unique Visitors', val: '842K', active: false },
            { label: 'Avg. Time on Page', val: '2m 14s', active: false },
            { label: 'Bounce Rate', val: '42.1%', active: false },
          ].map((metric, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '12px', cursor: 'pointer', opacity: metric.active ? 1 : 0.5 }} className="hover-scale">
               <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-main)', borderBottom: metric.active ? '2px solid var(--primary-color)' : 'none', paddingBottom: '8px' }}>
                 {metric.label}
               </span>
               <span style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--text-main)', letterSpacing: '-0.03em' }}>{metric.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Massive Edge-to-Edge Data Viz */}
      <div style={{ flex: 1, padding: '60px', background: 'var(--surface-color)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '2px', position: 'relative' }}>
           {/* Horizontal Grid Lines */}
           <div style={{ position: 'absolute', top: '25%', left: 0, right: 0, height: '1px', background: 'var(--surface-border)', zIndex: 0 }} />
           <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--surface-border)', zIndex: 0 }} />
           <div style={{ position: 'absolute', top: '75%', left: 0, right: 0, height: '1px', background: 'var(--surface-border)', zIndex: 0 }} />
           
           {/* Graph Bars */}
           {graphData.map((val, i) => (
             <div key={i} style={{
                flex: 1,
                height: `${val}%`,
                background: 'var(--primary-color)',
                zIndex: 1,
                opacity: 0.8,
                borderRadius: '2px 2px 0 0',
                transition: 'height var(--motion-duration) var(--motion-easing)'
             }} className="hover-scale" title={`Value: ${Math.round(val)}`} />
           ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>
          <span>Oct 01</span>
          <span>Oct 15</span>
          <span>Oct 31</span>
        </div>
      </div>

    </div>
  );
};
