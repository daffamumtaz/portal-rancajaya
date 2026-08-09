export function resolvePublicPath(path: string | undefined, base = '') {
  if (!path) return undefined;

  const trimmed = path.trim();
  if (!trimmed) return undefined;
  if (/^[a-z][a-z\d+\-.]*:/i.test(trimmed) || trimmed.startsWith('//')) return trimmed;

  const normalizedBase = base.replace(/\/$/, '');
  const normalizedPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return `${normalizedBase}${normalizedPath}`;
}

type PublishableData = {
  aktif?: boolean;
  release_status?: 'Draf' | 'Terbit';
};

export function isPublishedContent(data: PublishableData | undefined) {
  if (!data || data.aktif === false) return false;
  return data.release_status !== 'Draf';
}

export function toSafeFormUrl(value: string | undefined) {
  if (!value) return undefined;

  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith('//')) return undefined;
  if (trimmed.startsWith('/')) return trimmed;

  try {
    const url = new URL(trimmed);
    return ['http:', 'https:'].includes(url.protocol) ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

export function toTelHref(phone: string | undefined) {
  if (!phone) return undefined;

  const digits = phone.replace(/\D/g, '');
  if (digits.length < 5) return undefined;

  return `tel:${phone.trim().startsWith('+') ? '+' : ''}${digits}`;
}

export function toWhatsAppHref(phone: string | undefined) {
  if (!phone) return undefined;

  const digits = phone.replace(/\D/g, '');
  if (digits.length < 9) return undefined;

  let normalized = digits;
  if (normalized.startsWith('0')) normalized = `62${normalized.slice(1)}`;
  if (normalized.startsWith('8')) normalized = `62${normalized}`;

  return normalized.startsWith('628') ? `https://wa.me/${normalized}` : undefined;
}

export function toGoogleMapsEmbedUrl(latitude?: number, longitude?: number, zoom = 18, query?: string) {
  const lat = typeof latitude === 'number' && Number.isFinite(latitude) ? latitude : -6.3796663;
  const lon = typeof longitude === 'number' && Number.isFinite(longitude) ? longitude : 107.6461475;
  const level = Number.isFinite(zoom) ? Math.min(21, Math.max(1, Math.round(zoom))) : 18;

  const location = query?.trim() ? encodeURIComponent(query.trim()) : `${lat},${lon}`;
  return `https://maps.google.com/maps?q=${location}&z=${level}&t=k&output=embed`;
}

export function toGoogleMapsUrl(latitude?: number, longitude?: number, directUrl?: string) {
  if (directUrl?.trim()) return directUrl.trim();
  const lat = typeof latitude === 'number' && Number.isFinite(latitude) ? latitude : -6.3796663;
  const lon = typeof longitude === 'number' && Number.isFinite(longitude) ? longitude : 107.6461475;

  return `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
}
