export function getImg(content: string): string | null {
  const match = content.match(/<img [^>]*src="([^"]+)"[^>]*>/);
  return match ? match[1] : null;
}
