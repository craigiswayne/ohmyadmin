import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component, computed,
  contentChildren, ElementRef, input,
} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {input_to_whole_number} from '../helpers/input_to_whole_number';
import {input_to_px} from '../helpers/input_to_px';

@Component({
  selector: 'avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrl: './avatar-group.component.scss',
  imports: [
    AvatarComponent
  ],
  host: {
    '[style.--item-count]': 'items().length',
    '[style.--overlap]': 'overlap()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarGroupComponent implements AfterContentInit {
  limit = input<number, number|string>(0, {transform: input_to_whole_number})
  layering = input<'first_on_top'|'last_on_top'>('last_on_top')
  overlap = input<string|0|undefined, string|number|undefined>(undefined, {transform: input_to_px})
  items = contentChildren(AvatarComponent, {read: ElementRef})

  extra_count = computed<string|undefined>(() => {
    const limit = this.limit();
    const surplus = limit === 0 ? 0 : this.items().length - limit;
    return surplus > 0 ? `+ ${surplus}` : undefined
  })

  ngAfterContentInit(){
    this.maybe_update_layering()
    this.maybe_collapse_items()
  }

  private async maybe_update_layering(){
    const items = this.items();
    const layering = this.layering()
    items.forEach(async (item, index) => {
      if(layering === 'first_on_top') {
        item.nativeElement.style.zIndex = items.length - index
      } else {
        item.nativeElement.style.zIndex = null
      }
    })
  }

  private async maybe_collapse_items(): Promise<void> {
    const limit = this.limit()
    const items = this.items();

    if(limit === 0 || items.length <= limit){
      return
    }

    items.slice(limit).forEach(async item => {
      item.nativeElement.classList.add('collapsed')
    })
  }
}
