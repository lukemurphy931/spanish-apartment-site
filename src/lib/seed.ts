import { prisma } from './db';

export async function ensureSeed() {
  const count = await prisma.page.count();
  if (count > 0) return;

  const defaults = [
    {
      slug: 'home',
      title: 'Welcome to the Apartment',
      content: '# Welcome\n\nLocated in sunny Spain, 10 minutes from the beach.\n\nUse the menu to find check-in details, the apartment guide, and local tips.'
    },
    {
      slug: 'check-in',
      title: 'Check-In / Check-Out',
      content: '## Times\n- Check-in: 3:00 PM\n- Check-out: 11:00 AM\n\n## Keys\n- Lockbox by the door. Code will be sent before arrival.\n\n## Wi-Fi\n- SSID: your-network\n- Password: your-password\n\n## Parking\nStreet parking is usually available.'
    },
    {
      slug: 'guide',
      title: 'Apartment Guide',
      content: '## Appliances\n- AC: Remote in the living room.\n- Washing machine: Program 30°C for most clothes.\n\n## Rules\n- No smoking indoors.\n- Quiet hours after 10 PM.\n\n## Before Leaving\n- Take out rubbish.\n- Close windows and return keys to lockbox.'
    },
    {
      slug: 'local',
      title: 'Local Area',
      content: '## Essentials\n- Supermarket: 5 min walk on Calle Sol.\n- Beach: Playa Azul, 10 min walk.\n\nBelow is a map with useful spots.'
    },
    {
      slug: 'gallery',
      title: 'Gallery',
      content: 'A selection of apartment and area photos.'
    },
    {
      slug: 'contact',
      title: 'Contact',
      content: 'For questions:\n- Email: example@example.com\n- Phone/WhatsApp: +34 600 000 000'
    }
  ];

  for (const p of defaults) {
    await prisma.page.create({ data: p });
  }
}
