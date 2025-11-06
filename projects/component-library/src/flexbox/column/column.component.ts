import {ChangeDetectionStrategy, Component, computed, HostBinding, input} from '@angular/core';

type ColumnValues = 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;

@Component({
  selector: 'column',
  template: '<ng-content></ng-content>',
  styleUrl: './column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent {

  cols = input<ColumnValues>('auto');
  sm = input<ColumnValues>();
  md = input<ColumnValues>();
  lg = input<ColumnValues>();
  xl = input<ColumnValues>();

  colsVar = computed(() => this.calculate_width(this.cols()));
  smVar = computed(() => this.calculate_width(this.sm()));
  mdVar = computed(() => this.calculate_width(this.md()));
  lgVar = computed(() => this.calculate_width(this.lg()));
  xlVar = computed(() => this.calculate_width(this.xl()));

  // 3. Bind the computed signals to the host element's CSS variables
  @HostBinding('style.--cols') get hostCols() { return this.colsVar(); }
  @HostBinding('style.--sm') get hostSm() { return this.smVar(); }
  @HostBinding('style.--md') get hostMd() { return this.mdVar(); }
  @HostBinding('style.--lg') get hostLg() { return this.lgVar(); }
  @HostBinding('style.--xl') get hostXl() { return this.xlVar(); }

  /**
   * Calculates a percentage width based on a 12-column span.
   * e.g., "6" -> "50%", "3" -> "25%"
   */
  private calculate_width(column_spread: ColumnValues): string | undefined {
    if (!column_spread) {
      return undefined;
    }
    const column_spread_number = parseInt(column_spread.toString(), 10);
    const width = (column_spread_number / 12) * 100;
    return `${width}%`;
  }
}
