import { ReflectionKind } from 'typedoc/dist/lib/models';
import { DeclarationReflection } from 'typedoc/dist/lib/models/reflections';
import { ThemeService } from '../theme.service';

/**
 * Return true if index item should be displayed
 * @param item
 * @param opts
 */
export function ifDisplayIndexItem(item: DeclarationReflection, opts: any) {
  const options = ThemeService.getOptions();
  if (
    (item.children && item.children.length === 0) ||
    (options.excludePrivate && item.flags.isPrivate) ||
    (!item.flags.isExported && (item.kind !== ReflectionKind.Method && item.kind !== ReflectionKind.Property))
  ) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
