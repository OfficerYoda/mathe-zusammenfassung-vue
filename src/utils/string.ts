const GERMAN_MAP: Record<string, string> = {
    'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss',
    'Ä': 'Ae', 'Ö': 'Oe', 'Ü': 'Ue'
};

const GREEK_MAP: Record<string, string> = {
    'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'i', 'θ': 'th',
    'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': 'x', 'ο': 'o', 'π': 'p',
    'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't', 'υ': 'y', 'φ': 'f', 'χ': 'ch', 'ψ': 'ps', 'ω': 'o',
    'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z', 'Η': 'I', 'Θ': 'Th',
    'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M', 'Ν': 'N', 'Ξ': 'X', 'Ο': 'O', 'Π': 'P',
    'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'Y', 'Φ': 'F', 'Χ': 'Ch', 'Ψ': 'Ps', 'Ω': 'O'
};

function transliterate(str: string): string {
    return str
        .replace(/[äöüßÄÖÜ]/g, c => GERMAN_MAP[c])
        .replace(/[α-ωΑ-Ως]/g, c => GREEK_MAP[c] || c);
}

export function kebabUriCase(str: string): string {
    let s = str;

    s = transliterate(s); // Transliterate before normalization or lowercasing for better control over specific chars
    s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Normalize and remove diacritics
    s = s.toLowerCase(); // Convert to lowercase
    s = s.replace(/[^a-z0-9]+/g, '-'); // Replace non-alphanumeric with hyphens (kebab-case)
    s = s.replace(/(^-|-$)/g, ''); // Remove leading/trailing hyphens

    return s;
}