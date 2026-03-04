# Project Spec: Pawprint & Co. Veterinary Wellness

## Business Overview
**Name:** Pawprint & Co. Veterinary Wellness  
**Tagline:** "Where Every Tail Has a Story"  
**Location:** 3280 West Colonial Drive, Ocoee, FL 34761  
**Phone:** (407) 555-0319  
**Email:** hello@pawprintandco.com  
**Emergency Line:** (407) 555-0911 (24/7)  
**Founded:** 2017  
**Owner:** Dr. Lena Okafor, DVM, DACVIM (Internal Medicine)

## Brand Identity
- **Vibe:** Modern, warm, premium but approachable. Think Apple Store meets animal hospital. Clean lines, natural textures, calming earth tones. Not sterile-clinical and not cutesy-cartoon — sophisticated pet care for owners who treat their animals like family.
- **Color Palette:** Sage Green (#7C9A82), Warm Cream (#F5F0E8), Deep Navy (#1B2A4A), Terracotta Accent (#C4704B), Soft White (#FEFEFE)
- **Typography:** Playfair Display (serif headers — warm, editorial feel) + DM Sans (body — clean, modern)
- **Photography Style:** Warm, natural light. Real pets in calm clinical settings. Veterinarians interacting with animals gently. Use Unsplash animal/veterinary images. No cartoons, no clip art.
- **Design Details:** Subtle rounded corners on cards (12px-16px). Soft shadows. Generous whitespace. Occasional paw-print motif as a decorative element (CSS-only, not images). Micro-animations on scroll (fade-in-up on sections). Gradient backgrounds on select sections (sage → cream transitions).

## Site Structure — MULTI-PAGE (5 Pages)

All pages share a consistent header/nav and footer. Navigation should highlight the current page. Mobile hamburger menu on all pages.

---

## PAGE 1: Home (index.html)

### 1.1 Hero Section
- Split layout: left side text, right side large image (golden retriever being examined gently)
- Headline: "Where Every Tail Has a Story"
- Subline: "Comprehensive veterinary care with a personal touch. From routine wellness to complex internal medicine — your pet deserves a doctor who listens."
- Two CTAs: "Book an Appointment" (links to contact page) | "Meet Our Team" (links to team page)
- Below hero: a horizontal trust bar with logos/badges — "Fear Free Certified Practice", "AAHA Accredited", "24/7 Emergency Line", "4.9★ Google (540+ Reviews)"

### 1.2 Welcome Section
- Short intro paragraph from Dr. Okafor:
  "I started Pawprint & Co. because I believe veterinary medicine should be about relationships, not transactions. When you bring your pet here, we learn their name, their quirks, their history. We remember that Luna hates having her ears checked and that Charlie gets anxious in the waiting room. That's not a luxury — that's how medicine should work."
- Accompanied by a warm photo of Dr. Okafor with a cat

### 1.3 Services Overview (Links to Services Page)
- 4 cards in a 2x2 grid (stacks on mobile):

**Wellness & Prevention**
- Annual exams, vaccinations, parasite prevention, nutrition counseling
- Icon: shield/heart
- CTA: "Learn More →" (links to services page #wellness)

**Internal Medicine**
- Complex diagnostics, chronic disease management, second opinions
- Icon: stethoscope
- CTA: "Learn More →" (links to services page #internal)

**Surgery & Dental**
- Soft tissue surgery, orthopedics, dental cleanings, extractions
- Icon: medical cross
- CTA: "Learn More →" (links to services page #surgery)

**Urgent & Emergency**
- Walk-in urgent care during hours, 24/7 emergency phone triage
- Icon: phone/alert
- CTA: "Learn More →" (links to services page #emergency)

Each card should have a subtle hover lift animation (translateY -4px + shadow increase).

### 1.4 By The Numbers (Animated Counters)
- Stats that count up when scrolled into view (use Intersection Observer):
  - "12,000+" — Patients treated since 2017
  - "8" — Veterinary professionals on staff
  - "4.9★" — Google rating from 540+ reviews
  - "24/7" — Emergency phone triage
- Background: Deep navy with white/cream text. Subtle gradient overlay.

### 1.5 Featured Testimonials (Carousel/Slider)
- Auto-rotating testimonial carousel with manual prev/next arrows and dot indicators
- 4 testimonials:

"Dr. Okafor diagnosed our boxer with Addison's disease after two other vets missed it. She spent 45 minutes on the phone explaining the treatment plan. Roxy is thriving two years later. We drive 40 minutes to come here and it's worth every mile."  
— **Amanda & Chris T., pet parents to Roxy (Boxer, 7)**

"Our 16-year-old cat Miso needed dental surgery and I was terrified. Dr. Patel walked us through every step, called us mid-procedure with an update, and texted the next morning to check on her. That level of care doesn't exist anywhere else."  
— **David L., pet parent to Miso (DSH, 16)**

"I'm a first-time dog owner and I had a million anxious questions. Nobody at Pawprint ever made me feel stupid. They gave me a puppy care binder on our first visit. A BINDER. With tabs."  
— **Keisha W., pet parent to Biscuit (Golden Retriever, 1)**

"We brought our rescue greyhound in with severe anxiety and GI issues. Dr. Okafor created a holistic plan — diet changes, medication adjustments, and even recommended a behavioral trainer. Luna is a completely different dog. She actually wags her tail at the vet now."  
— **Tom & Rebecca F., pet parents to Luna (Greyhound, 5)**

### 1.6 Instagram Teaser
- Horizontal scroll row of 6 images with rounded corners and hover zoom effect
- "Follow our patients' stories @pawprintandco"

### 1.7 CTA Banner
- Full-width sage green background
- "Your pet's health can't wait. Neither should you."
- Button: "Book an Appointment" (links to contact page)

---

## PAGE 2: Services (services.html)

### 2.1 Page Hero
- Narrower hero than homepage (40vh max)
- Headline: "Comprehensive Care Under One Roof"
- Subline: "From puppy's first checkup to managing complex chronic conditions — we handle it all with the same level of attention."

### 2.2 Service Categories (Tabbed Interface)
A horizontal tab bar at the top with 4 tabs. Clicking a tab shows that service category's content below. The active tab should be visually distinct (underline + bold). On mobile, tabs become a vertical accordion instead.

**Tab 1: Wellness & Prevention** (id="wellness")
- Annual & semi-annual wellness exams
- Core & lifestyle vaccinations (customized to your pet's risk factors)
- Parasite prevention (heartworm, flea, tick — year-round in Florida)
- Nutrition counseling & weight management programs
- Senior wellness panels (bloodwork, urinalysis, thyroid screening for pets 7+)
- Microchipping
- Health certificates for travel
- New puppy/kitten starter packages

Include a callout box: "🐾 New Patient Special: First wellness exam includes a free nutrition consultation ($75 value). Mention this when booking."

**Tab 2: Internal Medicine** (id="internal")
- Dr. Okafor is a board-certified internist (DACVIM) — one of only 3 in the greater Orlando area
- Endoscopy & minimally invasive diagnostics
- Ultrasound & echocardiography (in-house, no referral needed)
- Chronic disease management: diabetes, Cushing's, Addison's, IBD, kidney disease, liver disease
- Cancer staging & chemotherapy coordination
- Immune-mediated disease treatment
- Second opinion consultations (we welcome outside records)
- Complex case management with multi-specialist collaboration

Include a callout box: "🔬 Why Board Certification Matters: A DACVIM internist completes 4 years of vet school + 1 year internship + 3 years residency + a grueling board exam. It's the veterinary equivalent of a medical specialist. Your pet gets that expertise here, not at a referral hospital an hour away."

**Tab 3: Surgery & Dental** (id="surgery")
- Soft tissue surgery (mass removals, splenectomy, gastropexy, bladder stone removal)
- Orthopedic surgery (cruciate repair, fracture stabilization, luxating patella)
- Dental cleanings under anesthesia with full-mouth digital radiographs
- Dental extractions (simple and surgical)
- Pre-surgical bloodwork and risk assessment included in every procedure
- Multimodal pain management (we take pain seriously — every patient gets a custom pain plan)
- Dedicated surgical suite with full monitoring (SpO2, ECG, blood pressure, temperature, capnography)

Include a callout box: "🦷 87% of dogs and 70% of cats have dental disease by age 3. If your pet has bad breath, it's not 'just dog breath' — it's likely a sign of infection. Schedule a dental consult."

**Tab 4: Urgent & Emergency Care** (id="emergency")
- Walk-in urgent care during clinic hours (no appointment needed for true urgencies)
- 24/7 emergency phone triage — call (407) 555-0911 anytime
- On-site diagnostics: digital x-ray, ultrasound, in-house bloodwork (results in 15 minutes)
- Oxygen therapy, IV fluid therapy, emergency stabilization
- After-hours: We partner with VCA Emergency for overnight hospitalization and will transfer records automatically
- Common urgencies we handle: vomiting/diarrhea, difficulty breathing, suspected toxin ingestion, wounds/lacerations, urinary obstruction, seizures, collapse

Include a prominent emergency box (red/terracotta border): "🚨 If your pet is experiencing a life-threatening emergency after hours, call (407) 555-0911 immediately. We will triage by phone and direct you to the nearest emergency facility if needed."

### 2.3 Pricing Transparency Section
- Simple table or card layout:

| Service | Price Range |
|---------|-------------|
| Wellness Exam | $65 – $85 |
| Vaccination Package (Core) | $120 – $160 |
| Senior Wellness Panel | $185 – $245 |
| Dental Cleaning (Cat) | $380 – $550 |
| Dental Cleaning (Dog) | $420 – $680 |
| Soft Tissue Surgery | $800 – $2,500 |
| Orthopedic Surgery | $2,200 – $4,500 |
| Internal Medicine Consult | $225 – $350 |
| Ultrasound | $350 – $500 |
| Urgent Care Visit | $120 – $180 |

- Note: "All estimates. Final pricing depends on your pet's specific needs. We always provide a written estimate before proceeding. No surprises."

---

## PAGE 3: Our Team (team.html)

### 3.1 Page Hero
- Headline: "The Humans Behind the Healing"
- Subline: "8 professionals. 96 combined years of experience. One shared obsession: your pet's health."

### 3.2 Team Grid
Each team member gets a card with: photo (Unsplash), name, title, credentials, a short bio, and a "fun fact" in a different color accent. Cards should be 2-across on desktop, 1-across on mobile.

**Dr. Lena Okafor, DVM, DACVIM** — Medical Director & Founder
- Cornell University CVM (DVM, 2009)
- Board-certified in Internal Medicine (ACVIM, 2014)
- Special interests: endocrinology, immune-mediated disease, feline medicine
- "I chose internal medicine because I love solving puzzles. Every complex case is a mystery, and the patient can't tell you what's wrong — you have to figure it out. That challenge is what gets me out of bed at 5am."
- Fun fact: Has two rescue cats named Watson and Crick (yes, after the scientists)

**Dr. Anil Patel, DVM** — Associate Veterinarian & Surgical Lead
- University of Florida CVM (DVM, 2015)
- Additional training: orthopedic surgery externship at University of Georgia
- Special interests: orthopedics, minimally invasive surgery, dental surgery
- "Surgery is where preparation meets precision. I spend more time planning a procedure than performing it. That's how you get great outcomes."
- Fun fact: Competitive rock climber who says surgery and climbing require the same hand steadiness

**Dr. Maria Santos, DVM** — Associate Veterinarian
- Tuskegee University CVM (DVM, 2018)
- Fear Free Certified Professional
- Special interests: dermatology, behavior, puppy/kitten wellness
- "I became a vet because of a hamster named Señor Fluffington who had a skin condition when I was 12. My family vet saved him and I was hooked."
- Fun fact: Fluent in Spanish and Portuguese — serves many multilingual pet families

**Jamie Crawford, CVT** — Lead Veterinary Technician
- Valencia College (CVT, 2014)
- VTS candidate (Emergency & Critical Care)
- 10 years experience, 6 at Pawprint & Co.
- "Technicians are the nurses of veterinary medicine. We're in the trenches — placing catheters, monitoring anesthesia, comforting scared animals. It's exhausting and I wouldn't trade it for anything."
- Fun fact: Fosters kittens year-round. Current count: 47 foster kittens placed in homes

**Olivia Tran, CVT** — Veterinary Technician
- Brevard Community College (CVT, 2019)
- Special interest: dental radiography and anesthesia monitoring
- Fun fact: Taught her border collie to sort laundry by color

**Marcus Johnson** — Veterinary Assistant & Client Care
- Working toward CVT certification
- The first face you see when you walk in
- Fun fact: Knows every patient's name and keeps treat preferences in a notebook

**Dr. Sarah Kim, DVM** — Part-Time Associate (Weekends)
- UC Davis CVM (DVM, 2012)
- 12 years emergency medicine experience before transitioning to general practice
- "After a decade in emergency, I wanted to build relationships with patients over time instead of meeting them on their worst day."
- Fun fact: Makes custom pet bandanas and gives them to post-surgery patients

**Rebecca Ayala** — Practice Manager
- 15 years veterinary practice management
- CVPM (Certified Veterinary Practice Manager)
- "I make sure the trains run on time so the doctors can focus on medicine. If you have a billing question, scheduling issue, or just need someone to listen — I'm your person."
- Fun fact: Has a 22-year-old cockatiel named Gerald who outlived two dogs and a marriage

### 3.3 Team Photo
Full-width group photo placeholder with caption: "The Pawprint & Co. team, minus our most important members — our patients."

---

## PAGE 4: Resources (resources.html)

### 4.1 Page Hero
- Headline: "Pet Parent Resources"
- Subline: "Because informed pet parents raise healthier, happier animals."

### 4.2 Seasonal Alert Banner (Sticky at top of content)
- Terracotta background, white text
- "⚠️ Florida Heartworm Season is Year-Round. Is your pet protected? If you've missed a dose, call us — we may need to re-test before resuming prevention."

### 4.3 Resource Cards Grid (3 columns, stacks on mobile)
Each card has: category tag, title, short description, estimated read time, and a "Read More" that expands the card to show full content (accordion-style expansion, not a new page).

**Card 1: New Pet Owner Guide**
Category: Getting Started
"Bringing home a new puppy or kitten? Here's everything you need to know about the first year — from vaccination schedules to nutrition to socialization windows."
Read time: 8 min

Expanded content:
- Puppy vaccination schedule (8, 12, 16 weeks + rabies at 16 weeks)
- Kitten vaccination schedule (8, 12, 16 weeks + rabies at 12-16 weeks)
- Spay/neuter timing recommendations (6 months for cats, varies for dogs by breed)
- Nutrition basics (avoid grain-free boutique diets unless medically indicated — ask us why)
- Socialization window (3-14 weeks is critical for puppies)
- First vet visit checklist: bring any records from breeder/rescue, list of current food, list of questions
- What to expect at the first visit: full physical exam, fecal test, deworming, vaccination plan, microchip discussion

**Card 2: Understanding Pet Nutrition**
Category: Nutrition
"Not all pet food is created equal. Learn how to read labels, why 'grain-free' isn't always better, and what Dr. Okafor actually recommends."
Read time: 6 min

Expanded content:
- AAFCO statement — what to look for on every bag
- Why we recommend WSAVA-compliant brands (Purina Pro Plan, Royal Canin, Hill's Science Diet)
- The grain-free/DCM concern — dilated cardiomyopathy linked to boutique grain-free diets
- How to calculate proper feeding amounts (most pets are overfed)
- When prescription diets are needed (kidney disease, urinary issues, food allergies)
- Treats should be <10% of daily calories
- People food that's safe: plain chicken, carrots, blueberries, green beans
- People food that's toxic: grapes, raisins, xylitol, chocolate, onions, garlic, macadamia nuts

**Card 3: Dental Health Guide**
Category: Dental
"87% of dogs have dental disease by age 3. Here's what to watch for, how to brush your pet's teeth (yes, really), and why dental cleanings require anesthesia."
Read time: 5 min

Expanded content:
- Signs of dental disease: bad breath, drooling, dropping food, pawing at mouth, swollen gums
- Why anesthesia is necessary (can't take dental x-rays on an awake patient, can't probe below the gumline safely)
- "Anesthesia-free dental" is dangerous — we do not recommend or perform it
- At-home dental care: daily brushing with pet-specific toothpaste (not human toothpaste — xylitol is toxic)
- Dental chews and water additives — helpful supplements but not replacements for professional cleaning
- How often: annual dental exam minimum, professional cleaning every 1-3 years depending on breed and condition

**Card 4: Senior Pet Care**
Category: Senior Wellness
"Dogs and cats age faster than we'd like. Learn the signs of aging, when to start senior screenings, and how to keep your older pet comfortable."
Read time: 7 min

Expanded content:
- When is a pet "senior"? Cats: 10+. Small dogs: 8-10. Large dogs: 6-8. Giant breeds: 5-6.
- Senior wellness panels: what's included (CBC, chemistry, urinalysis, thyroid, blood pressure)
- Common senior conditions: arthritis, kidney disease, dental disease, cognitive dysfunction, cancer, heart disease
- Signs of pain pets hide: decreased appetite, reluctance to jump, sleeping more, personality changes, panting at rest
- Environmental modifications: ramps, orthopedic beds, raised food bowls, non-slip mats
- Quality of life assessment — how to know when your pet is struggling vs. having a bad day

**Card 5: Florida-Specific Pet Safety**
Category: Local Guide
"Living in Central Florida means year-round parasite pressure, heat risks, and wildlife encounters. Here's what every Florida pet parent needs to know."
Read time: 5 min

Expanded content:
- Heartworm: transmitted by mosquitoes, year-round risk in Florida, monthly prevention is non-negotiable
- Fleas & ticks: year-round in Florida (no winter kill), use veterinary-recommended products only (OTC products can be dangerous)
- Heat safety: no walks on hot pavement (test with your hand — 5 seconds), no cars even with windows cracked, watch for signs of heat stroke
- Toads: Bufo toads (cane toads) are toxic — if your dog mouths one, rinse mouth immediately and call us
- Snakes: coral snakes and water moccasins are present — keep dogs leashed in wooded areas
- Algae blooms: blue-green algae in lakes is toxic to dogs — check local alerts before lake visits
- Hurricane prep: have 2 weeks of food/medication, know your evacuation zone, carrier for cats

**Card 6: Emergency vs. Urgent vs. "Can It Wait?"**
Category: Emergency Guide
"Not sure if your pet's situation is an emergency? Use this guide to decide whether to call us, come in, or schedule a regular appointment."
Read time: 4 min

Expanded content:
- TRUE EMERGENCY (call immediately / go to ER): not breathing, unconscious, actively seizing for >3 min, hit by car, known toxin ingestion, bloated abdomen with retching, profuse bleeding
- URGENT (come in same-day or call for triage): vomiting >3 times in 24hrs, not eating for >24hrs (cats) or >48hrs (dogs), limping/non-weight-bearing, eye injury/squinting, difficulty urinating, bloody diarrhea
- CAN WAIT for appointment: mild intermittent limping, occasional vomiting with normal energy, skin lumps/bumps (not rapidly growing), ear scratching, mild diarrhea with normal energy, bad breath

### 4.4 Downloadable Resources Section
- 3 buttons styled as file download cards:
  - "📄 New Patient Registration Form (PDF)" — href="#"
  - "📄 Surgical Consent & Pre-Op Instructions (PDF)" — href="#"
  - "📄 End-of-Life Decision Guide (PDF)" — href="#"

---

## PAGE 5: Contact & Book (contact.html)

### 5.1 Page Hero
- Headline: "Let's Talk About Your Pet"
- Subline: "Whether it's a routine checkup or a concern that's keeping you up at night — we're here."

### 5.2 Contact Info Cards (3 columns)

**Visit Us**
- 3280 West Colonial Drive, Ocoee, FL 34761
- Embedded Google Maps iframe (use a maps embed URL or a placeholder styled map area)
- "Free parking lot behind the building. Enter through the garden gate — yes, we have a garden."

**Call or Text**
- Main: (407) 555-0319
- Emergency 24/7: (407) 555-0911
- "For non-urgent questions, text us! We respond within 2 hours during business hours."

**Hours**
| Day | Hours |
|-----|-------|
| Monday | 7:30 AM – 6:00 PM |
| Tuesday | 7:30 AM – 6:00 PM |
| Wednesday | 7:30 AM – 7:00 PM (late night) |
| Thursday | 7:30 AM – 6:00 PM |
| Friday | 7:30 AM – 5:00 PM |
| Saturday | 8:00 AM – 2:00 PM |
| Sunday | Closed (Emergency line available) |

### 5.3 Appointment Booking Form
- Form title: "Request an Appointment"
- Note: "We'll confirm your appointment within 4 business hours. For urgent matters, please call."

Fields:
- Pet Parent Name (required)
- Email (required)
- Phone (required)
- Pet Name (required)
- Species (radio buttons): Dog | Cat | Other
- Breed (text input)
- Pet Age (dropdown): Under 1, 1-3, 4-6, 7-9, 10-12, 13+
- Reason for Visit (dropdown): Wellness Exam, Vaccination, Sick/Not Feeling Well, Dental Consult, Surgery Consult, Internal Medicine Referral, Second Opinion, New Puppy/Kitten, Senior Screening, Urgent Concern, Other
- Preferred Day (checkboxes — select multiple): Mon, Tue, Wed, Thu, Fri, Sat
- Preferred Time (radio): Morning (7:30-11), Midday (11-2), Afternoon (2-5), Evening Wed Only (5-7), No Preference
- Is this your first visit? (radio): Yes | No
- Additional Notes (textarea, optional)
- File upload area: "Upload any relevant documents (previous records, lab results, photos of concern)" — styled as a drag-and-drop zone with dashed border. Does not need to actually upload — just the UI.
- Submit: "Request Appointment"
- Success state: "Thank you! We'll confirm your appointment within 4 business hours. If this is urgent, please call (407) 555-0319."

### 5.4 FAQ Quick Links
- "Before you book, you might find these helpful:"
- 3 linked cards pointing back to resources page: "New Patient Guide", "Emergency vs Urgent Guide", "What to Bring to Your First Visit"

---

## SHARED COMPONENTS (All Pages)

### Navigation
- Sticky top nav bar: Logo (text-based "Pawprint & Co.") + links: Home, Services, Our Team, Resources, Contact
- Current page highlighted with underline + color change
- Mobile: hamburger menu with slide-in drawer from right (not just a dropdown)
- Emergency banner ABOVE nav on all pages: terracotta background — "🚨 24/7 Emergency Line: (407) 555-0911" — always visible, doesn't scroll away

### Footer (All Pages)
- 4-column layout (stacks on mobile):
  
  **Column 1: Brand**
  - Pawprint & Co. logo
  - Tagline: "Where Every Tail Has a Story"
  - Brief: "Comprehensive veterinary care in Ocoee, FL. AAHA-accredited. Fear Free certified. Accepting new patients."
  
  **Column 2: Quick Links**
  - Home, Services, Our Team, Resources, Book Appointment
  
  **Column 3: Services**
  - Wellness & Prevention, Internal Medicine, Surgery & Dental, Urgent Care, Dental Cleanings
  
  **Column 4: Contact**
  - Address
  - Phone + Emergency phone
  - Email
  - Hours (abbreviated)
  
- Bottom bar: "© 2024 Pawprint & Co. Veterinary Wellness. All rights reserved." | "Website crafted with 🐾 in Ocoee, FL"

---

## Technical Requirements
- **Multi-page static site**: 5 HTML files (index.html, services.html, team.html, resources.html, contact.html)
- **Shared CSS**: Single styles.css file linked from all pages (or Tailwind CDN with consistent custom config)
- **Shared JS**: Single main.js file for interactive components
- **Tailwind CSS via CDN** with custom color configuration
- **Google Fonts**: Playfair Display (headers) + DM Sans (body)
- **All images from Unsplash** with appropriate w= and q= parameters
- **Responsive**: Mobile-first, breakpoints at 640px, 768px, 1024px, 1280px
- **Scroll animations**: Sections fade-in-up when scrolled into view (Intersection Observer, CSS transitions — no external animation library)
- **Animated counters**: Numbers count up on the home page when scrolled into view
- **Testimonial carousel**: Auto-advance every 5 seconds, manual prev/next, dot indicators, pause on hover
- **Tabbed interface**: Services page tabs switch content without page reload. Mobile becomes accordion.
- **Expandable cards**: Resources page cards expand/collapse with smooth animation
- **Form validation**: All required fields validated on submit. Visual error states (red border + error message below field). Success state replaces form.
- **File upload UI**: Styled drag-and-drop zone (visual only — no actual upload functionality needed)
- **Emergency banner**: Fixed at very top of viewport on all pages, does not collapse or hide
- **Smooth scroll**: Anchor links scroll smoothly
- **Lazy loading**: All images below the fold use loading="lazy"
- **Semantic HTML5**: Proper use of header, nav, main, section, article, aside, footer
- **Accessibility**: aria-labels on interactive elements, keyboard navigation on tabs/accordion/carousel, focus-visible outlines, alt text on all images, sufficient color contrast (WCAG AA)
- **No JavaScript frameworks** — vanilla JS only
- **CSS custom properties** for the color palette (easy theming)
- **Print styles**: Contact page should be printable with form hidden and contact info prominent

## Quality Checklist
- [ ] All 5 pages load and link to each other correctly
- [ ] Navigation highlights current page
- [ ] Emergency banner visible on all pages, doesn't scroll away
- [ ] Mobile hamburger menu works with slide-in drawer animation
- [ ] Home page: animated counters count up on scroll
- [ ] Home page: testimonial carousel auto-rotates and has manual controls
- [ ] Services page: tabbed interface works, mobile accordion works
- [ ] Resources page: cards expand/collapse with smooth animation
- [ ] Contact page: form validates all required fields with visual error states
- [ ] Contact page: file upload zone styled (drag-and-drop visual)
- [ ] Contact page: species selection uses radio buttons, preferred days use checkboxes
- [ ] Scroll animations fire correctly on first appearance
- [ ] All Unsplash images load and are relevant to context
- [ ] Footer is consistent across all 5 pages
- [ ] No horizontal scroll on any page at any viewport width
- [ ] Color palette is consistent — sage, cream, navy, terracotta only
- [ ] Typography is consistent — Playfair Display headers, DM Sans body
- [ ] Page transitions feel cohesive (consistent header/footer/spacing)
