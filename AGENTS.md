# AGENTS.md

Guidance for AI agents working in this repository.

## What this is

A starter template for mobile apps: Expo SDK 52, expo-router, React Native 0.76,
strict TypeScript, Jest with `jest-expo`, ESLint, Prettier, and CI.

## Commands

```bash
npm ci                # install exactly from the lockfile
npm start             # Expo dev server
npm run lint          # ESLint
npm run format:check  # Prettier check
npm run typecheck     # tsc --noEmit
npm test              # Jest, single run
```

Always run `lint`, `typecheck`, and `test` before considering a change complete.
This template has no headless build step; the dev server is the build.

## Layout

- `app/` — expo-router routes. Every file here becomes a route.
- `src/components/` — shared components.
- `src/theme.ts` — design tokens.
- `src/__tests__/` — Jest tests.

## Rules

- Add screens as files under `app/`. Do not create a separate navigation stack.
- The `@/` alias must stay in sync between `tsconfig.json` and `babel.config.js`.
  Changing one without the other breaks either the editor or the bundler.
- Import colors, spacing, and radius from `src/theme.ts`. Do not hard-code them.
- TypeScript is strict. Do not weaken `tsconfig.json` to make code compile.
- Do not use `any`. If unavoidable, add a comment explaining why.
- Justify every new dependency in the pull request. Prefer Expo-managed packages
  installed with `npx expo install` so versions match the SDK.
- Never commit secrets. Use `app.config.ts` with `process.env` for build-time
  configuration, and keep `.env` gitignored.

## Testing

- Test components, not routes. Rendering a route pulls in the whole router.
- Query by role and text with Testing Library. Avoid `testID` unless there is no
  accessible query.
- Use `fireEvent` for interactions, wrapped in `act` when state updates async.

Follow the organization conventions in
[`Iwwwan-labs/.github`](https://github.com/Iwwwan-labs/.github/blob/main/docs/CONVENTIONS.md).
