// Matrix data for mathematical operations
export interface MatrixTableData {
    columnHeaders: string[];
    rowHeaders: string[];
    data: string[][];
    topLeftCell?: string;
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
