const fs = require('fs');
const path = require('path');

// Path to the file
const filePath = path.join(__dirname, 'inputs', 'day1.txt');

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    // Splitting the file content line by line
    const lines = data.split(/\r?\n/);
    day1(lines);
    day2(lines)
});

function day1(lines) {
    let sum = 0;
    lines.forEach((line, index) => {
        let length = line.length;
        let first = 0;
        let second = 0;
        for (let i = 0; i < length; i++) {
            if (!isNaN(line[i])) {
                first = Number(line[i]);
                break;
            }
        }

        for (let i = length - 1; i >= 0; i--) {
            if (!isNaN(line[i])) {
                second = Number(line[i]);
                break;
            }
        }
        let together = first.toString() + second.toString();
        sum += Number(together);
    });

    console.log(sum);
} 

function day2(lines) {

    console.log(sum); 
}
