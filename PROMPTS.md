# PROMPTS — history

This file contains the full prompt history used to produce the result (per test requirements).

## 2025-12-23

### 1) Plan
**Prompt:**

> Напиши пошаговый план для след задачи: "нужно сделать тестовое задание - главную страницу (1 страница) https://adapty.io/ @Browser  на React. Хэдер можно не делать,результат нужен максимум за 1 час работы. Нужно прислать гитхаб проект + развернутую страницу + историю промптов". Используем Vite + React + TypeScript, Tailwind CSS, Framer Motion, React Icons / lucide-react, Деплой: Vercel, История промптов: PROMPTS.md (+опционально /prompts/).

**Result:** Delivered a 1-hour plan with timeboxes, structure, commit strategy, and final checklist.

### 2) Implement (project bootstrap)
**Prompt:**

> Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself. To-do's from the plan have already been created...

**Result:**
- Scaffolded Vite `react-ts` project.
- Installed deps: Tailwind, Framer Motion, lucide-react, clsx, tailwind-merge.
- Adjusted versions for compatibility:
  - **Vite** downgraded to v6.x to avoid Node engine constraints from Vite 7.
  - **Tailwind** downgraded to v3.x to use the classic CLI config flow.
- Added base UI primitives: `Container` / `Button` / `Badge` / `SectionTitle`.

### 3) Landing sections
**Prompt:**

> Build Hero + Features, animate with Framer Motion, keep responsive.

**Result:**
- Implemented **Hero** (headline, CTA, product mock, motion).
- Implemented **Features** (role cards + whileInView + hover motion).
- Added supporting sections: **SocialProof**, **CTA**, **Footer**.

### 4) Docs
**Prompt:**

> Add README + prompt history.

**Result:**
- Added [`README.md`](README.md)
- Added this [`PROMPTS.md`](PROMPTS.md)
- Added optional `/prompts/` versions (see folder).

