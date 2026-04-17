# Design System Strategy: Atmospheric Logic

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"Atmospheric Logic."** 

In the world of high-end software solutions, we must move away from the "heavy" tech aesthetic of dark grids and rigid borders. Instead, we interpret the "Cloud" as a weightless, expansive environment. This system rejects the standard "out-of-the-box" template look in favor of an editorial layout that breathes. We achieve this through **Intentional Asymmetry**—where content is weighted to one side to create dynamic tension—and **Tonal Depth**, where the UI feels like floating layers of mist rather than flat pixels on a screen.

The goal is to convey "Software as a Service" not as a tool, but as an invisible, high-performance infrastructure.

---

## 2. Colors: The Palette of the Stratosphere
This system utilizes a sophisticated light-theory palette. We move beyond simple "white and blue" to a layered hierarchy of cool neutrals and vibrant sky-tones.

### The Hierarchy
*   **Primary (#006591):** Used for authoritative actions and brand-defining moments.
*   **Primary Container (#0ea5e9):** Our "Sky" accent. Use this for soft highlights and background washes.
*   **Secondary (#006c4f):** An organic jade-green used sparingly for success states and growth-related data points.
*   **Surface Tiers:** Use `surface_container_lowest` (#ffffff) for the most elevated interactive elements and `surface` (#fbf8fc) for the main canvas.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning or layout containment. Traditional "boxes" make software feel dated. Instead:
*   Define boundaries through **Background Color Shifts**. For example, a `surface_container_low` section should sit adjacent to a `surface` background to define a change in context.
*   Use **Tonal Transitions**. Let the eye perceive the edge through the subtle shift from a warm white to a soft lavender-grey.

### The "Glass & Gradient" Rule
To elevate the "Cloud" metaphor:
*   **Glassmorphism:** For floating navigation bars or modal overlays, use `surface` at 70% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** Use subtle linear gradients for primary CTAs, transitioning from `primary` (#006591) to `primary_container` (#0ea5e9) at a 135-degree angle. This creates a "glow" that flat colors cannot replicate.

---

## 3. Typography: Editorial Authority
We use a high-contrast typographic pairing to balance technical precision with human-centric design.

*   **The Voice (Plus Jakarta Sans):** Used for `display` and `headline` tokens. This typeface provides a modern, geometric clarity. Large scales (e.g., `display-lg` at 3.5rem) should be used with tight letter-spacing (-0.02em) to create an "Editorial" impact.
*   **The Engine (Inter):** Used for `body`, `title`, and `label` tokens. Inter provides the high-performance legibility required for complex software data.

**Hierarchy Tip:** Always maintain a significant jump between `headline-lg` and `body-lg`. The "gap" creates the whitespace that defines high-end design.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to hide poor layout; we use them to simulate light passing through atmosphere.

*   **The Layering Principle:** Stacking determines importance. 
    1.  **Level 0 (Background):** `surface`
    2.  **Level 1 (Sectioning):** `surface_container_low`
    3.  **Level 2 (Active Cards):** `surface_container_lowest` (Pure white)
*   **Ambient Shadows:** If an element must float, use a "Cloud Shadow." Color: `on_surface` (#1b1b1e) at **4% opacity**. Blur: `40px`. Spread: `0px`. It should feel like a soft hum of depth, not a harsh drop-shadow.
*   **The "Ghost Border" Fallback:** For accessibility in form fields, use a "Ghost Border." Use the `outline_variant` token at **15% opacity**. This provides a guide for the eye without creating a "cage" for the content.

---

## 5. Components: Minimalist Primitives

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), white text, `roundness-md` (0.75rem).
*   **Secondary:** `surface_container_high` fill with `primary` text. No border.
*   **Tertiary:** Ghost style. No fill, `primary` text, with a subtle `primary_fixed` background on hover.

### Input Fields
Avoid the "four-sided box." Use a `surface_container_lowest` fill with a "Ghost Border" on the bottom edge only, or a very subtle `roundness-sm` container. Labels must use `label-md` in `on_surface_variant` for a sophisticated, subdued look.

### Cards & Lists
*   **Constraint:** Dividers are forbidden.
*   **Execution:** Separate list items using `16px` of vertical whitespace. For high-density data, use alternating tonal shifts between `surface` and `surface_container_low`.
*   **Cards:** Use `roundness-xl` (1.5rem) for a friendly, modern tech feel.

### Additional Signature Component: The "Atmospheric Glow"
For feature highlights, place a large, soft-focus radial gradient of `primary_fixed` (#c9e6ff) at 10% opacity behind the component to draw the user's eye without using a heavy border.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Whitespace:** If you think there is enough space, add 20% more.
*   **Use Asymmetry:** Place a `headline-lg` on the left and leave the right 40% of the container empty or occupied by a single, high-quality "floating" asset.
*   **Nesting:** Place `surface_container_highest` elements inside `surface_container_low` to create "inset" depth.

### Don't:
*   **Don't use 100% Black:** Never use #000000. Use `on_background` (#1b1b1e) for text to maintain the soft, cloud-inspired contrast.
*   **Don't use Dividers:** If you feel the need for a line, use a margin instead.
*   **Don't Over-round:** Stick to the `roundness-md` (0.75rem) for functional elements (buttons/inputs) and `xl` (1.5rem) for containers. Mixing too many radii breaks the "Logic" of the system.