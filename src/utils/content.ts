export function resolvePublicPath(path: string | undefined, base = '') {
  if (!path) return undefined;

  const trimmed = path.trim();
  if (!trimmed) return undefined;
  if (/^[a-z][a-z\d+\-.]*:/i.test(trimmed) || trimmed.startsWith('//')) return trimmed;

  const normalizedBase = base.replace(/\/$/, '');
  const normalizedPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return `${normalizedBase}${normalizedPath}`;
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
