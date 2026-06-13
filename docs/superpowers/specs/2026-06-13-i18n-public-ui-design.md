# Public UI I18n Design

**Date:** 2026-06-13

## Goal

Add a minimal internationalization layer for public UI text with `zh` and `en`, limited to the left sidebar and other shared layout areas.

## Scope

- Add language state management for `zh` and `en`
- Default to Chinese
- Persist the user's selected language in `localStorage`
- Add a language toggle icon in the top-right header
- Localize shared layout text:
  - Sidebar section labels
  - Shared navigation items such as Dashboard and Charts
  - Header accessibility labels and compact mobile brand text
  - Notification panel text
  - User menu text

## Out of Scope

- Component demo page titles and descriptions in `registry.ts`
- Route-level locale prefixes
- Server-side persistence
- Date, number, or plural formatting libraries
- Replacing all Chinese copy across every demo page

## Recommended Approach

Use a lightweight custom React context instead of adding `react-intl` or `i18next`.

Why:
- The project currently has no i18n infrastructure.
- The requested scope is narrow.
- Adding a full i18n library would increase dependency and configuration cost without solving a real current problem.

## Architecture

### I18n provider

Create a small `I18nProvider` that exposes:
- `locale`
- `setLocale`
- `toggleLocale`
- `t`

The provider should:
- initialize from `localStorage` when available
- fall back to `zh`
- mirror the active locale to `document.documentElement.lang`

### Message dictionaries

Create two locale dictionaries under `src/locales`:
- `zh.ts`
- `en.ts`

Store only shared UI copy required by this task. Keep message keys stable and semantic.

### UI integration

Wrap the app with `I18nProvider` in the root tree, then read translated strings in:
- `AppSidebar`
- `AppHeader`
- `NotificationPanel`
- `UserMenu`

## Key Decisions

### Keep component names in English

Sidebar component entries such as `Accordion`, `Button`, and `Tooltip` should remain unchanged. This matches common component-library navigation and avoids unnecessary churn in the registry.

### Translate only shared group labels and common copy

This includes:
- Overview
- Charts
- Buttons & Actions
- Form Inputs
- Feedback & Status
- Navigation
- Data Display
- Overlays
- Menus
- Layout
- Media & Time

## Validation

1. First load shows Chinese.
2. Clicking the header language button switches between Chinese and English.
3. Refresh preserves the selected language.
4. Sidebar section labels and shared menu items change language correctly.
5. Notification panel and user menu shared text changes language correctly.
6. Existing theme toggle and panel interactions still work.
