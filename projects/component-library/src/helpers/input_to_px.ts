export const input_to_px = (value: string|number|undefined): string|0|undefined => {
  console.log('input_number_to_px', value)
  if(value === undefined){
    return undefined
  }

  if (typeof value === 'string' && isNaN(Number(value))) {
    return value;
  }

  if (value.toString() === '0'){
    return 0
  }

  return `${value}px`;
}
