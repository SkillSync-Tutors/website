import { exec } from 'child_process';

const filename = process.argv[2];

if (!filename) {
  console.error('Please provide a filename.');
  process.exit(1);
}

exec(`prettier --write "${filename}"`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});
