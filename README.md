# Iwwwan-labs mobile template

Starter for cross-platform mobile apps. Expo (SDK 52) with expo-router, React
Native, and TypeScript in strict mode, plus Jest, Testing Library, ESLint,
Prettier, and CI.

## Getting started

```bash
npm install
npm start
```

Then press `i` for the iOS simulator, `a` for an Android emulator, or `w` for
the web. You can also scan the QR code with Expo Go.

## Scripts

| Command                | What it does                        |
| ---------------------- | ----------------------------------- |
| `npm start`            | Start the Expo dev server           |
| `npm run android`      | Start and open the Android emulator |
| `npm run ios`          | Start and open the iOS simulator    |
| `npm run web`          | Start in the browser                |
| `npm test`             | Run the Jest suite once             |
| `npm run test:watch`   | Run tests in watch mode             |
| `npm run lint`         | Run ESLint                          |
| `npm run typecheck`    | Typecheck without emitting          |
| `npm run format`       | Format with Prettier                |
| `npm run format:check` | Check formatting without writing    |

## Layout

```text
app/                     <- expo-router routes (file-based)
├── _layout.tsx          <- root stack layout
└── index.tsx            <- home screen
src/
├── components/
│   ├── Screen.tsx       <- safe-area screen shell
│   └── Counter.tsx      <- example interactive component
├── theme.ts             <- colors, spacing, radius
└── __tests__/
    └── app.test.tsx     <- component tests
```

## Conventions

- Routes live in `app/`. Everything else lives in `src/`.
- The `@/` alias points at `src/`, configured in both `tsconfig.json` and
  `babel.config.js` so the bundler and TypeScript agree.
- Tests live in `src/__tests__/` and use Testing Library queries by role and
  text, not test IDs.
- Colors and spacing come from `src/theme.ts`. Avoid hard-coded values in
  components.

## Testing

Jest runs with the `jest-expo` preset, so React Native and Expo modules work
without extra mocks. Interactions use `fireEvent` from Testing Library.

## Using this as a template

1. Rename `name` and `slug` in `app.json`, and update the bundle identifiers.
2. Rename the package in `package.json`.
3. Replace `app/index.tsx` with your first real screen.

## Contributing

See [`Iwwwan-labs/.github/CONTRIBUTING.md`](https://github.com/Iwwwan-labs/.github/blob/main/CONTRIBUTING.md).

## License

[MIT](LICENSE) © Iwwwan-labs
