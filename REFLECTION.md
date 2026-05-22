# Reflection

## 1. Hardest Bug

The hardest issue involved stale rendering behavior during development. Audit results were appearing before button clicks due to cached hot-reload state. I initially suspected React state persistence bugs, then checked conditional rendering logic and verified state initialization. Eventually I discovered that older component code remained partially cached after hot reloads. Restarting the dev server and fully replacing the component fixed the issue. This taught me how React fast refresh and development caching can create misleading debugging situations.

---

## 2. A Decision I Reversed

Initially I considered generating all audit recommendations entirely using an LLM. Midway through development I reversed this decision because pricing and financial recommendations need deterministic logic. Hardcoded business rules produced more explainable and trustworthy recommendations. I kept AI usage limited to personalized summaries instead.

---

## 3. What I Would Build In Week 2

I would add:
- real vendor pricing APIs,
- PDF export,
- shareable public audit pages,
- authentication,
- analytics dashboards,
- benchmarking against similar startups,
- and AI usage tracking integrations.

I would also improve the audit engine using actual usage telemetry rather than manual inputs alone.

---

## 4. How I Used AI Tools

I used ChatGPT primarily for:
- UI brainstorming,
- debugging assistance,
- architecture suggestions,
- and improving documentation structure.

I did not trust AI-generated pricing information or financial recommendations without manual verification. One example where AI failed was generating unrealistic enterprise pricing assumptions that conflicted with official vendor pricing pages. I manually corrected those inaccuracies.

---

## 5. Self Ratings

### Discipline — 8/10
Maintained consistent daily progress and documentation updates.

### Code Quality — 7/10
Focused on readability and maintainability, though larger-scale abstractions could still improve.

### Design Sense — 8/10
Prioritized clean SaaS-inspired UI patterns and responsive layouts.

### Problem Solving — 8/10
Handled debugging issues systematically and iteratively refined architecture decisions.

### Entrepreneurial Thinking — 7/10
Focused on lead-generation mechanics, realistic user pain points, and practical monetization.