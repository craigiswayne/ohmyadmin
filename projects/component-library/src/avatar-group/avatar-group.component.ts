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

  limit = input<number, number | string>(0, {transform: input_to_whole_number})
  layering = input<'first_on_top' | 'last_on_top'>('last_on_top')
  overlap = input<string | 0 | undefined, INPUT_TO_PX_ALLOWED_VALUES>(undefined, {transform: input_to_px})
  bordered = input<boolean>()

  avatar_items_as_html = contentChildren(AvatarComponent, {read: ElementRef})
  avatar_items_as_component = contentChildren(AvatarComponent)

  extra_count = computed<string | undefined>(() => {
    const limit = this.limit();
    const surplus = limit === 0 ? 0 : this.avatar_items_as_html().length - limit;
    return surplus > 0 ? `+ ${surplus}` : undefined
  })

  constructor() {
    effect(() => {
      const items = this.avatar_items_as_html();
      const layering = this.layering()
      const limit = this.limit()

      items.forEach(async (item, index) => {
        if (layering === 'first_on_top') {
          item.nativeElement.style.zIndex = items.length - index
        } else {
          item.nativeElement.style.zIndex = null
        }

        if (limit > 0 && index >= limit) {
          item.nativeElement.classList.add('collapsed')
        }
      })
    })

    effect(() => {
      const items = this.avatar_items_as_component();
      items.forEach( async item => {
        const item_has_bordered_value = item.bordered() !== undefined;
        if(!item_has_bordered_value){
          item.bordered = this.bordered
        }
      })
    })
  }
}
