import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import type {
  SupportedAlignContent,
  SupportedAlignItems,
  SupportedDirections,
  SupportedJustifyContent
} from 'component-library';

@Component({
  selector: 'row',
  template: '<ng-content></ng-content>',
  styleUrl: 'flexbox-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'row',
    '[class]': 'direction_class()',
    '[style.--direction]': 'direction()',
    '[style.--gap]': 'item_gap_parsed()',
    '[style.--flex-style]': `inline() ? 'inline-flex' : null`,
    '[style.--align-items]': 'align_items()',
    '[style.--justify-content]': 'justify_content()',
    '[style.--align-content]': 'align_content()',
  }
})
export class FlexboxRowComponent {
  direction = input<SupportedDirections>('row')
  inline = input<boolean>()

  gap = input<string | number>(0)
  align_items = input<SupportedAlignItems | null>(null, {alias: 'align-items'})
  justify_content = input<SupportedJustifyContent | null>(null, {alias: 'justify-content'})
  align_content = input<SupportedAlignContent>('stretch', {alias: 'align-content'})

  direction_class = computed(() => `flex-direction-${this.direction()}`);

  item_gap_parsed = computed(() => {
    const val = this.gap();

    if (typeof val === 'string' && isNaN(Number(val))) {
      return val;
    }

    return `${val}px`;
  });
}
