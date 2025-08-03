// functions/decodeHtml.ts
import { decode } from 'he';

export function decodeHtml(text: string) {
  return decode(text);
}
