import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viewsDir = path.join(__dirname, '../src/views');
const dataDir = path.join(__dirname, '../src/data');
const chaptersJsonPath = path.join(dataDir, 'chapters.json');

const vueFilePattern = /\.vue$/;
const contentSectionPattern = /<ContentSection[^>]*title\s*=\s*['"]([^'"]+)['"]/g;

const excludedFiles = [
    'App.vue',
    'Report.vue'
];

function getAllVueFiles(dir) {
    try {
        const files = fs.readdirSync(dir);
        const vueFiles = files
            .filter(f => vueFilePattern.test(f) && !excludedFiles.includes(f))
            .map(f => path.join(dir, f));
        return vueFiles;
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error.message);
        throw error;
    }
}

function extractTitlesFromFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const titles = [];
        let match;
        while ((match = contentSectionPattern.exec(content)) !== null) {
            titles.push(match[1]);
        }
        return titles;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error.message);
        throw error;
    }
}

function writeTitlesToJsonFile(allTitles) {
    try {
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }
        fs.writeFileSync(chaptersJsonPath, JSON.stringify(allTitles, null, 2), 'utf-8');
        console.log(`Wrote chapters to ${chaptersJsonPath}`);
    } catch (error) {
        console.error(`Error writing chapters JSON:`, error.message);
        throw error;
    }
}

function main() {
    try {
        const vueFiles = getAllVueFiles(viewsDir);

        if (vueFiles.length === 0) {
            console.warn('No Vue files found in the specified directory. Exiting.');
            return;
        }

        const allTitles = {};
        vueFiles.forEach(file => {
            const titles = extractTitlesFromFile(file);
            const baseName = path.basename(file, '.vue');
            allTitles[baseName] = titles;
        });

        writeTitlesToJsonFile(allTitles);
    } catch (error) {
        console.error('An unhandled error occurred in main:', error.message);
        if (error.stack) {
            console.error(error.stack);
        }
        process.exit(1);
    }
}

main();