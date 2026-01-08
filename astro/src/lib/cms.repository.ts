import client from './contentful.ts';
import type {
  CaseStudies, ContactUs,
  Services,
  SiteSettings,
  StartProjects,
  Stats,
  Technologies,
  Testimonials
} from './cms.types.ts';

export async function getSiteSettings(): Promise<SiteSettings> {
  const entry = await client.getEntries({
    content_type: 'siteSettings',
    limit: 1,
  });

  const fields = entry.items[0].fields as any;

  return {
    siteTitle: fields.title,
    siteDescription: fields.description,
    siteName: fields.siteName,
    header: {
      links: fields.navLinks,
    },
    footer: {
      copyright: fields.copyright,
      links: fields.footerLinks,
    },
  };
}

export async function getServices(): Promise<Services> {
  const entry = await client.getEntries({
    content_type: 'services',
    limit: 1,
  });

  const fields = entry.items[0].fields as any;

  return {
    title: fields.title,
    description: fields.description,
    items: fields.items,
  };
}

export async function getStats(): Promise<Stats> {
  const entry = await client.getEntries({
    content_type: 'stats',
    limit: 1,
  });

  const fields = entry.items[0].fields as any;

  return {
    title: fields.title,
    items: fields.items,
  };
}

export async function getCaseStudies(): Promise<CaseStudies> {
  const entry = await client.getEntries({
    content_type: 'cases',
    limit: 1,
  });

  const fields = entry.items[0].fields as any;

  return {
    title: fields.title,
    description: fields.description,
    items: fields.items,
  };
}

export async function getTechnologies(): Promise<Technologies> {
  const entry = await client.getEntries({
    content_type: 'technologies',
    limit: 1,
  });

  const fields = entry.items[0].fields as any;

  return {
    title: fields.title,
    items: fields.items,
  };
}


export async function getTestimonials(): Promise<Testimonials> {
  const entry = await client.getEntries({
    content_type: 'testimonials',
    limit: 1,
  });

  const fields = entry.items[0].fields as any;

  return {
    title: fields.title,
    items: fields.items,
  };
}

export async function getStartProjects(): Promise<StartProjects> {
  const entry = await client.getEntries({
    content_type: 'startProjects',
    limit: 1,
  });

  const fields = entry.items[0].fields as any;

  return {
    title: fields.title,
    description: fields.description,
    actions: fields.actions,
  };
}

export async function getContactUs(): Promise<ContactUs> {
  const entry = await client.getEntries({
    content_type: 'contactForm',
    limit: 1,
  });

  const fields = entry.items[0].fields as any;

  return {
    title: fields.title,
    description: fields.description,
    form: fields.form,
  };
}

