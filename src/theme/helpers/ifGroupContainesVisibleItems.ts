import { ReflectionKind } from 'typedoc/dist/lib/models';
import { ReflectionGroup } from 'typedoc/dist/lib/models/ReflectionGroup';
import { ThemeService } from '../theme.service';

/**
 * Returns true if group contains visible items
 * @param group
 * @param opts
 */
export function ifGroupContainesVisibleItems(group: ReflectionGroup, opts: any) {
  const options = ThemeService.getOptions();

  if (
    (!options.excludePrivate || !group.allChildrenArePrivate) &&
    (group.someChildrenAreExported || group.kind === ReflectionKind.Method || group.kind === ReflectionKind.Property)
  ) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
}
