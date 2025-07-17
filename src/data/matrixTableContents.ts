// Matrix data for mathematical operations
export interface MatrixTableData {
  columnHeaders: string[];
  rowHeaders: string[];
  data: string[][];
  topLeftCell?: string;
}

// Example: Basic arithmetic operations table
export const arithmeticOperationsMatrix: MatrixTableData = {
  columnHeaders: ['$+$', '$-$', '$\\times$', '$\\div$'],
  rowHeaders: ['$a$', '$b$', '$c$'],
  data: [
    ['$a + a$', '$a - a$', '$a \\times a$', '$a \\div a$'],
    ['$b + b$', '$b - b$', '$b \\times b$', '$b \\div b$'],
    ['$c + c$', '$c - c$', '$c \\times c$', '$c \\div c$']
  ],
  topLeftCell: 'Operations'
};

// Example: Trigonometric functions
export const trigonometricMatrix: MatrixTableData = {
  columnHeaders: ['$0°$', '$30°$', '$45°$', '$60°$', '$90°$'],
  rowHeaders: ['$\\sin$', '$\\cos$', '$\\tan$'],
  data: [
    ['$0$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$1$'],
    ['$1$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{1}{2}$', '$0$'],
    ['$0$', '$\\frac{1}{\\sqrt{3}}$', '$1$', '$\\sqrt{3}$', '$\\text{undefined}$']
  ],
  topLeftCell: 'Angle'
};

// Example: Derivative rules
export const derivativeRulesMatrix: MatrixTableData = {
  columnHeaders: ['$f(x)$', '$f\'(x)$', 'Rule Name'],
  rowHeaders: ['Power', 'Exponential', 'Logarithmic', 'Trigonometric'],
  data: [
    ['$x^n$', '$n \\cdot x^{n-1}$', 'Power Rule'],
    ['$e^x$', '$e^x$', 'Exponential Rule'],
    ['$\\ln(x)$', '$\\frac{1}{x}$', 'Logarithmic Rule'],
    ['$\\sin(x)$', '$\\cos(x)$', 'Sine Rule']
  ],
  topLeftCell: 'Function Type'
};
