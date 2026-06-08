# Portfolio

My personal portfolio website — a modern, minimalist single-page site built with Astro and Tailwind CSS. All content lives in a single config file.

## Built With

- **[Astro](https://astro.build/)** — Static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** — Icons
- **TypeScript** — Type-safe configuration

## Development

```bash
npm install       # Install dependencies
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview the production build
```

## Customization

All content is managed through a single file: `src/config.ts`. It controls:

- **Personal Information** — Name, title, description
- **Accent Color** — Primary color theme used site-wide
- **Social Links** — Email, LinkedIn, GitHub (all optional)
- **About** — Personal bio
- **Skills** — List of technical skills
- **Projects** — Project showcase with descriptions and optional links
- **Experience** — Work history with bullet points
- **Education** — Educational background

Sections automatically hide if their data is removed from the config. Projects without a `link` render as static (non-clickable) cards.

## Project Structure

```
src/
├── components/     # Section components (Hero, About, Projects, Experience, Education, Header, Footer)
├── pages/
│   └── index.astro # Single-page layout
└── config.ts       # All content and customization
```

## License

[MIT](./LICENSE.md)
