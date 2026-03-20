# Core Design & Implementation Principles

## 1. Setting Dropdowns & Interactive Contrast Previews
Every settings dropdown option must include a trailing icon designed for contrast previews (e.g., an Information or Eye icon).
- Hovering over this icon MUST trigger an interactive window/tooltip.
- This interactive window should dynamically animate the contrast between the currently active design state and the specifically hovered option.
- The goal is to provide immediate, native, visual proof of what the setting actually changes before the user commits to clicking it.

## 2. Granular Detail in Theme Architecture (Dark/Light Modes)
When implementing or switching between Dark/Light modes, or different Art/Visual Directions, extreme attention must be paid to structural CSS details.
- **Do not simply flip text and background colors.**
- Ensure that low-level properties like inline borders, box-shadows, glow effects, empty states, and hover scales adapt perfectly to the specific logic of the active theme.
- **Example**: If switching to a brutalism theme, ensuring hard-coded `1px` borders scale globally to `3px`, rather than remaining thin and disjointed. Use CSS variables aggressively to maintain structural decoupling.

## 3. Viewport-Aware Dropdowns with Overflow Scrolling (Collision & Bounds)
- **Prohibit infinite height growth**: Dropdown menus MUST NOT grow infinitely to fit their content, which breaks screen boundaries. You must enforce a strict maximum height (e.g., `maxHeight: '320px'`) and enable safe overflow boundaries via `overflowY: 'auto'`.
- **Dynamic spatial detection**: Rely on `getBoundingClientRect()` to compute available vertical space. The menu should only deploy **upwards** if the bottom space is critically constrained (<300px) AND the top space is greater than the bottom space.
- **Custom phantom scrollbars**: For any floating panels requiring scrollbars, you must apply the `.custom-scrollbar` CSS class. Strictly prohibit native browser scrollbars from degrading the application's aesthetic purity.

## 4. AnimatedPreview Positioning & Clipping Prevention
- The preview tooltip **MUST NOT** expand towards the nearest screen edge. When the Dropdown trigger is positioned closely to the right edge, the popup window must forcefully deploy towards the **left** (`right: calc(100% + 16px)`).
- **CRITICAL OVERFLOW RULE**: The `<AnimatedPreview>` component (or any decorative absolute pop-out) MUST NOT be rendered inside an `overflowY: 'auto'` container. Doing so causes the browser to instantly clip and hide the overflowing tooltip. It must be rendered outside the scrollable menu container, anchored as a sibling directly inside the origin relative wrapper.
