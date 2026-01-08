import client from './contentful.ts';
import type {
  CaseStudies,
  ContactUs,
  Services,
  SiteSettings,
  StartProjects,
  Stats,
  Technologies,
  Testimonials,
} from './cms.types.ts';

const mappingContentType = {
  siteSettings: (fields: any): SiteSettings => ({
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
  }),
  services: (fields: any): Services => ({
    title: fields.title,
    description: fields.description,
    items: fields.items,
  }),
  stats: (fields: any): Stats => ({
    title: fields.title,
    items: fields.items,
  }),
  cases: (fields: any): CaseStudies => ({
    title: fields.title,
    description: fields.description,
    items: fields.items,
  }),
  technologies: (fields: any): Technologies => ({
    title: fields.title,
    items: fields.items,
  }),
  testimonials: (fields: any): Testimonials => ({
    title: fields.title,
    items: fields.items,
  }),
  startProjects: (fields: any): StartProjects => ({
    title: fields.title,
    description: fields.description,
    actions: fields.actions,
  }),
  contactForm: (fields: any): ContactUs => ({
    title: fields.title,
    description: fields.description,
    form: fields.form,
  }),
};
const processContentType = (contentType: string, fields: any) => mappingContentType[contentType](fields);

export async function getStaticContent(): Promise<any> {
  const entries = await client.getEntries({});

  return entries.items.reduce((output, item) => {
    const contentType = item.sys.contentType.sys.id;
    const fields = item.fields;

    const processed = (Object.keys(mappingContentType).includes(contentType) && processContentType(contentType, fields)) || undefined;
    if (processed === undefined) {
      return output;
    }

    return {
      ...output,
      [contentType]: processed,
    };
  }, {});
}
