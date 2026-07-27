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
  release_status?: 'Draf' | 'Siap' | 'Terbit';
};

export function isPublishedContent(data: PublishableData | undefined) {
  if (!data || data.aktif === false) return false;
  // Siap is kept as a legacy value so older entries remain visible after the
  // previous controlled workflow is removed. Only an explicit Draf hides content.
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
  if (/[a-z]/i.test(phone)) return undefined;

  const digits = phone.replace(/\D/g, '');
  if (digits.length < 5) return undefined;

  return `tel:${phone.trim().startsWith('+') ? '+' : ''}${digits}`;
}

export function toWhatsAppHref(phone: string | undefined) {
  if (!phone) return undefined;
  if (/[a-z]/i.test(phone)) return undefined;

  const digits = phone.replace(/\D/g, '');
  if (digits.length < 9) return undefined;

  let normalized = digits;
  if (normalized.startsWith('0')) normalized = `62${normalized.slice(1)}`;
  if (normalized.startsWith('8')) normalized = `62${normalized}`;

  return normalized.startsWith('628') ? `https://wa.me/${normalized}` : undefined;
}

export function toGoogleMapsEmbedUrl(latitude?: number, longitude?: number, zoom = 18) {
  const lat = typeof latitude === 'number' && Number.isFinite(latitude) ? latitude : -6.3796663;
  const lon = typeof longitude === 'number' && Number.isFinite(longitude) ? longitude : 107.6461475;
  const level = Number.isFinite(zoom) ? Math.min(21, Math.max(1, Math.round(zoom))) : 18;

  return `https://maps.google.com/maps?q=${lat},${lon}&z=${level}&output=embed`;
}

export function toGoogleMapsUrl(latitude?: number, longitude?: number) {
  const lat = typeof latitude === 'number' && Number.isFinite(latitude) ? latitude : -6.3796663;
  const lon = typeof longitude === 'number' && Number.isFinite(longitude) ? longitude : 107.6461475;

  return `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
}
