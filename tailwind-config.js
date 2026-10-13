// Brand colours and fonts for Horizon Mortgage Brokers.
// Loaded on every page, right after the Tailwind CDN script.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        horizon: '#244B6E', // Horizon Navy: headings, nav, CTA band
        deep: '#16324D',    // Deep Navy: heroes, button text
        sage: '#7FAF93',    // Sage Green: accent lines
        forest: '#4F8A6B',  // Forest Sage: icons, checks, links on white
        mist: '#DCEBE2',    // Mist Green: calculator band, icon circles
        amber: '#E8A33D',   // Amber: primary buttons only
        cloud: '#F5F8FA',   // Cloud: alternate sections, footer
        fog: '#DDE5EA',     // Fog: borders, dividers
        slate: '#5B6B7A',   // Slate: small / muted text
        ink: '#1E2B37'      // Ink: body text
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  }
};
