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
