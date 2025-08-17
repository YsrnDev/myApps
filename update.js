const fs = require('fs');
const https = require('https');

const username = 'ysrndev'; // Ganti dengan username GitHub Anda
const url = `https://api.github.com/users/${username}/repos`;

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    try {
      const repos = JSON.parse(data);
      const simpleRepos = repos.map(repo => ({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description
      }));
      fs.writeFileSync('repos.json', JSON.stringify(simpleRepos, null, 2));
      console.log('Successfully created repos.json');
    } catch (error) {
      console.error('Error parsing JSON:', error);
      process.exit(1);
    }
  });
}).on('error', (err) => {
  console.error('Error fetching data:', err);
  process.exit(1);
});
