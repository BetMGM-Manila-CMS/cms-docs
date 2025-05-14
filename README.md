# CMS Knowledge Hub [![netlify status][netlify-image]][netlify-url]

[netlify-image]: https://api.netlify.com/api/v1/badges/6f887127-4ed0-465b-b0c1-381de3614fc9/deploy-status
[netlify-url]: https://app.netlify.com/sites/betmgm-manila-cms-docs/deploys

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator, [TinaCMS](https://tina.io/) an open-source, Git-backed headless content management system (CMS), along with [Cloudinary](https://cloudinary.com/) for the assets.

[Tailwind](https://tailwindcss.com/) is used for the styling, libraries like [Daisy UI](https://daisyui.com/) and [Flowbite](https://flowbite.com/blocks/) was used for some component blocks.

### Installation

```bash
$ npm i
```

### Local Development

#### Prerequisites

- `.env` variables.
- Node version should be `>=18.0`.

#### Docusaurus Development

```bash
$ npm run start
```

This command starts the project standalone with Docusaurus.

#### Docusaurus + Tina Development

```bash
$ npm run tina
```

This command starts the project along with a locally served TinaCMS, allowing changes made in the CMS to be committed only on your local machine.

To access the TinaCMS editor locally, append `/admin` to the local server URL:

```
http://localhost:3000/admin
```

#### Notes

- Search functionality does not work locally. See more [here](https://github.com/praveenn77/docusaurus-lunr-search).

### Build

Run this command before pushing changes to the remote repository to check for any errors that might appear in the production build.

```bash
$ npm run build
```

The build command is configured to always build both Docusaurus and TinaCMS together, ensuring that both modules are aligned.

### Deployment

This project is hosted with [Netlify](https://www.netlify.com/). To deploy new changes locally to the production build, run the following Git push command. This will trigger an automatic build and deployment process on Netlify, ensuring updates are reflected in the live site.

```bash
$ git push origin HEAD
```

## Folder Structure

- `blog` - is the default folder for storing blog pages for docusaurus, but is not currently used.
- `config` - stores json content for data used throghout the project. TinaCMS collections that are type of objects are stored in this folder.
- `docs` - contains the main content for the website, this it the default folder for docusaurus to store documentation content.
- `netlify` - contains serverless functions that is triggered whenever Netlify creates a new build on the project.
  - `api.js` - currently this file contains the function handling the uploading of assets through cloudinary.
- `plugins` - custom Docusaurus plugins are created here.
  - `blog-plugin.js` - is a custom plugin made to create a separate 'blog' dedicated for the Updates page of the documentation.
- `src` - contains some of the main contents for the website such as the components and pages.
  - `components` - contains component files.
  - `css` - contains the css files for the website. Mostly includes overrides for the tailwind classes and additional utility classes.
  - `pages` - contains pages for the website. See [here](https://docusaurus.io/docs/creating-pages) for Docusaurus' guide for creating web pages.
  - `theme` - contains _swizzled_(customized) docusaurus components. See [here](https://docusaurus.io/docs/swizzling) for more info.
- `static` - contains the static files for the website, but is not currently used as assets are fetched from Cloudinary.
- `tina` - all files related to configuring TinaCMS for the website.
  - `collections` - contains collection files which are representation for a type of content (e.g., blog posts, pages, etc.), similarly to tables are for databases. Each file contains how a collection is structured, inside the file is its name, what type it is, what fields it contains, etc... See the TinaCMS collection documentation [here](https://tina.io/docs/reference/collections/) for more details.
  - `config.tsx` - is a file where we can define how TinaCMS interacts with your content, set up collections, and customize Tina's behavior.
- `updates` - is a custom folder that contains the content for the updates section of the page. This is configured iside `plugins/blog-plugin.js`.
- `utils` - contains some utility functions.
- `docusaurus.config.js` - contains configurations for your site some of are basic config such website name, and favicon, navigation links, registering plugins, and many more.

## Analytics

Site analytics is implemented with a single script tag from [GoatCounter](https://www.goatcounter.com/), which is integrated on the site via [Netlify snippet injection](https://docs.netlify.com/site-deploys/post-processing/snippet-injection/). This is mainly for tracking pageviews which can be used to improve user experience and the site's information architecture.
