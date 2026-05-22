# ECCENCE Luxury Perfume Boutique

> A high‑end, glass‑morphism‑styled e‑commerce site showcasing a curated collection of luxury fragrances.  
> Built with **HTML**, **Vanilla JavaScript**, and **TailwindCSS** (via CDN).  
> The site manages a simple client‑side cart and inventory stored in `vault.js`.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Inventory & Stock](#inventory--stock)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

`ECCENCE` is a static, single‑page‑application‑style boutique that:
- Presents a **luxurious UI** with dark mode, glass‑morphism, and subtle micro‑animations.
- Allows visitors to **browse**, **add items to a cart**, and **checkout** via a custom checkout page.
- Stores cart data and language preference in **localStorage**, keeping the experience entirely client‑side.
- Includes a **mood‑based search** and a **fragrance finder quiz**.

The site is intended for quick local testing or deployment as a static site (GitHub Pages, Netlify, Vercel, etc.).

---

## Features

- **Dynamic inventory** defined in `vault.js` (stock values are displayed in the UI).
- **Cart drawer** that slides in/out with smooth transitions.
- **Multilingual support** (English & Arabic) with RTL handling.
- **Mood‑based navigation** (night, office, fresh, sweet).
- **Fragrance finder quiz** that redirects based on the selected mood.
- **Countdown timer** for flash‑sale / vault close.
- **WhatsApp integration** for quick contact.

---

## Getting Started

1. **Clone / copy the repository** to a local folder (e.g., `c:\Users\Hp\Desktop\essence`).
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox). No build step or server is required because all dependencies are loaded via CDN.
3. Interact with the site – add items to the cart, open the vault, switch languages, etc.

### Optional: Servicing via a local dev server
For a more realistic development experience you can serve the folder with a simple static server:
```bash
# Using Python (comes with Windows)
python -m http.server 8000 --directory c:/Users/Hp/Desktop/essence
# Then open http://localhost:8000 in your browser
```

---

## File Structure
```
essence/
│
├─ index.html          # Home page – hero, mood search, finder, journal, cart drawer
├─ archive.html        # Archive page showing all products
├─ checkout.html       # Simple checkout placeholder page
├─ vault.js            # Core JS: inventory, cart logic, translations, utils
├─ README.md           # **THIS FILE** – project documentation
└─ assets/ (optional) # Images, videos, etc.
```

---

## Inventory & Stock
The inventory lives in `vault.js` as an array of objects. Each product includes a `stock` field representing the number of units remaining in the vault:

| ID | Name | Stock |
|----|------|-------|
| 1 | Acqua di Giò Profondo | 3 |
| 2 | Azzaro Most Wanted | 5 |
| 3 | Xerjoff Erba Pura | 2 |
| 4 | JPG Le Male | 8 |
| 5 | JPG Scandal | 4 |
| 6 | Kayali Vanilla 28 | 6 |
| 7 | Lattafa Art of Universe | 12 |
| 8 | Lattafa Khamrah | 10 |
| 9 | LV Symphony | 1 |
|10 | Valentino Donna | 4 |
|11 | Valentino Uomo | 5 |
|12 | Xerjoff Alexandria II | 2 |

These values are used to display the remaining units and can be edited directly in `vault.js`.

---

## Contributing
Feel free to fork the repository and submit pull requests. Typical contributions include:
- Adding new products or updating stock.
- Enhancing UI/UX (animations, responsive tweaks).
- Refactoring JavaScript for clearer separation of concerns.
- Internationalisation for additional languages.

Please follow these steps:
1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/awesome‑update`).
3. Commit your changes with clear messages.
4. Open a Pull Request describing the changes.

---

## License
This project is released under the **MIT License** – you are free to use, modify, and distribute it.
