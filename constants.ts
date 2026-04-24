// GH Pages: relative paths (resolved by <base href="/portfolio/">). All other envs: absolute paths.
export const IS_GITHUB_PAGES = process.env.GITHUB_PAGES_DEPLOY === 'true';
export const BASE_URL = IS_GITHUB_PAGES ? 'https://blossomou.github.io/portfolio' : '';
