import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Info, MousePointer2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  value: string;
  onChange: (val: string) => void;
  options: Option[];
  type: 'art' | 'visual' | 'design';
}

/* ── Simulated Interactive Stage for Design Language previews ── */
const DesignMotionPreview = () => {
  const [phase, setPhase] = useState(0); // 0=rest, 1=hover-card, 2=rest, 3=click-btn

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase(prev => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const isHoveringCard = phase === 1;
  const isClickingBtn = phase === 3;

  // Cursor follows the action
  const cursorPos = {
    0: { top: '80%', left: '15%' },
    1: { top: '32%', left: '55%' },
    2: { top: '65%', left: '75%' },
    3: { top: '75%', left: '50%' },
  }[phase] || { top: '80%', left: '15%' };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', minHeight: '170px' }}>
      <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-muted)', fontWeight: 700 }}>
        Motion Simulation
      </span>

      {/* Card: uses var(--hover-lift) for hover translation */}
      <div style={{
        padding: '14px',
        borderRadius: 'var(--card-radius, 8px)',
        border: 'var(--border-width, 1px) solid var(--surface-border)',
        background: 'var(--surface-color)',
        transform: isHoveringCard ? 'translateY(var(--hover-lift, -4px))' : 'translateY(0)',
        boxShadow: isHoveringCard ? 'var(--card-shadow, 0 8px 24px rgba(0,0,0,0.2))' : '0 2px 4px rgba(0,0,0,0.05)',
        transition: 'transform var(--motion-duration) var(--motion-easing), box-shadow var(--motion-duration) var(--motion-easing)',
      }}>
        <div style={{ width: '60%', height: '8px', borderRadius: '4px', background: 'var(--text-muted)', opacity: 0.3, marginBottom: '8px' }} />
        <div style={{ width: '40%', height: '6px', borderRadius: '4px', background: 'var(--text-muted)', opacity: 0.2 }} />
      </div>

      {/* Button: uses var(--active-scale) for click scale */}
      <button className="btn" style={{
        width: '100%',
        padding: '10px',
        fontSize: '0.8rem',
        transform: isClickingBtn ? 'scale(var(--active-scale, 0.95))' : 'scale(1)',
        transition: 'transform var(--motion-duration) var(--motion-easing)',
      }}>
        Click Target
      </button>

      {/* Animated Virtual Cursor */}
      <MousePointer2
        size={20}
        style={{
          position: 'absolute',
          top: cursorPos.top,
          left: cursorPos.left,
          color: 'var(--primary-color)',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
          transition: 'top var(--motion-duration) var(--motion-easing), left var(--motion-duration) var(--motion-easing)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

/* ── Main Contrast Engine Preview ── */
const AnimatedPreview = ({ type, targetValue, currentValue, renderUpwards }: { type: 'art'|'visual'|'design', targetValue: string, currentValue: string, renderUpwards: boolean }) => {
  const { artDirection, visualDirection } = useTheme();
  const [showTarget, setShowTarget] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTarget(prev => !prev);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const previewArt = type === 'art' ? (showTarget ? targetValue : currentValue) : artDirection;
  const previewVisual = type === 'visual' ? (showTarget ? targetValue : currentValue) : visualDirection;
  // Design Language: always lock to the target value (no alternating) so physics are clearly visible
  const previewDesign = type === 'design' ? targetValue : (showTarget ? targetValue : currentValue);

  return (
    <div 
      className="animated-preview-tooltip"
      data-theme={previewArt}
      data-visual={previewVisual}
      data-design={previewDesign}
      style={{
        position: 'absolute',
        top: renderUpwards ? 'auto' : '-16px',
        bottom: renderUpwards ? '-16px' : 'auto',
        right: 'calc(100% + 16px)',
        left: 'auto',
        width: '320px',
        backgroundColor: 'var(--bg-color)',
        backgroundImage: 'var(--bg-gradient)',
        border: 'var(--border-width, 1px) solid var(--surface-border)',
        borderRadius: 'var(--card-radius, 12px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
        zIndex: 1000,
        pointerEvents: 'none',
        transition: 'all var(--motion-duration) var(--motion-easing)',
        color: 'var(--text-main)', 
        overflow: 'hidden',
      }}
    >
      <div style={{ 
        padding: '10px 16px', 
        fontSize: '0.75rem', 
        backgroundColor: 'var(--surface-color)', 
        color: 'var(--text-muted)',
        borderBottom: 'var(--border-width, 1px) solid var(--surface-border)',
        display: 'flex',
        justifyContent: 'space-between',
        transition: 'all var(--motion-duration) var(--motion-easing)',
      }}>
        <span style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Contrast Engine</span>
        <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>
          {type === 'design' ? 'Motion Preview' : (showTarget ? 'Target Style' : 'Current Style')}
        </span>
      </div>

      {type === 'design' ? (
        <DesignMotionPreview />
      ) : (
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="glass-card" style={{ padding: '16px', margin: 0 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: 'var(--text-main)' }}>Design Systems</h4>
            <p style={{ margin: '0 0 16px 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Structural properties, padding, borders, and motion physics instantly snap into place via cascading rules.
            </p>
            <button className="btn" style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}>
              Interactive Content
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownOptionItem = ({ option, isActive, isHoveringIcon, onSelect, onIconHoverEnter, onIconHoverLeave }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="dropdown-option"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      style={{
        padding: '12px 16px',
        borderRadius: 'var(--btn-radius, 6px)',
        cursor: 'pointer',
        background: isActive ? 'var(--primary-glow)' : (isHovered ? 'var(--surface-color)' : 'transparent'),
        color: isActive ? 'var(--primary-color)' : 'var(--text-main)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all var(--motion-duration) var(--motion-easing)',
        position: 'relative',
      }}
    >
      <span style={{ fontWeight: isActive ? 600 : 400, flex: 1, paddingRight: '12px', lineHeight: '1.4' }}>{option.label}</span>
      
      <div 
        onMouseEnter={(e) => { e.stopPropagation(); onIconHoverEnter(); }}
        onMouseLeave={(e) => { e.stopPropagation(); onIconHoverLeave(); }}
        onClick={(e) => e.stopPropagation()}
        style={{
          flexShrink: 0,
          padding: '6px',
          borderRadius: '50%',
          background: isHoveringIcon ? 'var(--primary-color)' : 'var(--surface-color)',
          color: isHoveringIcon ? '#fff' : 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all var(--motion-duration) var(--motion-easing)',
          cursor: 'help'
        }}
      >
        <Info size={16} />
      </div>

    </div>
  );
};


export const Dropdown = ({ value, onChange, options, type }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [openUpwards, setOpenUpwards] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHoveredOption(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find(o => o.value === value)?.label || 'Select...';

  return (
    <div ref={dropdownRef} style={{ position: 'relative', width: '100%', zIndex: isOpen ? 50 : 1 }}>
      <div 
        onClick={() => {
          if (!isOpen && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;
            setOpenUpwards(spaceBelow < 300 && spaceAbove > spaceBelow);
          }
          setIsOpen(!isOpen);
        }}
        style={{
          padding: '14px 16px',
          borderRadius: 'var(--btn-radius, 8px)',
          background: 'var(--surface-color)',
          color: 'var(--text-main)',
          border: 'var(--border-width, 1px) solid var(--surface-border)',
          fontSize: '0.95rem',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all var(--motion-duration) var(--motion-easing)',
        }}
      >
        <span style={{ fontWeight: 500 }}>{selectedLabel}</span>
        <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform var(--motion-duration)' }} />
      </div>

      {isOpen && (
        <div 
          className="animate-fade-in custom-scrollbar"
          style={{
            position: 'absolute',
            top: openUpwards ? 'auto' : 'calc(100% + 8px)',
            bottom: openUpwards ? 'calc(100% + 8px)' : 'auto',
            left: '0',
            width: '100%',
            maxHeight: '320px',
            overflowY: 'auto',
            padding: '8px',
            borderRadius: 'var(--card-radius, 12px)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            backgroundColor: 'var(--bg-color)',
            backgroundImage: 'var(--bg-gradient)',
            border: 'var(--border-width, 1px) solid var(--surface-border)',
            boxShadow: 'var(--card-shadow, 0 10px 40px rgba(0,0,0,0.8))',
          }}
        >
          {options.map((option) => (
            <DropdownOptionItem 
              key={option.value}
              option={option}
              isActive={value === option.value}
              isHoveringIcon={hoveredOption === option.value}
              onSelect={() => {
                onChange(option.value);
                setIsOpen(false);
                setHoveredOption(null);
              }}
              onIconHoverEnter={() => setHoveredOption(option.value)}
              onIconHoverLeave={() => setHoveredOption(null)}
            />
          ))}
        </div>
      )}

      {/* Render the preview tooltip OUTSIDE the scrollable overflow container to prevent clipping */}
      {isOpen && hoveredOption && (
        <AnimatedPreview 
          type={type} 
          targetValue={hoveredOption} 
          currentValue={value} 
          renderUpwards={openUpwards} 
        />
      )}
    </div>
  );
};
