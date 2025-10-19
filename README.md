# Mini Tools

A collection of useful web tools built with SolidJS. This is a static web application designed to be hosted on GitHub Pages.

## Features

### Tabata Timer
A high-intensity interval training timer with customizable work/rest periods and rounds.

- Set custom work and rest durations (1-300 seconds)
- Configure number of rounds (1-20)
- Visual phase indicators (Work/Rest)
- Start, pause, and reset functionality
- Modern, minimalist design with Nord color scheme

## Tech Stack

- **SolidJS** - Reactive UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Nord Color Scheme** - Beautiful, easy-on-the-eyes design

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

1. Create a GitHub repository
2. Update the `base` path in `vite.config.ts` to match your repository name
3. Push your code to GitHub
4. Run the deployment command:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch, which GitHub Pages will automatically serve.

## Design Philosophy

- **Minimalist** - Clean, uncluttered interface
- **Accessible** - Easy to use and navigate
- **Responsive** - Works on desktop and mobile
- **Fast** - Optimized for performance
- **Nord Theme** - Consistent, beautiful color palette

## Adding New Tools

To add a new tool:

1. Create a new component in `src/components/`
2. Add it to the navigation in `src/App.tsx`
3. Create a route and corresponding page logic
4. Style it consistently with the Nord theme

## License

MIT License - feel free to use this project as a starting point for your own tools!
