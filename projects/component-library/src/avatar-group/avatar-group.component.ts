import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  ElementRef,
  input,
} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {input_to_whole_number} from '../helpers/input_to_whole_number';
import {input_to_px, type INPUT_TO_PX_ALLOWED_VALUES} from '../helpers/input_to_px';

@Component({
  selector: 'avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrl: './avatar-group.component.scss',
  imports: [
    AvatarComponent
  ],
  host: {
    '[style.--item-count]': 'avatar_items_as_html().length',
    '[style.--overlap]': 'overlap()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarGroupComponent {

  limit = input<number, number | string>(0, {transform: input_to_whole_number});
  layering = input<'first_on_top' | 'last_on_top'>('last_on_top');
  overlap = input<string | 0 | undefined, INPUT_TO_PX_ALLOWED_VALUES>(undefined, {transform: input_to_px});
  bordered = input<boolean>();

  protected avatar_items_as_html = contentChildren(AvatarComponent, {read: ElementRef});
  private avatar_items_as_component = contentChildren(AvatarComponent);

  protected surplus_text = computed(() => {
    const limit = this.limit();
    if (limit <= 0) {
      return undefined;
    }

    const surplus = this.avatar_items_as_html().length - limit;
    return surplus > 0 ? `+ ${surplus}` : undefined;
  });

  constructor() {
    effect(() => {
      const layering = this.layering();
      const limit = this.limit();
      const bordered_signal = this.bordered;
      const html_items = this.avatar_items_as_html();
      const component_items = this.avatar_items_as_component();
      const total_items = html_items.length;

      component_items.forEach((component_item, index) => {
        if (component_item.bordered() === undefined) {
          component_item.bordered = bordered_signal;
        }

        const avatar_html_item_ref = html_items[index];
        if (!avatar_html_item_ref) {
          return;
        }

        const avatar_html_element = avatar_html_item_ref.nativeElement;

        avatar_html_element.style.zIndex = layering === 'first_on_top' ? `${total_items - index}` : '';

        const is_collapsed = limit > 0 && index >= limit;
        avatar_html_element.classList.toggle('collapsed', is_collapsed);
      });
    });
  }
}
