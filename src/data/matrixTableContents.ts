// Matrix data for mathematical operations
export interface MatrixTableData {
  columnHeaders: string[];
  rowHeaders: string[];
  data: string[][];
  topLeftCell?: string;
}

export const setsMatrixData: MatrixTableData = {
  columnHeaders: ['Notation', 'Beschreibung'],
  rowHeaders: [],
  data: [
    ['$\\{\\}$', 'Eine leere Menge'],
    ['$\\{1;\\ 4;\\ 7\\}$', 'Eine Menge, welche die Zahlen $1, 4$ und $7$ enthält'],
    ['$\\mathbb{N}$', 'Alle ganzen positiven Zahlen $(1; 2; 3…)$'],
    ['$\\mathbb{N}_0$', 'Alle ganzen positiven Zahlen inklusive $0$ $(0; 1; 2…)$'],
    ['$\\mathbb{Z}$', 'Alle ganzen Zahlen $(-2; -1; 0; 1; 2…)$'],
    ['$\\mathbb{Q}$', 'Alle Zahlen, die durch einen Bruch dargestellt werden können $(\\frac12; -\\frac56; \\frac{23}{14}…)$'],
    ['$\\mathbb{R}^+$', 'Alle positiven reellen Zahlen: $]0; \\infty[$'],
    ['$\\mathbb{R}_0^+$', 'Alle positiven reelen Zahlen inklusive $0$: $[0; \\infty[$'],
    ['$\\mathbb{R}$', 'Alle Zahlen auf der Zahlengeraden $(\\sqrt 2; \\pi…)$']
  ]
}

export const intervalsMatrixData: MatrixTableData = {
  columnHeaders: ['Notation', 'Beschreibung'],
  rowHeaders: [],
  data: [
    ['$[0; 1]$', 'Intervall von inklusive $0$ bis inklusive 1'],
    ['$[0; 1[$ oder $[0; 1)$', 'Intervall von inklusive $0$ bis exklusive $1$'],
    ['$]0; 1[$ oder $(0; 1)$', 'Intervall von exklusive $0$ bis exklusive $1$'],
    ['$]{-}\\infty; \\infty[$ oder $({-}\\infty; \\infty)$', 'Unendlichkeiten sind niemals Teil eines Intervalls']
  ]
}

export const setNotationMatrixData: MatrixTableData = {
  columnHeaders: ['Notation', 'Beschreibung'],
  rowHeaders: [],
  data: [
    ['$a \\in \\mathbb{Z}$', '$a$ ist ein Element der ganzen Zahlen. Das heißt $a$ ist eine ganze Zahl.'],
    ['$b \\in \\mathbb{R} \\setminus \\{0\\}$', '$b$ ist ein Element der reellen Zahlen ohne die Zahl $0$. $b$ kann also jeden reellen Wert außer $0$ annehmen.'],
    ['$[0; 1] = \\{x \\in \\mathbb{R} \\mid 0 \\leq x \\leq 1\\}$', 'Das Intervall $[0; 1]$ enthält alle Werte $x$ der reellen Zahlen, für die $0 \\leq x \\leq 1$ gilt.'],
    ['$]{-}\\infty; c[ \\; = \\{x \\in \\mathbb{R} \\mid x < c\\}$', 'Das Intervall $]{-}\\infty; c]$ enthält alle reellen Zahlen, welche kleiner gleich $c$ sind.'],
    ['$\\{x \\mid x = 2k, k \\in \\mathbb{Z}\\}$', 'Die Menge enthält alle geraden Zahlen.']
  ]
}

export const definitionsMatrixData: MatrixTableData = {
  columnHeaders: ['Notation', 'Beschreibung'],
  rowHeaders: [],
  data: [
    ['$y = \\frac{1}{x}, x \\neq 0$', 'Die Gleichung ist für alle reelen Zahlen außer $0$ definiert.'],
    ['$f(x) = \\sqrt{x}, x \\in [0;\\infty[$', 'Die Funktion $f$ ist für alle positiven reellen Zahlen inklusive $0$ definiert.'],
    ['$g(x) = \\ln(x), x > 0$', 'Die Funktion $g$ ist für alle positiven reellen Zahlen definiert.']
  ]
}

export const limesMatrixData: MatrixTableData = {
  columnHeaders: ['Notation', 'Beschreibung'],
  rowHeaders: [],
  data: [
    ['$\\lim_{x \\to +\\infty} \\frac1x = 0$', 'Je mehr sich $x$ an $\\infty$ annähert, desto mehr nähert geht $\\frac{1}{x}$ gegen $0$.'],
    ['$\\lim_{x \\to 0} \\frac{1}{x^2}= + \\infty$', '$\\frac{1}{x^2} \\to +\\infty$ für $x \\to 0$'],
    ['$f(x) \\xrightarrow{\\quad x \\to -\\infty \\quad} \\infty$', '$f(x) \\to + \\infty$ für $x \\to -\\infty$']
  ]
}

export const behaviorInTheInfinite: MatrixTableData = {
  columnHeaders: ['$f(x) = x^5 \\cdot e^{-x}$', '$g(x) = x^6 \\cdot e^{-x}$', '$h(x) = \\frac{e^x}{x^4}$', '$i(x) = e^x - x^3$'],
  rowHeaders: ['$x \\rightarrow +\\infty$', '$x \\rightarrow -\\infty$'],
  data: [
    ['$\\rightarrow 0$', '$\\rightarrow 0$', '$\\rightarrow +\\infty$', '$\\rightarrow +\\infty$'],
    ['$\\rightarrow -\\infty$', '$\\rightarrow +\\infty$', '$\\rightarrow 0$', '$\\rightarrow +\\infty$']
  ]
}

export const stemFunctions1: MatrixTableData = {
  columnHeaders: [],
  rowHeaders: ['$f(x)$', '$F(x)$'],
  data: [
    ['$x^2$', '$x$', '$1$', '$x^{-1}=\\frac{1}{x}$', '$x^{-2}=\\frac{1}{x^2}$'],
    ['$\\frac{1}{3}x^3$', '$\\frac{1}{2}x^2$', '$x$', '$\\ln(|x|)$', '$-x^{-1}$']
  ]
}

export const stemFunctions2: MatrixTableData = {
  columnHeaders: [],
  rowHeaders: ['$f(x)$', '$F(x)$'],
  data: [
    ['$\\sin(x)$', '$\\cos(x)$', '$e^x$', '$\\sqrt{x}=x^{\\frac{1}{2}}$'],
    ['$-\\cos(x)$', '$\\sin(x)$', '$e^x$', '$\\frac23\\sqrt{x^3} = \\frac23 \\cdot x^\\frac32$']
  ]
}

export const determineStemFunctions: MatrixTableData = {
  columnHeaders: [],
  rowHeaders: ['$f(x)$', '$F(x)$'],
  data: [
    ['$x^v$', '$c \\cdot g(x)$', '$g(x) + h(x)$', '$f(x) = g(ax + b)$'],
    ['$\\frac1{v+1}\\cdot x^{v+1}$', '$c\\cdot G(X)$', '$G(x) + H(x)$', '$F(x) =\\frac1a\\cdot G(ax+b)$']
  ]
}

export const horizontalAsymptotes: MatrixTableData = {
  columnHeaders: [],
  rowHeaders: ['gebrochenrationale Funktion', 'Polstellen', 'senkrechte Asymptote', 'waagerechte Asymptote'],
  data: [
    ['$f(x) = \\frac{4x-1}{3x+3}$', '$g(x) = \\frac{x^2-1}{x^3-8} + 4$', '$h(x) = \\frac{x^2-2}{x-1}$', '$i(x) = \\frac{-x^2+2x-3}{x^2-x-2}$'],
    ['$x = -1$', '$x = 2$', '$x = 1$', '$x_1 = -1, x_2 = 2$'],
    ['$x = -1$', '$x = 2$', '$x = 1$', '$x_1 = -1 \\text{ & } x_2 = 2$'],
    ['$y = \\frac{4}{3}$', '$y = 4$<br>nicht y=0 wegen der +4', 'keine, da Zählergrad > Nennergrad', '$y = -1$']
  ]
}

export const probabilityDistribution: MatrixTableData = {
  columnHeaders: [],
  rowHeaders: ['Gewinn $k$', '$P(X = k)$'],
  data: [
    ['$-1$', '$0$', '$4$'],
    ['$\\frac{9}{16}$', '$\\frac{7}{16}$', '$\\frac{1}{16}$'],
  ]
}

export const leftSidedTest: MatrixTableData = {
  columnHeaders: ['$g_1$', '$P^{50}_\\frac12(X \\leq g_1)$', ''],
  rowHeaders: [],
  data: [
    ['$\\mathbf{17}$', '$\\mathbf{0{,}016}$', '<strong>kleiner als $\\mathbf{2{,}5\\%}$</strong>'],
    ['$18$', '$0{,}032$', 'größer als $2{,}5\\%$']
  ]
}

export const rightSidedTest: MatrixTableData = {
  columnHeaders: ['$g_2\\color{red}-1$', '$P^{50}_\\frac12(X \\ {\\color{red}\\leq} \\ g_2 {\\color{red}-1})$', ''],
  rowHeaders: [],
  data: [
    ['$31$', '$0{,}968$', 'kleiner als $97{,}5\\%$'],
    ['$\\mathbf{32}$', '$\\mathbf{0{,}984}$', '<strong>größer als $\\mathbf{97{,}5\\%}$</strong>']
  ]
}

export const firstAndSecondError: MatrixTableData = {
  columnHeaders: ['$H_0$ ist wahr', '$H_0$ ist falsch'],
  rowHeaders: ['$H_0$ wird verworfen', '$H_0$ wird nicht verworfen'],
  data: [
    ['Fehler 1. Art', '$\\checkmark$'],
    ['Fehler 1. Art', '$\\checkmark$'],
    ['$\\checkmark$', 'Fehler 2. Art']
  ]
}

export const exampleMeasurements: MatrixTableData = {
  columnHeaders: [],
  rowHeaders: ['Messwerte'],
  data: [['$11$', '$13$', '$15$', '$12$', '$14$', '$12$']]
}

export const sigmaRules: MatrixTableData = {
  columnHeaders: ['Intervall $I$', '$P(X \\in I)$'],
  rowHeaders: [],
  data: [
    ['$[\\mu - \\sigma; \\mu + \\sigma]$', '$\\approx 0{,}683$'],
    ['$[\\mu - 2 \\sigma; \\mu + 2 \\sigma]$', '$\\approx 0{,}954$'],
    ['$[\\mu - 3 \\sigma; \\mu + 3 \\sigma]$', '$\\approx 0{,}997$'],
  ]
}
