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
    animateTitle: z.boolean().default(true).optional(),
    subtitle: z.string(),
    video: z.string().optional(),
    posterImage: z.string().optional(),
    videoPlayLabel: z.string().optional(),
    videoPauseLabel: z.string().optional(),
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
    animateTitle: z.boolean().default(true).optional(),
    subtitle: z.string().optional(),
  }),
  bioFounder: z.object({
    name: z.string(),
    portraitImage: z.string(),
    portraitAlt: z.string().optional(),
    body: z.string(),
  }),
  paragraphsBesidePhoto: z.number().optional(),
  closingText: z.string().optional(),
  seo: seoSchema,
});

export const servicesPageSchema = z.object({
  title: z.string(),
  animateTitle: z.boolean().default(true).optional(),
  subtitle: z.string().optional(),
  inquiryButtonText: z.string().optional(),
  defaultDeliverablesHeading: z.string().optional(),
  seo: seoSchema,
});

export const brandsPageSchema = z.object({
  title: z.string(),
  animateTitle: z.boolean().default(true).optional(),
  subtitle: z.string().optional(),
  seo: seoSchema,
});

export const contactSchema = z.object({
  title: z.string(),
  animateTitle: z.boolean().default(true).optional(),
  subtitle: z.string(),
  servicePlaceholder: z.string().optional(),
  serviceOptions: z.array(z.string()),
  budgetOptions: z.array(z.string()),
  submitButtonText: z.string().optional(),
  submittingButtonText: z.string().optional(),
  formLabels: z
    .object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      email: z.string().optional(),
      service: z.string().optional(),
      budget: z.string().optional(),
      message: z.string().optional(),
      consent: z.string().optional(),
    })
    .optional(),
  formErrors: z
    .object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      email: z.string().optional(),
      service: z.string().optional(),
      budget: z.string().optional(),
      message: z.string().optional(),
      consent: z.string().optional(),
      submitFailed: z.string().optional(),
    })
    .optional(),
  formSuccess: z
    .object({
      kicker: z.string().optional(),
      title: z.string().optional(),
      message: z.string().optional(),
      resetButtonText: z.string().optional(),
      exploreButtonText: z.string().optional(),
      exploreButtonUrl: z.string().optional(),
    })
    .optional(),
  seo: seoSchema,
});

export const themeSchema = z.object({
  creme: z.object({
    powder: z.string().default('#FAF7F2'),
    alabaster: z.string().default('#F3EFEA'),
    border: z.string().default('#E4DDD4'),
  }),
  terracotta: z.object({
    default: z.string().default('#9E6742'),
    dark: z.string().default('#7D4B2A'),
    light: z.string().default('#BD835C'),
  }),
  espresso: z.object({
    default: z.string().default('#382820'),
    deep: z.string().default('#1C1513'),
  }),
  taupe: z.object({
    default: z.string().default('#6B5C55'),
    light: z.string().default('#94847D'),
  }),
  ocre: z.object({
    default: z.string().default('#C29B72'),
    light: z.string().default('#D8B58F'),
  }),
});

export const settingsSchema = z.object({
  brandName: z.string().optional(),
  siteLanguage: z.string().optional(),
  ogLocale: z.string().optional(),
  companyName: z.string().optional(),
  founderName: z.string().optional(),
  founderTitle: z.string().optional(),
  navItems: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    )
    .optional(),
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
  coverImage: z.string().optional(),
  cardImage: z.string().optional(),
  detailImage: z.string().optional(),
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
    themeSchema,
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
