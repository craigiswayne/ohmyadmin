export type T_SHIRT_SIZES = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large' | 'extra-extra-large'
export type T_SHIRT_SIZES_ABBREVIATION = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export function is_t_shirt_size(value: string): value is T_SHIRT_SIZES {
  if(value === undefined){
    return false;
  }

  return ['extra-small', 'small', 'medium', 'large', 'extra-large', 'extra-extra-large'].includes(value.toString());
}
