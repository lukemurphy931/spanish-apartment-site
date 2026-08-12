// One-off / repeatable loader for real page content, since /admin login is
// currently broken. Run with: node --env-file=.env scripts/seed-pages.mjs
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const pages = [
  {
    slug: 'home',
    title: 'Welcome',
    content: `Murphy's Apartments is a bright, family-run holiday apartment in Golf Gardens III, Miraflores — a quiet, gated community in Riviera del Sol, Mijas, on Spain's Costa del Sol. The balcony looks straight out over the golf course, and it's about a 5–10 minute walk down to Mijas Beach.

![Murphy's Apartments and the community pool](/homepage/homepage.jpg)

You'll have use of the community's shared pool, and everything you need for day-to-day life is close by — a small supermarket, a handful of good restaurants, and reliable taxis for getting further afield.

Use the menu above to find check-in details, the apartment guide, and local tips for making the most of your stay. If anything's unclear or missing, get in touch on the Contact page.

## 📍 Address
Apartment 10-2-2-A, Miguel Ángel Jiménez 5, Golf Gardens III, Miraflores, Riviera del Sol, Mijas, 29649, Málaga`,
  },
  {
    slug: 'check-in',
    title: 'Check-In & Access',
    content: `## 📍 Address
Apartment 10-2-2-A, Miguel Ángel Jiménez 5, Golf Gardens III, Miraflores, Riviera del Sol, Mijas, 29649, Málaga

![Entrance to the building](/Views/access-gate.jpg)

## 🗓️ Check-In / Check-Out
- Check-in: 3:00 PM
- Check-out: 11:00 AM

## 🔑 Getting In
- The front door locks automatically behind you.
- When you go out, double-lock it with the key as well.
- **Never leave the key in the inside of the door.** If the door swings shut while the key is in the lock, no one can get back in — even with a spare key.

## 🚪 Bedroom Door
The door from the living room into the bedrooms can stick. When you go to bed, don't pull it fully closed. If it does stick shut, there's an Allen key taped to the door frame to help free it.

## 📶 Wi-Fi
- Network: Avatel (look for the one with "2A" in the name)
- Password: BallyTwJu35

## 📺 TV
- Turn on the TV and the Firestick (remote controls are labelled on the back).
- On the Firestick, open the **VENOM** app for all channels, including catch-up.

## 🌴 Balcony
![View from the balcony](/Views/balcony-view.jpg)
- Lounger chairs and the small outdoor tree are kept in the spare room and can be left out on the balcony for your stay.
- Bring the cushions in if it rains.

## 🧳 Before You Leave
- Throw out anything from the fridge that won't keep — check the bread bin too.
- Strip your bed and put the sheets in a black bag with the dirty towels and tea towels. Leave the bag by the door inside the apartment.
- Empty the bins in the kitchen, bathrooms, and bedrooms.
- Make sure there's some water and toilet roll left.
- Check that both laundry baskets are empty.
- Put the cushions from the big outside recliner chairs into the bench.
- Put the small table/chair cushions in the cupboard below the TV.
- Turn down all the shutters before you go.
- Turn off the water.
- Turn off the bug repellents.

If you'd like to leave any dirty clothes behind, I'll wash and put them away when I'm next over — bag them up and put them in the left corner of my wardrobe (there's already a bag there).`,
  },
  {
    slug: 'guide',
    title: 'Apartment Guide',
    content: `## 🍳 Oven (Ariston)
![Ariston oven control panel](/appliances/oven.jpg)

The main dial has these positions:
- **Off** – top
- **Light only** – top right
- **1 – Oven**
- **2 – Fan Oven**
- **3 – Upper Oven**
- **4 – Grill**
- **5 – Grill with Fan**

![Oven dial positions](/appliances/oven-dial.jpg)

The second dial sets the temperature in °C once you've picked a mode.

## 🌡️ Heating / Air-Con (Eberle thermostat)
![Eberle thermostat](/appliances/thermostat.jpg)
- Left switch: **AUTO** (scheduled) or **CONT.** (continuous/manual)
- Right switch: **I** (on) or **O** (off)
- Dial: sets the target temperature in °C
- Sliders: fan speed, and hot/cold mode

## 🧺 Washer-Dryer
![Washer-dryer control panel](/appliances/washer-dryer-manual.jpg)
- **Programme knob** (top): turn to choose the wash programme — pull the little tab below it outward to see the full programme chart.
- **Temperature knob**: sets the wash temperature (or choose cold).
- **Drying knob**: sets a drying cycle if you also want the machine to dry.
- **Start/Stop**: turns the machine on/off.
- **Start/Reset**: starts the programme, or cancels a wrong setting.

![Detergent dispenser drawer](/appliances/detergent-drawer.jpg)

Detergent goes in the pull-out dispenser drawer on the top left — use the marked compartments for the main wash and fabric softener.`,
  },
  {
    slug: 'local',
    title: 'Local Area',
    content: `## 🏖️ Beach
The nearest beach is **Mijas Beach**, about a 5–10 minute walk — a long sandy beach with a paved promenade, sun loungers, and a few beach bars. La Cala de Mijas beach is a bit further (roughly 20 minutes on foot) if you fancy a change of scene, with more restaurants right on the seafront.

## 🍽️ Restaurants
- **Max Beach** – right on the beach in Riviera del Sol, relaxed boho vibe, Mediterranean food (and Pan-Asian dishes from their Mao menu).
- **Casa Barella** – popular breakfast/coffee spot in La Cala.
- **Chiringuito Arroyo** – classic beachside chiringuito for fresh grilled fish.
- **The English Garden** / **Treetops** – good if you fancy something British-friendly.

Worth double-checking opening hours before you go, especially out of season.

## 🛒 Everyday Essentials
- **Supermercado Miraflores** – small supermarket right in the urbanization, English-speaking staff, good for day-to-day basics.
- **Mercadona** – the nearest large supermarket is a short drive away in La Cala de Mijas.

## 🚕 Taxis
- **Radio Taxi Mijas** – 952 476 593 / 952 478 288, 24/7, central@taximijas.es
- **Taxi Mijas Leo** (WhatsApp) – +34 619 923 703, 24/7 across Mijas Costa and Fuengirola

Below is a map with useful spots. 🗺️`,
  },
];

const images = [
  {
    pageSlug: 'gallery',
    url: '/Views/balcony-view.jpg',
    caption: '🌅 View from the balcony, over the golf course',
    sort: 0,
  },
  {
    pageSlug: 'gallery',
    url: '/Views/pool.jpg',
    caption: '🏊 Communal pool',
    sort: 1,
  },
  {
    pageSlug: 'gallery',
    url: '/Views/golf-course.jpg',
    caption: '⛳ The golf course behind the apartment',
    sort: 2,
  },
  {
    pageSlug: 'gallery',
    url: '/Views/entrance.jpg',
    caption: '🚪 Entrance to Golf Gardens Miraflores II',
    sort: 3,
  },
  {
    pageSlug: 'gallery',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Calahonda_beach_(5307437981).jpg?width=1200',
    caption: '🏖️ Calahonda Beach, a short walk along the coast',
    sort: 4,
  },
  {
    pageSlug: 'gallery',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Calahonda_beach_at_Calahonda,_Spain_2005_1.jpg?width=1200',
    caption: '🌊 Calahonda Beach promenade',
    sort: 5,
  },
];

for (const p of pages) {
  await prisma.page.upsert({
    where: { slug: p.slug },
    create: p,
    update: { title: p.title, content: p.content },
  });
  console.log(`upserted: ${p.slug}`);
}

// Reset gallery images each run so ordering/captions stay in sync with the list above.
await prisma.image.deleteMany({ where: { pageSlug: 'gallery' } });
for (const img of images) {
  await prisma.image.create({ data: img });
}
console.log(`gallery images: ${images.length}`);

await prisma.$disconnect();
