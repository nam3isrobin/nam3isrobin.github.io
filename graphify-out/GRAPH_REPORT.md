# Graph Report - .  (2026-07-04)

## Corpus Check
- Corpus is ~7,053 words - fits in a single context window. You may not need a graph.

## Summary
- 172 nodes · 192 edges · 20 communities (17 shown, 3 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_App and Layout Structure|App and Layout Structure]]
- [[_COMMUNITY_App TypeScript Configuration|App TypeScript Configuration]]
- [[_COMMUNITY_UI Components and Utilities|UI Components and Utilities]]
- [[_COMMUNITY_Node TypeScript Configuration|Node TypeScript Configuration]]
- [[_COMMUNITY_Vite Templates and Linters|Vite Templates and Linters]]
- [[_COMMUNITY_Vite Development Dependencies|Vite Development Dependencies]]
- [[_COMMUNITY_Project Dependencies|Project Dependencies]]
- [[_COMMUNITY_Package Configuration|Package Configuration]]
- [[_COMMUNITY_Skills Section Data|Skills Section Data]]
- [[_COMMUNITY_Oxlint Linter Settings|Oxlint Linter Settings]]
- [[_COMMUNITY_Brand SVG Icons|Brand SVG Icons]]
- [[_COMMUNITY_Hero Isometric Artwork|Hero Isometric Artwork]]
- [[_COMMUNITY_UI Action SVGs|UI Action SVGs]]
- [[_COMMUNITY_React Branding Graphics|React Branding Graphics]]
- [[_COMMUNITY_Vite Branding Graphics|Vite Branding Graphics]]
- [[_COMMUNITY_Projects Portfolio Data|Projects Portfolio Data]]
- [[_COMMUNITY_TypeScript References|TypeScript References]]
- [[_COMMUNITY_Favicon Branding Graphics|Favicon Branding Graphics]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 21 edges
2. `compilerOptions` - 15 edges
3. `Vite React TypeScript Template` - 6 edges
4. `scripts` - 5 edges
5. `cn()` - 5 edges
6. `Brand Icon Style` - 4 edges
7. `rules` - 3 edges
8. `Magnetic()` - 3 edges
9. `Index HTML` - 3 edges
10. `@vitejs/plugin-react` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Index HTML` --conceptually_related_to--> `Vite React TypeScript Template`  [INFERRED]
  index.html → README.md
- `ProjectCard()` --calls--> `cn()`  [INFERRED]
  src/components/sections/Projects.tsx → src/lib/utils.ts
- `ScrollReveal()` --calls--> `cn()`  [INFERRED]
  src/components/ui/ScrollReveal.tsx → src/lib/utils.ts
- `SplitText()` --calls--> `cn()`  [INFERRED]
  src/components/ui/SplitText.tsx → src/lib/utils.ts
- `Magnetic()` --calls--> `cn()`  [INFERRED]
  src/components/ui/Magnetic.tsx → src/lib/utils.ts

## Import Cycles
- 1-file cycle: `src/components/sections/Projects.tsx -> src/components/sections/Projects.tsx`
- 1-file cycle: `src/components/sections/Skills.tsx -> src/components/sections/Skills.tsx`

## Hyperedges (group relationships)
- **Vite React Plugins and Compilers** — readme_vite_plugin_react, readme_vite_plugin_react_swc, readme_oxc, readme_swc [EXTRACTED 1.00]
- **Vite Template Linting Configuration** — readme_vite_react_ts_template, readme_oxlint, readme_oxlint_tsgolint [EXTRACTED 1.00]
- **Application Entrypoint Initialization Flow** — index_html, index_root, src_main_entry [EXTRACTED 1.00]
- **Portfolio Icon Assets** — public_icons_bluesky_icon, public_icons_discord_icon, public_icons_documentation_icon, public_icons_github_icon, public_icons_social_icon, public_icons_x_icon [INFERRED 0.95]
- **Isometric Layer Stack** — src_assets_hero_top_layer, src_assets_hero_bottom_layer, src_assets_hero_layer_architecture [INFERRED 0.85]
- **React Atom Structure** — src_assets_react_logo, src_assets_react_nucleus, src_assets_react_orbits [EXTRACTED 1.00]
- **Vite Logo Composition** — src_assets_vite_logo, src_assets_vite_lightning_bolt, src_assets_vite_parentheses [EXTRACTED 1.00]

## Communities (20 total, 3 thin omitted)

### Community 0 - "App and Layout Structure"
Cohesion: 0.11
Nodes (12): Footer(), Navbar(), navLinks, About(), features, stats, Contact(), FormData (+4 more)

### Community 1 - "App TypeScript Configuration"
Cohesion: 0.08
Nodes (23): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, baseUrl, erasableSyntaxOnly, ignoreDeprecations, jsx, lib (+15 more)

### Community 2 - "UI Components and Utilities"
Cohesion: 0.18
Nodes (12): Hero(), ProjectCard(), Projects(), GlassButton, GlassButtonProps, Magnetic(), MagneticProps, ScrollReveal() (+4 more)

### Community 3 - "Node TypeScript Configuration"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 4 - "Vite Templates and Linters"
Cohesion: 0.18
Nodes (13): Index HTML, Main Script Reference, Root DOM Container, Oxc Compiler, Oxlint Linter, Type-Aware Lint Configuration, React Compiler, README Documentation (+5 more)

### Community 5 - "Vite Development Dependencies"
Cohesion: 0.17
Nodes (12): devDependencies, autoprefixer, oxlint, postcss, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+4 more)

### Community 6 - "Project Dependencies"
Cohesion: 0.18
Nodes (11): dependencies, clsx, lucide-react, motion, react, react-dom, react-hook-form, @react-three/drei (+3 more)

### Community 7 - "Package Configuration"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 8 - "Skills Section Data"
Cohesion: 0.29
Nodes (3): Skills(), Skill, skills

### Community 9 - "Oxlint Linter Settings"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 10 - "Brand SVG Icons"
Cohesion: 0.40
Nodes (5): Bluesky Icon, Brand Icon Style, Discord Icon, GitHub Icon, X (Twitter) Icon

### Community 11 - "Hero Isometric Artwork"
Cohesion: 0.67
Nodes (4): Bottom Textured Platform, Hero Image Asset, Layered Architecture Representation, Top Isometric Platform

### Community 12 - "UI Action SVGs"
Cohesion: 0.67
Nodes (3): Documentation Icon, Social Icon, UI Action Icon Style

### Community 13 - "React Branding Graphics"
Cohesion: 0.67
Nodes (3): React Logo, React Logo Nucleus, React Logo Orbits

### Community 14 - "Vite Branding Graphics"
Cohesion: 0.67
Nodes (3): Vite Lightning Bolt, Vite Logo with Parentheses, Parentheses Border

## Knowledge Gaps
- **104 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+99 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Vite Development Dependencies` to `Package Configuration`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Project Dependencies` to `Package Configuration`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _104 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App and Layout Structure` be split into smaller, more focused modules?**
  _Cohesion score 0.10666666666666667 - nodes in this community are weakly interconnected._
- **Should `App TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Node TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._