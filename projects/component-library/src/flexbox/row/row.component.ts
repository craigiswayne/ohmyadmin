import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

type SupportedDirections = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type SupportedAlignItems = | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

@Component({
  selector: 'row',
  template: '<ng-content></ng-content>',
  styleUrl: 'row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'row',
    '[style.--direction]': 'direction()',
    '[style.--gap]': 'item_gap_parsed()',
    '[style.--flex-style]': 'inline() ? "inline-flex" : "flex"',
    '[style.--align-items]': 'align_items()',
  }
})
export class RowComponent {
  gap = input<string|number>(0)
  direction = input<SupportedDirections>('row')
  inline = input<boolean>(false)
  align_items = input<SupportedAlignItems>('stretch', {alias: 'align-items'})

  item_gap_parsed = computed(() => {
    const val = this.gap();

    if (typeof val === 'string' && isNaN(Number(val))) {
      return val;
    }

    return `${val}px`;
  });
}
