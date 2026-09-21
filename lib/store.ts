export const STORE = {
  name: '디엠엑스디티(DMXDT)',
  representative: '박성식',
  businessNumber: '898-39-01629',
  phone: '055-942-6878',
  address: '경상남도 거창군 거창읍 동동6길 100, 102동 201호(베어스타운)',
  mailOrderNumber: process.env.NEXT_PUBLIC_MAIL_ORDER_NUMBER || '',
} as const;

export const PRODUCT = {
  id: 'foundation-001-sweatshirt',
  slug: 'foundation-001',
  name: 'DMXDT Foundation 001 Premium Sweatshirt',
  shortName: 'Foundation 001 Premium Sweatshirt',
  price: 129_000,
  shippingFee: 0,
  colors: ['Black', 'Off White', 'Melange Grey'],
  sizes: ['S', 'M', 'L', 'XL'],
  material: '면 100% 헤비웨이트 3단쭈리(비기모 루프백)',
  manufacturer: 'DMXDT 협력 생산처',
  countryOfOrigin: '대한민국',
  care: '찬물 단독 세탁 권장 · 표백제 및 건조기 사용 금지',
} as const;

export function calculateOrderAmount(quantity: number) {
  return PRODUCT.price * quantity + PRODUCT.shippingFee;
}
