// First letter to high
export const Capitalize = (text: string | undefined) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// All letters to high
export const Uppercase = (text: string | undefined) => {
  if (!text) return '';
  return text.toUpperCase();
};

// All letters to low
export const Lowercase = (text: string | undefined) => {
  if (!text) return '';
  return text?.toLowerCase();
};

// Create slug from title
export const Slugify = (text: string | undefined) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Retrieve ID from slug
export const SlugifyID = (text: string | undefined) => {
  const splitText = text?.split('=');
  return Number(splitText?.[0]);
};
