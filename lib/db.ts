import { neon } from '@neondatabase/serverless';

export function db() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL 환경변수가 설정되지 않았습니다.');
  return neon(url);
}
