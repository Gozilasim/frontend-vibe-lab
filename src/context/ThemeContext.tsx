import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type ArtDirection = 'default-nova' | 'editorial-dark' | 'control-room' | 'soft-minimal';
export type VisualDirection = 'default' | 'typography-led' | 'border-led' | 'glassmorphism' | 'neo-brutalism';
export type DesignLanguage = 'default' | 'strict-linear' | 'playful-spring';
export type SurfaceTreatment = 'default' | 'flat-matte' | 'glassmorphism' | 'tonal-layering';

interface ThemeContextType {
  artDirection: ArtDirection;
  setArtDirection: (theme: ArtDirection) => void;
  visualDirection: VisualDirection;
  setVisualDirection: (visual: VisualDirection) => void;
  designLanguage: DesignLanguage;
  setDesignLanguage: (design: DesignLanguage) => void;
  surfaceTreatment: SurfaceTreatment;
  setSurfaceTreatment: (surface: SurfaceTreatment) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [artDirection, setArtDirection] = useState<ArtDirection>(() => {
    return (localStorage.getItem('artDirection') as ArtDirection) || 'default-nova';
  });

  const [visualDirection, setVisualDirection] = useState<VisualDirection>(() => {
    return (localStorage.getItem('visualDirection') as VisualDirection) || 'default';
  });

  const [designLanguage, setDesignLanguage] = useState<DesignLanguage>(() => {
    return (localStorage.getItem('designLanguage') as DesignLanguage) || 'default';
  });

  const [surfaceTreatment, setSurfaceTreatment] = useState<SurfaceTreatment>(() => {
    return (localStorage.getItem('surfaceTreatment') as SurfaceTreatment) || 'default';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', artDirection);
    localStorage.setItem('artDirection', artDirection);
  }, [artDirection]);

  useEffect(() => {
    document.documentElement.setAttribute('data-visual', visualDirection);
    localStorage.setItem('visualDirection', visualDirection);
  }, [visualDirection]);

  useEffect(() => {
    document.documentElement.setAttribute('data-design', designLanguage);
    localStorage.setItem('designLanguage', designLanguage);
  }, [designLanguage]);

  useEffect(() => {
    document.documentElement.setAttribute('data-surface', surfaceTreatment);
    localStorage.setItem('surfaceTreatment', surfaceTreatment);
  }, [surfaceTreatment]);

  return (
    <ThemeContext.Provider value={{ 
      artDirection, setArtDirection, 
      visualDirection, setVisualDirection, 
      designLanguage, setDesignLanguage,
      surfaceTreatment, setSurfaceTreatment
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
