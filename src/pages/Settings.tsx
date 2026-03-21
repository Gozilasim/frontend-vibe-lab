import { useTheme, type ArtDirection, type VisualDirection, type DesignLanguage, type SurfaceTreatment } from '../context/ThemeContext';
import { Settings as SettingsIcon, Palette, Layers, MousePointerClick, Box } from 'lucide-react';
import { Dropdown } from '../components/Dropdown';

const artOptions = [
  { value: 'default-nova', label: 'Nova Default (Deep Space & Vibrant)' },
  { value: 'editorial-dark', label: 'Editorial Dark (Flat, Calm Background)' },
  { value: 'control-room', label: 'Control Room (High Density, Pure Black)' },
  { value: 'soft-minimal', label: 'Soft Minimal (Clean, Light)' },
];

const visualOptions = [
  { value: 'default', label: 'Default (Matches Base Theme)' },
  { value: 'typography-led', label: 'Typography-Led (No borders/shadows)' },
  { value: 'border-led', label: 'Border-Led (Strict outlines, high definition)' },
  { value: 'glassmorphism', label: 'Glassmorphism (High blur reflection)' },
  { value: 'neo-brutalism', label: 'Neo-Brutalism (Harsh black borders)' },
];

const designOptions = [
  { value: 'default', label: 'Default (Standard Nova Physics)' },
  { value: 'strict-linear', label: 'Strict-Linear (Instant/Harsh, zero bouncing)' },
  { value: 'playful-spring', label: 'Playful-Spring (Exaggerated elastic bounce)' },
];

const surfaceOptions = [
  { value: 'default', label: 'Default (Theme base texture)' },
  { value: 'flat-matte', label: 'Flat Matte (Pure flat, zero shadows/blur)' },
  { value: 'glassmorphism', label: 'Glassmorphism (High blur reflection)' },
  { value: 'tonal-layering', label: 'Tonal Layering (No borders, depth via brightness steps)' },
];

export const Settings = () => {
  const { 
    artDirection, setArtDirection, 
    visualDirection, setVisualDirection, 
    designLanguage, setDesignLanguage,
    surfaceTreatment, setSurfaceTreatment 
  } = useTheme();

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '40px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <SettingsIcon size={32} /> Settings
        </h1>
        <p>Manage your workspace preferences and appearance.</p>
      </header>

      <section className="glass-card" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Art Direction Block */}
        <div className="setting-row">
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ padding: '8px', background: 'var(--primary-glow, rgba(139, 92, 246, 0.2))', borderRadius: '10px', color: 'var(--primary-color)' }}>
                <Palette size={20} />
              </div>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Art Direction (Base Theme)</h2>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Choose the conceptual vibe and hierarchy model for your workspace (Colors, Backgrounds, Global Contrast).
            </p>
          </div>
          <div className="setting-control">
            <Dropdown
              type="art"
              value={artDirection}
              onChange={(val) => setArtDirection(val as ArtDirection)}
              options={artOptions}
            />
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--surface-border)' }} />

        {/* Visual Direction Block */}
        <div className="setting-row">
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ padding: '8px', background: 'var(--primary-glow, rgba(139, 92, 246, 0.2))', borderRadius: '10px', color: 'var(--primary-color)' }}>
                <Layers size={20} />
              </div>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Visual Direction (Surface Strategy)</h2>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Override the structural rules for all surfaces in the UI. This changes borders, shadows, and spacing tactically regardless of your base theme.
            </p>
          </div>
          <div className="setting-control">
            <Dropdown
              type="visual"
              value={visualDirection}
              onChange={(val) => setVisualDirection(val as VisualDirection)}
              options={visualOptions}
            />
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--surface-border)' }} />

        {/* Design Language Block */}
        <div className="setting-row">
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ padding: '8px', background: 'var(--primary-glow, rgba(139, 92, 246, 0.2))', borderRadius: '10px', color: 'var(--primary-color)' }}>
                <MousePointerClick size={20} />
              </div>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Design Language (Interaction & Motion)</h2>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Determine the physical rules of the system. This controls how elements respond to your pointer, their physics, bounce, and transition speed.
            </p>
          </div>
          <div className="setting-control">
            <Dropdown
              type="design"
              value={designLanguage}
              onChange={(val) => setDesignLanguage(val as DesignLanguage)}
              options={designOptions}
            />
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--surface-border)' }} />

        {/* Surface Treatment Block */}
        <div className="setting-row">
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ padding: '8px', background: 'var(--primary-glow, rgba(139, 92, 246, 0.2))', borderRadius: '10px', color: 'var(--primary-color)' }}>
                <Box size={20} />
              </div>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Surface Treatment (Material Quality)</h2>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Define the physical material of identical surfaces. Changes how light interacts with UI (blur, flat matte absorption, subtle depth steps without shadow).
            </p>
          </div>
          <div className="setting-control">
            <Dropdown
              type="surface"
              value={surfaceTreatment}
              onChange={(val) => setSurfaceTreatment(val as SurfaceTreatment)}
              options={surfaceOptions}
            />
          </div>
        </div>

      </section>
    </div>
  );
};
