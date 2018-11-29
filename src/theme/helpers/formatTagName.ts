/**
 * Format a tag name based on its value. If the tag is considered to be
 * important, the function will wrap it with an emphasis markup. If the tag can
 * be ignored, the function will return an empty line instead.
 *
 * @param tagName The tag name to format
 */
export function formatTagName(tagName: string): string {
  if (tagName === 'remarks') {
    return '\n';
  }

  return `*__${tagName}__*: `;
}
