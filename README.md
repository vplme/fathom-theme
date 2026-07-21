# Fathom

A terminal-flavoured Hugo theme for small studios. One bordered panel, mono
labels, an oklch colour system with a light/dark toggle, and three content
types: **people**, **showcase** and **journal**.

Implemented from the `Fathom Theme.dc.html` design in the Claude Design
project.

## Structure

- **Home** — hero, the team as a 3-up grid, and the two most recent projects.
- **`/showcase`** — project cards (type badge, client, year, blurb).
- **`/journal`** — post list with category badges and reading time; single
  posts get a header image slot and an author card.
- **`/people/<name>`** — person pages with contact block, long bio, and the
  projects they worked on.

## Usage

```bash
git submodule add https://github.com/vplme/fathom-theme themes/fathom-theme
echo 'theme = "fathom-theme"' >> hugo.toml
```

Requires Hugo ≥ 0.146.

### Run the example site

```bash
hugo server --source exampleSite --themesDir ../..
```

### Site config

```toml
[params]
  prompt = "~/fathom-studio"           # header label; falls back to site title
  subtitle = "// currently taking projects for Q4 2026"  # hero tagline
  # (availability is still read as a fallback for older sites)
```

### Content

People (`content/people/<key>.md`) — the filename is the key that projects
reference:

```yaml
title: "Maya Okonkwo"
role: "Design & Direction"
accent: "green"        # green | blue | amber
email: "maya@fathom.studio"
handle: "@mayaok"
website: "mayaokonkwo.com"
bio: "Short bio for the home-page card."
weight: 1
```

The page body is the long bio shown on the person page.

Projects (`content/showcase/*.md`):

```yaml
title: "Halo"
client: "Meridian Bank"
year: 2025
category: "Product"   # don't use `type` — it's reserved by Hugo and
                      # breaks the showcase template lookup
accent: "blue"
person: "lior"         # people/<key> — shown on that person's page
# or, for projects with several makers:
# people: ["lior", "maya"]
description: "Card blurb. Falls back to the body's summary if omitted."
link: "https://example.org/"   # optional live-project link on the detail page
weight: 1              # ordering; first two appear on the home page
```

The page body is the project write-up on the detail page (cards link to
it), which also shows a "made-by/" section for the project's people and
the optional live link.

Posts (`content/journal/*.md`):

```yaml
title: "Designing calm software"
date: 2026-06-12
category: "Essay"
author: "maya"         # people/<key> — supplies name, role and accent
description: "Excerpt shown in the journal list."
```

### Images

Every image slot renders a striped placeholder until you provide a real one.
Convert a page to a bundle (`halo/index.md`) and drop in a file named
`cover.*` (or `thumb.*`) — it is picked up for the card, the post header and
the author avatar automatically.

## License

[MIT](LICENSE)
