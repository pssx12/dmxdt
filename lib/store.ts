export const STORE = {
  name: '디엠엑스디티(DMXDT)',
  representative: '박성식',
  businessNumber: '898-39-01629',
  phone: '055-942-6878',
  address: '경상남도 거창군 거창읍 동동6길 100, 102동 201호(베어스타운)',
  mailOrderNumber: process.env.NEXT_PUBLIC_MAIL_ORDER_NUMBER || '',
} as const;

export const PRODUCT = {
  id: 'design-117-question-answer-ring',
  slug: 'question-answer-ring',
  name: 'DMXDT 117 QUESTION / ANSWER 링',
  shortName: '117 QUESTION / ANSWER Ring',
  price: 1_290_000,
  shippingFee: 0,
  colors: ['18K Champagne Gold'],
  sizes: ['KS 14'],
  material: '18K Au750 샴페인 골드',
  manufacturer: 'DMXDT 귀금속 협력 생산처',
  countryOfOrigin: '대한민국',
  care: '화학제품·충격·고온 노출을 피하고 부드러운 천으로 관리',
} as const;

export function calculateOrderAmount(quantity: number) {
  return PRODUCT.price * quantity + PRODUCT.shippingFee;
}
