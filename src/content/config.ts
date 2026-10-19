import { defineCollection, z } from 'astro:content';

export const seoSchema = z.object({
  metaTitle: z.string(),
  metaDescription: z.string(),
  ogImage: z.string().optional(),
});

export const homeSchema = z.object({
  hero: z.object({
    kicker: z.string().optional(),
    title: z.string(),
    subtitle: z.string(),
    ctaText: z.string(),
    ctaLink: z.string(),
  }),
  intro: z.string(),
  testimonials: z.array(
    z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
    })
  ),
  seo: seoSchema,
});

export const aboutSchema = z.object({
  hero: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    coverImage: z.string().optional(),
  }),
  bioFounder: z.object({
    name: z.string(),
    role: z.string(),
    portraitImage: z.string(),
    body: z.string(),
  }),
  values: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ),
  statsOrHighlights: z.array(
    z.object({
      figure: z.string(),
      label: z.string(),
    })
  ),
  seo: seoSchema,
});

export const contactSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  email: z.string().optional(),
  contactEmail: z.string().optional(),
  phone: z.string(),
  location: z.string(),
  serviceOptions: z.array(z.string()),
  budgetOptions: z.array(z.string()),
  seo: seoSchema,
});

export const serviceSchema = z.object({
  title: z.string(),
  order: z.number().default(0),
  shortDescription: z.string(),
  coverImage: z.string(),
});

export const brandSchema = z.object({
  name: z.string(),
  order: z.number().default(0),
  logoImage: z.string(),
  coverImage: z.string(),
  industry: z.string(),
  deliverableTags: z.array(z.string()),
  caseStudyBody: z.string().optional(),
  websiteUrl: z.string().url().optional(),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.union([homeSchema, aboutSchema, contactSchema]),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: serviceSchema,
});

const brandsCollection = defineCollection({
  type: 'content',
  schema: brandSchema,
});

export const collections = {
  pages: pagesCollection,
  services: servicesCollection,
  brands: brandsCollection,
};

export type SeoData = z.infer<typeof seoSchema>;
export type HomePageData = z.infer<typeof homeSchema>;
export type AboutPageData = z.infer<typeof aboutSchema>;
export type ContactPageData = z.infer<typeof contactSchema>;
export type ServiceData = z.infer<typeof serviceSchema>;
export type BrandData = z.infer<typeof brandSchema>;
