# Shun Akiyama Personal Website Build Brief

## 1. Website Purpose

The main purpose of this personal website is to showcase Shun Akiyama's personal projects and create a polished space where recruiters, companies, and other visitors can see what Shun has built, what technical skills he has, and what kind of person he is.

The website should present Shun as both:

- A technical intern / builder with software, embedded, firmware, robotics, and hardware interests.
- A real person with personal interests, photos, personality, and a clear story.

The site will be linked on LinkedIn so recruiters and other visitors can easily explore Shun's work and potentially reach out.

## 2. Target Audience

The main audience is recruiters from:

- Software companies
- Hardware companies
- Embedded systems companies
- Firmware teams
- Robotics companies
- Technical internship programs

The site should also work for a broader LinkedIn audience, including classmates, clubs, professors, engineers, and anyone who wants to understand Shun's projects and personality.

## 3. Display Name

Use the full name:

**Shun Akiyama**

Any editable titles, headlines, taglines, and long-form copy can use obvious placeholders for now. The site should be built so these can be easily edited later in React/data files.

## 4. Overall Concept

The website should be a single-page retro desktop/window experience inspired by the provided reference screenshots.

The site should feel like opening a computer/browser window. Clicking app/folder-style buttons should change the content shown inside the main retro window.

Sections like Projects, Experience, Resume, and Home/About should feel like different folders/apps loading inside the same main interface.

The website should look very close to the reference style, but with Shun's unique twists:

- More technical and robotics-inspired
- More black, white, grey, and darker colors
- More professional and recruiter-friendly
- Dark grid background
- Dark Chrome/Google-style browser window
- Right-side folder navigation
- Bottom Apple-style dock for external links

## 5. Required Main Sections / Apps

The website should include these main sections:

### 5.1 Home / About / Contact

The homepage, about page, and contact page should be combined into one section.

This section should include:

- A photo of Shun on the left
- An About Me text area on the right
- Space to write about personal background, interests, and technical focus
- A flexible area below for extra personal content
- Optional fun/lifestyle photos, such as skiing or other personal photos
- Contact/external links near the bottom through dock icons

External/contact links should include placeholders for:

- GitHub
- LinkedIn
- Email
- Resume shortcut
- Instagram

### 5.2 Projects

The Projects section should show all personal projects from over the years.

It should support:

- Project name
- Date/year
- Short description
- Tech stack
- Skills used
- Resume-style bullet points
- Photos
- Videos
- GitHub link

Projects should be displayed as a grid of cards. Each card should show basic information first. When clicked, the card should expand downward to show more detailed information.

Expanded cards should show images/videos directly inside the card, not in a separate lightbox.

Multiple project cards should be allowed to stay open at the same time.

### 5.3 Experience

The Experience section should use the same expandable card style as the Projects section.

Each collapsed experience card should show:

- Company/team/club name
- Role title
- Date range
- Location

Each expanded experience card should show:

- Short description
- Resume-style bullet points
- Skills/technologies used
- Optional media/photos if needed

Multiple experience cards should be allowed to stay open at the same time.

### 5.4 Resume

The Resume section should include both:

- An embedded PDF viewer inside the retro window
- A Download Resume button

The resume should be a one-page resume PDF. The page should also include a fallback message if the PDF preview fails to load, such as:

> Resume preview could not load. Please use the download button.

### 5.5 Blog / Notes

Do not include a Blog or Notes section for the first version.

## 6. Navigation Structure

### 6.1 Right-Side Folder Navigation

The right-side navigation should use folder icons like the reference website.

Required folder buttons:

- Home / About Me
- Projects
- Experience
- Resume

The right-side folder navigation should always stay visible/fixed on the right, even when the content inside the retro window scrolls.

When a folder is clicked/selected, the folder icon should change from a closed folder icon to an open folder icon.

### 6.2 Bottom Dock

The bottom should feel like an Apple-style dock.

The dock should use app-style icons for external links such as:

- GitHub
- LinkedIn
- Instagram
- Email
- Resume

Dock icons should bounce when clicked, then redirect the user to the correct external link.

The bottom dock should always stay visible/fixed at the bottom, even when the retro window content scrolls.

## 7. Layout Requirements

### 7.1 Main Browser Window

The main site should use a dark browser-style retro window, similar to Chrome/Google dark mode.

The browser window should include:

- Top-left red, yellow, and green window buttons
- No fake address bar
- No fake search bar

The main retro browser window should be mostly fixed and centered on desktop like the reference, but responsive on smaller screens.

### 7.2 Scrolling

Only the content inside the retro browser window should scroll.

The outer desktop/background should stay fixed. This should make the site feel like a real app/window.

### 7.3 Section Titles

Each section should clearly show a large section title inside the retro window, like the reference screenshots.

Example:

```text
Projects
Click a card to expand.

[ Project Card ] [ Project Card ] [ Project Card ]
```

Projects and Experience sections should include a small helper note near the top, such as:

> Click a card to expand.

## 8. Home / About / Contact Layout

The Home/About section should use this structure:

```text
[ Photo of Shun ]     [ About Me text area ]
                      [ Personal interests ]
                      [ Technical focus ]

[ Extra flexible personal content area ]
[ Optional fun/lifestyle photos ]

[ Tech stack / skills section ]

[ Bottom dock remains fixed ]
```

The top section should have:

- Photo on the left
- Text on the right

The lower area should support:

- Additional personal writing
- Fun photos
- Lifestyle photos
- Optional captions

At the bottom / dock area, include shortcut icons for:

- GitHub
- LinkedIn
- Email
- Resume
- Instagram

## 9. Tech Stack / Skills Section

A tech stack section should appear inside the Home/About page, below the main photo + intro section.

It should be similar to the reference image provided by the user: a clean categorized list with icons, tool names, and short descriptions.

Categories:

### Software

Placeholder examples:

- React
- TypeScript
- JavaScript
- Python
- HTML/CSS

### Embedded / Firmware

Placeholder examples:

- C
- C++
- Arduino
- ESP32
- STM32

### Tools

Placeholder examples:

- Git
- GitHub
- VS Code / Cursor
- Altium Designer
- Linux

The tech stack should not just be a random icon grid. It should feel polished, organized, and recruiter-friendly.

## 10. Projects Page Requirements

### 10.1 Project Filters

The Projects page should include filter tabs:

- All
- Software
- Embedded / Robotics / Firmware

The default view should be **All**.

### 10.2 Project Card Format

Each project card should support:

- Project name
- Date/year
- Short description
- Tech stack
- Skills used
- Resume-style bullet points
- Photos
- Videos
- GitHub link

### 10.3 Project Card Interaction

Project cards should:

- Display in a grid
- Expand smoothly when clicked
- Expand downward instead of opening a separate modal
- Allow multiple cards to remain open at once
- Show photos/videos directly inside the expanded card
- Allow the user to keep scrolling to the next project without closing the current one

### 10.4 Video Support

The site should support both:

- Local/uploaded video files
- Embedded YouTube/Vimeo links

## 11. Experience Page Requirements

Experience cards should use the same general structure as project cards.

### 11.1 Collapsed Experience Card

Show:

- Company/team/club name
- Role title
- Date range
- Location

### 11.2 Expanded Experience Card

Show:

- Short description
- Resume-style bullet points
- Skills/technologies used
- Optional images/media if needed

### 11.3 Experience Card Interaction

Experience cards should:

- Display in a grid
- Expand smoothly when clicked
- Allow multiple cards open at the same time
- Not require a plus/minus marker

## 12. Resume Page Requirements

The Resume page should include:

- Large section title: `Resume`
- Embedded PDF viewer inside the retro window
- Download Resume button
- Fallback message if the PDF does not load

Use a placeholder resume PDF path for now, such as:

```text
/public/assets/resume-placeholder.pdf
```

The code should make it easy to replace this with the real one-page resume later.

## 13. Visual Style

The visual style should be:

- Retro desktop-inspired
- Technical
- Robotics/engineering-inspired
- Dark
- Professional
- Clean enough for recruiters

Preferred direction:

- Dark grid background
- Dark browser-style window
- Black/white/grey base colors
- Section-specific muted accent colors
- Modern professional UI
- More Google/Apple dark mode than pixel-art retro

## 14. Color Direction

Use different accent colors by section while keeping the site cohesive and dark.

Suggested accents:

- Home / About: dark neutral base with white/grey text and one clean accent
- Projects: muted blue or cyan accent
- Experience: muted green accent
- Resume: neutral grey / white accent
- Dock icons: app-style icons with subtle hover glow
- Folder selected state: open-folder icon with section-specific accent highlight

## 15. Font Direction

The typography should feel modern and professional, similar to Google/Apple UI.

Do not use a heavy pixel or terminal font as the main font.

Recommended direction:

- Body text: modern sans-serif, such as Inter, Geist, SF-like system font, or similar
- Headings: clean bold modern font, possibly with slightly elegant styling
- Optional monospace accents only for small labels, tags, or tech badges

Times New Roman was mentioned as a familiar example, but a cleaner modern font is preferred if it looks better.

## 16. Animations and Interactions

Use subtle, professional animations.

Required interactions:

- Folder icons switch from closed to open when selected
- Dock icons bounce when clicked, then redirect
- Project cards expand smoothly
- Experience cards expand smoothly
- Window content fades/disappears and reappears when switching sections, similar to switching Mac windows

No sound effects should be used.

## 17. Startup / Boot Screen

The website should include a short fake computer boot/startup screen.

The boot screen should feel similar to a MacBook startup screen, but instead of the Apple logo, it should use an editable/custom icon placeholder that can be replaced later.

The boot screen should remain visible until the user interacts.

Exit conditions:

- User presses any keyboard key
- User presses the Enter key
- User clicks an on-screen Enter button

This makes it work on both desktop and mobile.

No sound should play.

## 18. Mobile Design

The mobile layout should keep the same desktop concept, but compressed vertically.

Mobile should still include:

- Retro browser window
- Dark grid background
- Right-side folder navigation
- Bottom dock icons
- Content inside the window

The goal is **desktop but squished**, not a totally different mobile design.

The retro window should become more vertical and fit the phone screen. The right-side folders and bottom dock should still be present and usable.

## 19. Dark Mode

The site should stay in permanent dark mode.

No light/dark mode toggle is needed.

## 20. Data-Driven Content

The website should be easy to maintain by editing data files instead of editing UI components directly.

Recommended editable data files:

```text
src/data/projects.ts
src/data/experience.ts
src/data/techStack.ts
src/data/links.ts
src/data/siteContent.ts
```

Use obvious placeholder content such as:

- `Project Title Here`
- `Company Name Here`
- `Description goes here`
- `Resume bullet point here`
- `Tech stack item here`
- `Image placeholder here`

## 21. Assets and Placeholder Slots

The project should include placeholder asset slots/files for:

- Profile photo
- Boot icon
- Project photos
- Experience photos
- Resume PDF
- Dock icons
- Folder icons
- Videos

Recommended placeholder paths:

```text
/public/assets/profile-placeholder.png
/public/assets/boot-icon-placeholder.png
/public/assets/project-placeholder.png
/public/assets/experience-placeholder.png
/public/assets/resume-placeholder.pdf
/public/assets/videos/demo-placeholder.mp4
/public/assets/icons/folder-closed.png
/public/assets/icons/folder-open.png
/public/assets/icons/github.png
/public/assets/icons/linkedin.png
/public/assets/icons/instagram.png
/public/assets/icons/email.png
/public/assets/icons/resume.png
```

Important note for Cursor:

> The user will provide reference screenshots/photos to Cursor as well. Build the site so the screenshots can be used as visual inspiration, and create clear placeholder asset paths that can be replaced with the user's real photos later.

## 22. Icons

Use both:

- Real icon libraries for general UI icons
- Custom image icons for folders, dock apps, and boot screen icons

Recommended:

- Use `lucide-react` for simple UI icons if needed
- Use custom images/assets for the retro folder icons, dock icons, and boot icon

## 23. Code Comments

Include helpful comments in the code showing where to edit content.

Examples:

```tsx
// Edit project cards in src/data/projects.ts
// Replace this image with your real profile photo
// Update dock links in src/data/links.ts
// Replace resume-placeholder.pdf with your actual resume
```

## 24. Accessibility / SEO / Analytics

For the first version:

- No detailed accessibility work is required beyond normal basic HTML structure
- No advanced keyboard navigation requirement
- No SEO/social preview setup required
- No favicon/social preview image setup required
- No analytics required now

Analytics can be added later if needed, but do not include it in the first build.

## 25. Deployment

Deploy the site on **Vercel**.

Use the default Vercel link for now.

The project should still be structured so a custom domain can be added later.

## 26. Footer

Include a small footer/signature with obvious placeholder text.

Example:

```text
Built by Shun Akiyama
Made with React + TypeScript
© 2026 Shun Akiyama
```

## 27. Recommended Tech Stack

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion / Framer Motion-style animations
- Lucide React
- PDF viewer or embedded PDF approach

Recommended package direction:

```text
react
react-dom
typescript
vite
tailwindcss
@tailwindcss/vite
motion
lucide-react
```

For the resume PDF, either use a simple embedded PDF/object iframe approach first, or a PDF viewer package only if necessary.

## 28. Recommended Setup Commands

Use these commands to create the project:

```bash
npm create vite@latest shun-portfolio -- --template react-ts
cd shun-portfolio
npm install
npm install tailwindcss @tailwindcss/vite motion lucide-react
npm run dev
```

Then configure Tailwind for Vite.

## 29. Recommended File / Folder Structure

```text
shun-portfolio/
  public/
    assets/
      profile-placeholder.png
      boot-icon-placeholder.png
      project-placeholder.png
      experience-placeholder.png
      resume-placeholder.pdf
      videos/
        demo-placeholder.mp4
      icons/
        folder-closed.png
        folder-open.png
        github.png
        linkedin.png
        instagram.png
        email.png
        resume.png
  src/
    assets/
    components/
      BootScreen.tsx
      DesktopBackground.tsx
      BrowserWindow.tsx
      WindowTopBar.tsx
      FolderNav.tsx
      Dock.tsx
      DockIcon.tsx
      FolderButton.tsx
      ExpandableCard.tsx
      ProjectCard.tsx
      ExperienceCard.tsx
      TechStackGroup.tsx
      MediaEmbed.tsx
      Footer.tsx
    sections/
      HomeAbout.tsx
      Projects.tsx
      Experience.tsx
      Resume.tsx
    data/
      projects.ts
      experience.ts
      techStack.ts
      links.ts
      siteContent.ts
    types/
      index.ts
    App.tsx
    main.tsx
    index.css
  package.json
  vite.config.ts
  tsconfig.json
```

## 30. Suggested Data Types

Use TypeScript types similar to this:

```ts
export type ProjectCategory = 'software' | 'embedded';

export type MediaItem = {
  type: 'image' | 'localVideo' | 'embedVideo';
  src: string;
  alt?: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  category: ProjectCategory;
  shortDescription: string;
  techStack: string[];
  skills: string[];
  bullets: string[];
  media: MediaItem[];
  githubUrl?: string;
};

export type Experience = {
  id: string;
  organization: string;
  role: string;
  dateRange: string;
  location: string;
  shortDescription: string;
  bullets: string[];
  technologies: string[];
  media?: MediaItem[];
};

export type TechStackItem = {
  name: string;
  description: string;
  icon?: string;
};

export type TechStackGroup = {
  title: 'Software' | 'Embedded / Firmware' | 'Tools';
  items: TechStackItem[];
};

export type ExternalLink = {
  label: string;
  url: string;
  icon: string;
};
```

## 31. Full Cursor Build Prompt

Copy and paste this into Cursor after creating the Vite React TypeScript project.

```text
Build a complete personal portfolio website for Shun Akiyama using React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide React.

The user will also provide reference screenshots/photos to Cursor. Use them as visual inspiration. The goal is to create a website very similar in overall interaction/style to the reference website, but with Shun's custom direction: darker, more technical, robotics-inspired, and more professional. Use placeholder images/assets for now so the user can replace them later.

Overall concept:
- Single-page retro desktop/browser-window portfolio.
- Dark grid background.
- Centered dark browser-style window similar to Chrome/Google dark mode.
- Top-left red/yellow/green window buttons only.
- No fake address bar and no fake search bar.
- Right-side fixed folder navigation.
- Bottom fixed Apple-style dock for external links.
- Only the content inside the browser window should scroll. The outer desktop background stays fixed.
- Permanent dark mode only.

Main sections/apps:
1. Home / About / Contact combined
2. Projects
3. Experience
4. Resume

Do not add a Blog/Notes section.

Navigation:
- Use right-side folder icons for Home/About, Projects, Experience, and Resume.
- When a folder is selected, switch from a closed folder icon to an open folder icon.
- Keep the right folder navigation always visible/fixed.
- Use bottom dock icons for GitHub, LinkedIn, Instagram, Email, and Resume.
- Dock icons should bounce when clicked, then redirect to the correct link.
- Keep the bottom dock always visible/fixed.

Startup screen:
- Add a fake computer boot screen before the portfolio appears.
- It should feel like a MacBook startup screen, but use an editable/custom boot icon placeholder instead of an Apple logo.
- Stay on the boot screen until the user presses any key, presses Enter, or clicks an on-screen Enter button.
- No sound effects.

Home/About/Contact section:
- Large section title at the top, similar to the reference.
- Top layout: profile photo on the left, About Me text on the right.
- Use obvious placeholder copy that the user can edit later.
- Include space under this top layout for extra personal writing and optional fun/lifestyle photos.
- Include a tech stack section below the intro, similar to the reference image the user provided: clean categorized list with icons, names, and short descriptions.
- Tech stack categories: Software, Embedded / Firmware, Tools.
- Include contact/external link access through the bottom dock.

Projects section:
- Large `Projects` title at the top.
- Include a small note near the top: `Click a card to expand.`
- Add filter tabs: All, Software, Embedded / Robotics / Firmware.
- Default filter is All.
- Display projects in a grid of cards.
- Each collapsed card shows: project name, date/year, short description, and tech stack.
- Clicking a card expands it downward inside the grid/list, not as a modal.
- Multiple project cards can be open at the same time.
- Expanded card shows: resume-style bullet points, skills used, more complete tech stack, photos, videos, and GitHub link.
- Media should display directly inside the expanded card.
- Support both local video files and embedded YouTube/Vimeo links.
- Use obvious placeholder projects like `Project Title Here`.

Experience section:
- Large `Experience` title at the top.
- Include a small note near the top: `Click a card to expand.`
- Display experiences in a grid of cards similar to project cards.
- Collapsed experience cards show: company/team/club name, role title, date range, and location.
- Expanded cards show: short description, resume-style bullet points, and skills/technologies used.
- Multiple experience cards can stay open at once.
- Use obvious placeholders like `Company Name Here` and `Role Title Here`.

Resume section:
- Large `Resume` title at the top.
- Include an embedded PDF viewer inside the retro window.
- Include a Download Resume button.
- Use `/assets/resume-placeholder.pdf` as the placeholder path.
- Include a fallback message if the PDF preview fails: `Resume preview could not load. Please use the download button.`

Visual style:
- Dark technical professional style.
- Retro desktop-inspired, but not childish or overly pastel.
- Use black, white, grey, and muted accent colors.
- Background should be a dark grid.
- Main window should be dark and clean, like Google/Chrome dark mode.
- Section-specific accents:
  - Home/About: neutral dark with clean accent
  - Projects: muted blue/cyan
  - Experience: muted green
  - Resume: neutral grey/white
  - Selected folder: open-folder icon with matching section accent
- Typography should feel modern and professional, similar to Google/Apple UI. Use a clean modern sans-serif such as Inter/Geist/system font. Avoid pixel fonts as the main font.

Animations:
- Use subtle professional Motion animations.
- Folder selected state changes from closed to open icon.
- Dock icons bounce on click before redirecting.
- Project and experience cards expand smoothly.
- Window content fades/disappears and reappears when switching sections, like switching between Mac windows.
- No sound effects.

Mobile layout:
- Keep the same desktop concept but compressed vertically.
- The retro browser window should remain visible.
- Right-side folder navigation should still exist on the right side.
- Bottom dock should still exist.
- The layout should feel like `desktop but squished`, not a totally different mobile site.

Data-driven structure:
- Store content in editable data files rather than hardcoding everything into components.
- Create:
  - `src/data/projects.ts`
  - `src/data/experience.ts`
  - `src/data/techStack.ts`
  - `src/data/links.ts`
  - `src/data/siteContent.ts`
- Use obvious placeholders so the user can easily replace content later.

Assets:
- Use placeholder asset paths:
  - `/assets/profile-placeholder.png`
  - `/assets/boot-icon-placeholder.png`
  - `/assets/project-placeholder.png`
  - `/assets/experience-placeholder.png`
  - `/assets/resume-placeholder.pdf`
  - `/assets/videos/demo-placeholder.mp4`
  - `/assets/icons/folder-closed.png`
  - `/assets/icons/folder-open.png`
  - `/assets/icons/github.png`
  - `/assets/icons/linkedin.png`
  - `/assets/icons/instagram.png`
  - `/assets/icons/email.png`
  - `/assets/icons/resume.png`

Icons:
- Use both icon libraries and custom image icons.
- Use Lucide React for basic UI icons if needed.
- Use custom image paths for folder icons, dock icons, and boot icon.

Footer:
- Add a small footer/signature with placeholder text:
  - `Built by Shun Akiyama`
  - `Made with React + TypeScript`
  - `© 2026 Shun Akiyama`

Code quality:
- Use reusable components.
- Use clean TypeScript types.
- Keep components organized.
- Add comments showing where to edit content, replace assets, update data files, and modify links.
- Make it easy for the user to edit later.

Recommended file structure:
- `src/components/BootScreen.tsx`
- `src/components/DesktopBackground.tsx`
- `src/components/BrowserWindow.tsx`
- `src/components/WindowTopBar.tsx`
- `src/components/FolderNav.tsx`
- `src/components/Dock.tsx`
- `src/components/DockIcon.tsx`
- `src/components/FolderButton.tsx`
- `src/components/ExpandableCard.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/ExperienceCard.tsx`
- `src/components/TechStackGroup.tsx`
- `src/components/MediaEmbed.tsx`
- `src/components/Footer.tsx`
- `src/sections/HomeAbout.tsx`
- `src/sections/Projects.tsx`
- `src/sections/Experience.tsx`
- `src/sections/Resume.tsx`
- `src/data/projects.ts`
- `src/data/experience.ts`
- `src/data/techStack.ts`
- `src/data/links.ts`
- `src/data/siteContent.ts`
- `src/types/index.ts`

Do not add:
- Blog/notes section
- Light/dark mode toggle
- Sound effects
- SEO/social preview setup
- Analytics
- Advanced accessibility features beyond normal basic HTML structure

Build the full website now with placeholder content and polished styling.
```

## 32. Finished Website Quality Checklist

Use this checklist after Cursor generates the site.

### Layout

- [ ] Dark grid background appears correctly
- [ ] Main browser-style window is centered on desktop
- [ ] Browser top bar has only red/yellow/green buttons
- [ ] No fake address/search bar appears
- [ ] Right-side folder navigation stays visible
- [ ] Bottom dock stays visible
- [ ] Only retro window content scrolls
- [ ] Site still works on mobile as a compressed desktop-style layout

### Navigation

- [ ] Home/About folder opens the Home/About section
- [ ] Projects folder opens the Projects section
- [ ] Experience folder opens the Experience section
- [ ] Resume folder opens the Resume section
- [ ] Selected folder changes to open-folder state
- [ ] Window content fades/switches smoothly

### Boot Screen

- [ ] Boot screen appears first
- [ ] Boot icon is editable/replaceable
- [ ] On-screen Enter button works
- [ ] Keyboard key press exits boot screen
- [ ] No sound plays

### Home/About

- [ ] Photo appears on the left
- [ ] About text appears on the right
- [ ] Extra personal content area exists
- [ ] Optional fun photo slots exist
- [ ] Tech stack section appears below intro
- [ ] Tech stack is grouped by Software, Embedded/Firmware, and Tools

### Projects

- [ ] Project filter tabs work
- [ ] All filter is default
- [ ] Software filter works
- [ ] Embedded / Robotics / Firmware filter works
- [ ] Project cards display in a grid
- [ ] Project cards expand smoothly
- [ ] Multiple project cards can remain open
- [ ] Expanded cards show bullets, skills, tech stack, media, and GitHub link
- [ ] Images/videos display inside expanded cards

### Experience

- [ ] Experience cards display in a grid
- [ ] Collapsed cards show company/team, role, dates, and location
- [ ] Cards expand smoothly
- [ ] Multiple experience cards can remain open
- [ ] Expanded cards show description, bullets, and technologies

### Resume

- [ ] Embedded PDF viewer appears
- [ ] Download Resume button works
- [ ] Fallback message exists if PDF preview fails
- [ ] Resume placeholder path is easy to replace

### Dock Links

- [ ] GitHub icon works
- [ ] LinkedIn icon works
- [ ] Instagram icon works
- [ ] Email icon works
- [ ] Resume shortcut works
- [ ] Dock icons bounce on click

### Code / Maintenance

- [ ] Projects are editable in `src/data/projects.ts`
- [ ] Experiences are editable in `src/data/experience.ts`
- [ ] Tech stack is editable in `src/data/techStack.ts`
- [ ] Links are editable in `src/data/links.ts`
- [ ] Placeholder assets are easy to replace
- [ ] Comments explain where to edit content

### Deployment

- [ ] Project builds successfully
- [ ] Project deploys to Vercel
- [ ] Default Vercel link works
- [ ] Project can support a custom domain later
