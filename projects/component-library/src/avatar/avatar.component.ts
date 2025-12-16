import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import {random_milky_hsl_color} from '../helpers/random_milky_hsl_color';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  host: {
    '[style.--border-width]': 'bordered() ? "3px" : undefined',
    '[style.--background-color]': 'random_milky_hsl_color'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  image_url = input<string>();
  name = input<string>();
  bordered = input<boolean>(false)
  protected readonly random_milky_hsl_color = random_milky_hsl_color();

  protected initials = computed<string>(() => {
      return (this.name() ?? 'Unknown User')
        .split(/\s/)
        .filter(i => i)
        .map((part: string) => part[0].toUpperCase())
        .slice(0, 2).join('');
  })

  protected image_load_error = signal<boolean>(false);

  protected on_image_error(): void {
    this.image_load_error.set(true)
  }

}
