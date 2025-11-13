import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

type SupportedDirections = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type SupportedAlignItems = | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type SupportedJustifyContent = | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
type SupportedAlignContent = | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

@Component({
  selector: 'row',
  template: '<ng-content></ng-content>',
  styleUrl: 'row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'row',
    '[style.--direction]': 'direction()',
    '[style.--gap]': 'item_gap_parsed()',
    '[style.--flex-style]': 'inline() ? "inline-flex" : null',
    '[style.--align-items]': 'align_items()',
    '[style.--justify-content]': 'justify_content()',
    '[style.--align-content]': 'align_content()',
  }
})
export class RowComponent {
  direction = input<SupportedDirections>()
  inline = input<boolean>()

  gap = input<string | number>()
  align_items = input<SupportedAlignItems|null>(null, {alias: 'align-items'})
  justify_content = input<SupportedJustifyContent|null>(null, {alias: 'justify-content'})
  align_content = input<SupportedAlignContent>('stretch', {alias: 'align-content'})

  item_gap_parsed = computed(() => {
    const val = this.gap();

    if (typeof val === 'string' && isNaN(Number(val))) {
      return val;
    }

    return `${val}px`;
  });
}
