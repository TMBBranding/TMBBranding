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
    video: z.string().optional(),
    posterImage: z.string().optional(),
  }),
  servicesSectionTitle: z.string().optional(),
  brandsSectionTitle: z.string().optional(),
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
  }),
  bioFounder: z.object({
    name: z.string(),
    portraitImage: z.string(),
    body: z.string(),
  }),
  closingText: z.string().optional(),
  seo: seoSchema,
});

export const servicesPageSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  inquiryButtonText: z.string().optional(),
  seo: seoSchema,
});

export const brandsPageSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  seo: seoSchema,
});

export const contactSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  serviceOptions: z.array(z.string()),
  budgetOptions: z.array(z.string()),
  seo: seoSchema,
});

export const settingsSchema = z.object({
  inquiriesTitle: z.string().optional(),
  inquiriesText: z.string().optional(),
  inquiriesSubtitle: z.string().optional(),
  contactLinkText: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  socialTitle: z.string().optional(),
  socialSubtitle: z.string().optional(),
  instagramHandle: z.string().optional(),
  instagramUrl: z.string().optional(),
  location: z.string().optional(),
  headquartersText: z.string().optional(),
  worldwideText: z.string().optional(),
  copyrightText: z.string().optional(),
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
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.union([
    homeSchema,
    aboutSchema,
    servicesPageSchema,
    brandsPageSchema,
    contactSchema,
    settingsSchema,
  ]),
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
export type ServicesPageData = z.infer<typeof servicesPageSchema>;
export type BrandsPageData = z.infer<typeof brandsPageSchema>;
export type ContactPageData = z.infer<typeof contactSchema>;
export type SettingsData = z.infer<typeof settingsSchema>;
export type ServiceData = z.infer<typeof serviceSchema>;
export type BrandData = z.infer<typeof brandSchema>;
