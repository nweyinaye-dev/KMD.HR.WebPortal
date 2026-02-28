## Purpose
This repository is an Angular (v21) admin template. These instructions help AI agents become productive fast by describing the architecture, developer workflows, project-specific conventions, and integration points.

### Big picture
- Entry: [src/main.ts](src/main.ts#L1) — application uses `bootstrapApplication` with `AppRoutingModule` provided via `importProvidersFrom`.
- Routing: [src/app/app-routing.module.ts](src/app/app-routing.module.ts#L1-L40) — top-level routes use layout components (`theme/layout/admin` and `theme/layout/guest`) and heavy use of lazy-loaded components via `loadComponent` and `loadChildren`.
- Shared UI: `src/app/theme/shared/` contains shared standalone components (e.g., `breadcrumb`, `card`, `spinner`) and `SharedModule` which re-exports them for modules.
- Demo content: `src/app/demo/` contains many demo pages and `README.md` files copied from the Pro template — treat these as examples, not authoritative business logic.

### Build / Run / Test
- Use npm scripts in `package.json`:
  - `npm start` — runs `ng serve` (development server)
  - `npm run build` — `ng build` (default production config)
  - `npm run build-prod` — `ng build --configuration production --base-href /demos/.../` (template-specific base-href)
  - `npm test` — runs unit tests
  - `npm run lint` / `npm run lint:fix`
  - `npm run prettier` — formats `src/`
- Note: `angular.json` defines `allowedCommonJsDependencies` and includes `apexcharts` via `scripts` (so some libs are injected globally rather than imported as ES modules).

### Project-specific patterns & conventions
- SCSS-first: default component style is SCSS (see `angular.json` and `tsconfig` configs).
- Lazy-loaded components: prefer `loadComponent(() => import('./path').then(c => c.SomeComponent))` for large demo pages — add routes in `AppRoutingModule`.
- Layout separation: two layouts exist — admin and guest — place application pages under admin child routes and auth pages under guest routes.
- Standalone components: shared UI pieces (e.g., `CardComponent`, `BreadcrumbComponent`) are provided as standalone and imported into `SharedModule` — follow that pattern when creating small reusable UI pieces.
- Demo vs production code: many files under `src/app/demo` are illustrative. If implementing real features, add new feature folders at `src/app/feature-xyz` rather than modifying demo pages.

### Integration points & external dependencies
- Third-party UI: `@ng-bootstrap/ng-bootstrap`, `apexcharts` (see `package.json` and `angular.json`), `ngx-scrollbar` and `mousetrap` are used across theme components.
- API: environment file uses `apiUrl` in `src/environments/environment.ts` and `appVersion` is injected from `package.json`. Update the environment files for backend endpoints.

### Helpful examples (copy-paste friendly)
- Add a lazy route (example from `AppRoutingModule`):

```ts
{
  path: 'analytics',
  loadComponent: () => import('./demo/dashboard/dash-analytics.component').then(c => c.DashAnalyticsComponent)
}
```

- Use `SharedModule` to import reusable UI pieces into your feature module:

```ts
imports: [CommonModule, SharedModule]
```

### What to avoid / gotchas
- Many demo READMEs are part of the free/pro template and are not business logic — avoid changing them unless you intend to replace or remove demo pages.
- `angular.json` includes a global `scripts` entry for `apexcharts` and lists some CommonJS deps in `allowedCommonJsDependencies`. When adding libraries, verify if global script injection or ESM import is required.
- `build-prod` script uses a hard-coded `--base-href` for the template demo hosting path — update or remove when deploying to custom hosts.

### Where to look next (key files)
- `src/main.ts` — bootstrap (see how providers are imported)
- `src/app/app-routing.module.ts` — routing and lazy-loading patterns
- `src/app/theme/` — layout, shared components, and styling
- `package.json` and `angular.json` — build and dependency rules

If any of these sections are unclear or you'd like me to expand examples (routing, adding a new feature module, or adapting production `base-href`), tell me which area to expand.
