const isGithubPages = process.env.GITHUB_PAGES_DEPLOY === 'true';

module.exports = {
  reactStrictMode: true,
  basePath: isGithubPages ? '/portfolio' : '',
};
