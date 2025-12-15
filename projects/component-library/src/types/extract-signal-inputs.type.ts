import {InputSignal} from '@angular/core';

export type ExtractSignalInputs<T> = {
  [K in keyof T as T[K] extends InputSignal<any> ? K : never]?: T[K] extends InputSignal<infer V> ? V : never;
};
