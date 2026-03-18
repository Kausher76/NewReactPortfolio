interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-icon">
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

export default ThemeToggle;