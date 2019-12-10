const baseFontSize = 16;

const colors = {
  black: '#000',
  darkGray: '#6c7e8b',
  gray: '#8897a2',
};

const fontWeights = {
  'thin': 100,
  'extra-light': 200,
  'light': 300,
  'regular': 400,
  'medium': 500,
  'semibold': 600,
  'bold': 700,
  'extra-bold': 800,
};

const rem = size => {
  return `${(size / baseFontSize) * 1}rem`;
};

const listStyles = {
  listStylePosition: 'inside',
  marginBottom: rem(16),
  maxWidth: rem(700),
};

const codeStyles = {
  fontSize: rem(11),
  background: 'transparent',
  backgroundColor: colors.darkGray,
  border: `1px solid transparent`,
  borderRadius: 2,
  color: colors.black,
  display: 'inline',
  position: 'relative',
};


const styles = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  margin: '0 auto',
  overflow: 'scroll',
  padding: '1rem',
  position: 'relative',
  width: '100%',

  h1: {
    fontSize: rem(36),
    fontWeight: fontWeights.bold,
    letterSpacing: rem(-0.5),
    lineHeight: rem(40),
    marginBottom: rem(24),
    marginTop: rem(12),
  },

  h2: {
    fontSize: rem(28),
    fontWeight: fontWeights.bold,
    letterSpacing: rem(-0.5),
    lineHeight: rem(40),
    marginBottom: rem(24),
    marginTop: rem(12),
  },

  h3: {
    fontSize: rem(20),
    fontWeight: fontWeights.semibold,
    letterSpacing: rem(-0.5),
    lineHeight: rem(30),
    marginBottom: rem(20),
    marginTop: rem(12),
  },

  h4: {
    fontSize: rem(16),
    fontWeight: fontWeights.semibold,
    letterSpacing: rem(-0.5),
    textTransform: 'uppercase',
  },

  li: {
    fontSize: baseFontSize,
    lineHeight: 1.4,
  },

  ul: {
    ...listStyles,
    listStyleType: 'disc',
  },

  ol: {
    ...listStyles,
    listStyleType: 'decimal',
  },

  p: {
    fontSize: rem(baseFontSize),
    lineHeight: 1.4,
    marginBottom: rem(16),
    maxWidth: rem(700),
  },

  pre: {
    border: `1px solid #dfe3e6`,
    borderRadius: 3,
    fontFamily: 'monospace',
    lineHeight: 1.4,
    marginBottom: rem(16),
    overflow: 'scroll',
    padding: 0.5,
  },

  code: {
    fontSize: rem(baseFontSize),
    fontFamily: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
    lineHeight: 1.5,
  },

  table: {
    fontSize: rem(14),
    borderSpacing: rem(2),
    lineHeight: 1.4,
    marginBottom: rem(16),
    width: '100%',
  },

  thead: {
    th: {
      borderBottom: `2px solid ${colors.gray}`
    },
    td: {
      borderBottom: `2px solid ${colors.gray}`,
    },
  },

  th: {
    backgroundColor: 'transparent',
    borderBottom: `2px solid ${colors.black}`,
    fontWeight: fontWeights.bold,
    padding: `${rem(16)} ${rem(48)} ${rem(16)} 0`,
    textAlign: 'left',
    verticalAlign: 'center',

    code: {
      ...codeStyles,
    },
  },

  td: {
    padding: `${rem(16)} ${rem(48)} ${rem(16)} 0`,
    verticalAlign: 'center',

    code: {
      ...codeStyles,
    },
  },

  tr: {
    borderBottom: `1px solid ${colors.gray}`,
  },
};

export default styles;
