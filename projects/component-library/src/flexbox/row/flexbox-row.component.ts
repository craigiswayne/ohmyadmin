import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import type {
  SupportedAlignContent,
  SupportedAlignItems,
  SupportedDirections,
  SupportedJustifyContent
} from '../flexbox.types';
import {input_to_px, type INPUT_TO_PX_ALLOWED_VALUES} from '../../helpers/input_to_px';

@Component({
  selector: 'row',
  template: '<ng-content></ng-content>',
  styleUrl: 'flexbox-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'row',
    '[class]': 'direction_class()',
    '[style.--direction]': 'direction()',
    '[style.--gap]': 'gap()',
    '[style.--flex-style]': `inline() ? 'inline-flex' : null`,
    '[style.--align-items]': 'align_items()',
    '[style.--justify-content]': 'justify_content()',
    '[style.--align-content]': 'align_content()',
  }
})
export class FlexboxRowComponent {
  direction = input<SupportedDirections>()
  inline = input<boolean>()
  gap =  input<string|0|undefined,INPUT_TO_PX_ALLOWED_VALUES>(undefined, {transform: input_to_px})
  align_items = input<SupportedAlignItems | null>(null, {alias: 'align-items'})
  justify_content = input<SupportedJustifyContent | null>(null, {alias: 'justify-content'})
  align_content = input<SupportedAlignContent>('stretch', {alias: 'align-content'})

  direction_class = computed(() => `flex-direction-${this.direction()}`);
}
