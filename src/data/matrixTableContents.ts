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
        ['$]{-}\\infty; c[ = \\{x \\in \\mathbb{R} \\mid x < c\\}$', 'Das Intervall $]{-}\\infty; c]$ enthält alle reellen Zahlen, welche kleiner gleich $c$ sind.'],
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
