export type ProductCategory = 'cables' | 'heads' | 'lamps'

export interface Product {
  id: string
  slug: string
  category: ProductCategory
  model: string
  image?: string
  specs: Record<string, string | number | null>
  lengths?: number[]       // only cables
  available: boolean
}

export const PRODUCTS: Product[] = [
  // ── LAZER KABLOLARI ──────────────────────────────────────────────
  {
    id: 'cable-st400',
    slug: 'st400',
    category: 'cables',
    model: 'ST400',
    lengths: [5, 10, 15, 20, 25, 30],
    specs: { coreDiameter: null, maxPower: null },
    available: true,
  },
  {
    id: 'cable-st500',
    slug: 'st500',
    category: 'cables',
    model: 'ST500',
    lengths: [5, 10, 15, 20, 25, 30],
    specs: { coreDiameter: null, maxPower: null },
    available: true,
  },
  {
    id: 'cable-st600',
    slug: 'st600',
    category: 'cables',
    model: 'ST600',
    lengths: [5, 10, 15, 20, 25, 30],
    specs: { coreDiameter: null, maxPower: null },
    available: true,
  },
  {
    id: 'cable-st700',
    slug: 'st700',
    category: 'cables',
    model: 'ST700',
    lengths: [5, 10, 15, 20, 25, 30],
    specs: { coreDiameter: null, maxPower: null },
    available: true,
  },
  {
    id: 'cable-st800',
    slug: 'st800',
    category: 'cables',
    model: 'ST800',
    lengths: [5, 10, 15, 20, 25, 30],
    specs: { coreDiameter: null, maxPower: null },
    available: true,
  },
  {
    id: 'cable-st900',
    slug: 'st900',
    category: 'cables',
    model: 'ST900',
    lengths: [5, 10, 15, 20, 25, 30],
    specs: { coreDiameter: null, maxPower: null },
    available: true,
  },

  // ── LAZER ODAK KAFALARI ──────────────────────────────────────────
  {
    id: 'head-fl50',
    slug: 'fl50',
    category: 'heads',
    model: 'FL50',
    specs: { focalLength: 50, maxPower: null },
    available: true,
  },
  {
    id: 'head-fl75',
    slug: 'fl75',
    category: 'heads',
    model: 'FL75',
    specs: { focalLength: 75, maxPower: null },
    available: true,
  },
  {
    id: 'head-fl100',
    slug: 'fl100',
    category: 'heads',
    model: 'FL100',
    specs: { focalLength: 100, maxPower: null },
    available: true,
  },
  {
    id: 'head-fl125',
    slug: 'fl125',
    category: 'heads',
    model: 'FL125',
    specs: { focalLength: 125, maxPower: null },
    available: true,
  },
  {
    id: 'head-fl150',
    slug: 'fl150',
    category: 'heads',
    model: 'FL150',
    specs: { focalLength: 150, maxPower: null },
    available: true,
  },
  {
    id: 'head-fl200',
    slug: 'fl200',
    category: 'heads',
    model: 'FL200',
    specs: { focalLength: 200, maxPower: null },
    available: true,
  },

  // ── XENON LAZER LAMBALARI ────────────────────────────────────────
  {
    id: 'lamp-xenon-1',
    slug: 'xenon-lamp',
    category: 'lamps',
    model: 'Xenon Lamp',
    specs: { type: 'Nd:YAG', dimensions: null },
    available: true,
  },
]

export function getByCategory(cat: ProductCategory) {
  return PRODUCTS.filter((p) => p.category === cat)
}

export function getBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null
}
