export const setsContent = [
    {
        notation: '$\\{\\}$',
        description: 'Eine leere Menge'
    },
    {
        notation: '$\\{1;\\ 4;\\ 7\\}$',
        description: 'Eine Menge, welche die Zahlen $1, 4$ und $7$ enthält'
    },
    {
        notation: '$\\mathbb{N}$',
        description: 'Alle ganzen positiven Zahlen $(1; 2; 3…)$'
    },
    {
        notation: '$\\mathbb{N}_0$',
        description: 'Alle ganzen positiven Zahlen inklusive $0$ $(0; 1; 2…)$'
    },
    {
        notation: '$\\mathbb{Z}$',
        description: 'Alle ganzen Zahlen $(-2; -1; 0; 1; 2…)$'
    },
    {
        notation: '$\\mathbb{Q}$',
        description: 'Alle Zahlen, die durch einen Bruch dargestellt werden können $(\\frac12; -\\frac56; \\frac{23}{14}…)$'
    },
    {
        notation: '$\\mathbb{R}^+$',
        description: 'Alle positiven reellen Zahlen: $]0; \\infty[$'
    },
    {
        notation: '$\\mathbb{R}_0^+$',
        description: 'Alle positiven reelen Zahlen inklusive $0$: $[0; \\infty[$'
    },
    {
        notation: '$\\mathbb{R}$',
        description: 'Alle Zahlen auf der Zahlengeraden $(\\sqrt 2; \\pi…)$'
    },
];

export const intervalsContent = [
    {
        notation: '$[0; 1]$',
        description: 'Intervall von inklusive $0$ bis inklusive 1'
    },
    {
        notation: '$[0; 1[$ oder $[0; 1)$',
        description: 'Intervall von inklusive $0$ bis exklusive $1$'
    },
    {
        notation: '$]0; 1[$ oder $(0; 1)$',
        description: 'Intervall von exklusive $0$ bis exklusive $1$'
    },
    {
        notation: '$]{-}\\infty; \\infty[$ oder $({-}\\infty; \\infty)$',
        description: 'Unendlichkeiten sind niemals Teil eines Intervalls'
    },
];

export const setNotationContent = [
    {
        notation: '$a \\in \\mathbb{Z}$',
        description: '$a$ ist ein Element der ganzen Zahlen. Das heißt $a$ ist eine ganze Zahl.'
    },
    {
        notation: '$b \\in \\mathbb{R} \\setminus \\{0\\}$',
        description: '$b$ ist ein Element der reellen Zahlen ohne die Zahl $0$. $b$ kann also jeden reellen Wert außer $0$ annehmen.'
    },
    {
        notation: '$[0; 1] = \\{x \\in \\mathbb{R} \\mid 0 \\leq x \\leq 1\\}$',
        description: 'Das Intervall $[0; 1]$ enthält alle Werte $x$ der reellen Zahlen, für die $0 \\leq x \\leq 1$ gilt.'
    },
    {
        notation: '$]{-}\\infty; c[ = \\{x \\in \\mathbb{R} \\mid x < c\\}$',
        description: 'Das Intervall $]{-}\\infty; c]$ enthält alle reellen Zahlen, welche kleiner gleich $c$ sind.'
    },
    {
        notation: '$\\{x \\mid x = 2k, k \\in \\mathbb{Z}\\}$',
        description: 'Die Menge enthält alle geraden Zahlen.'
    },
];

export const definitionsContent = [
    {
        notation: '$y = \\frac{1}{x}, x \\neq 0$',
        description: 'Die Gleichung ist für alle reelen Zahlen außer $0$ definiert.'
    },
    {
        notation: '$f(x) = \\sqrt{x}, x \\in [0;\\infty[$',
        description: 'Die Funktion $f$ ist für alle positiven reellen Zahlen inklusive $0$ definiert.'
    },
    {
        notation: '$g(x) = \\ln(x), x > 0$',
        description: 'Die Funktion $g$ ist für alle positiven reellen Zahlen definiert.'
    },
];

export const limesContent = [
    {
        notation: '$\\lim_{x \\to +\\infty} \\frac1x = 0$',
        description: 'Je mehr sich $x$ an $\\infty$ annähert, desto mehr nähert geht $\\frac{1}{x}$ gegen $0$.'
    },
    {
        notation: '$\\lim_{x \\to 0} \\frac{1}{x^2}= + \\infty$',
        description: '$\\frac{1}{x^2} \\to +\\infty$ für $x \\to 0$'
    },
    {
        notation: '$f(x) \\xrightarrow{\\quad x \\to -\\infty \\quad} \\infty$',
        description: '$f(x) \\to + \\infty$ für $x \\to -\\infty$'
    },
];
