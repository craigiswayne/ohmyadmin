import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  image_url = input<string>();
  name = input<string>();

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
