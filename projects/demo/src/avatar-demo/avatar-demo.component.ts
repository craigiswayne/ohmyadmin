import {Component, ComponentRef, effect, viewChild, ViewContainerRef} from '@angular/core';
import {AvatarComponent} from 'component-library';
import {ExtractSignalInputs} from '../types/extract-signal-inputs.type';

@Component({
  selector: 'avatar-demo',
  template: '<section #dynamicContainer></section>'
})
export class AvatarDemoComponent {

  container = viewChild('dynamicContainer', {read: ViewContainerRef});

  constructor() {
    effect(() => {
      const vcr = this.container();

      if (!vcr) return;

      vcr.clear();

      type AvatarInputs = ExtractSignalInputs<AvatarComponent> & { description: string };

      const test_cases: AvatarInputs[] = [
        {
          name: 'Craig Wayne Govender',
          image_url: 'https://mockmind-api.uifaces.co/content/human/1.jpg',
          description: 'full name + image'
        },
        {
          name: 'Craig Wayne Govender',
          description: 'first name, middle name, last name but no image'
        },
        {
          name: 'Craig Wayne',
          description: 'first name, middle name but no image'
        },
        {
          name: 'Craig',
          description: 'just the first name'
        },
        {
          name: 'Craig Wayne Govender',
          image_url: 'https://mockmind-api.uifaces.co/content/human/x.jpg',
          description: 'full name + broken image'
        },
        {
          name: '  Craig   Wayne   Govender',
          image_url: 'https://mockmind-api.uifaces.co/content/human/2.jpg',
          description: 'leading spaces in full name + image'
        },
        {
          description: 'no image or name provided'
        }
      ]

      test_cases.forEach(test_case => {
        const ref: ComponentRef<AvatarComponent> = vcr.createComponent(AvatarComponent);

        if(test_case.name){
          ref.setInput('name', test_case.name);
        }

        if(test_case.image_url){
          ref.setInput('image_url', test_case.image_url);
        }

        const hostElement = ref.location.nativeElement as HTMLElement;
        hostElement.title = test_case.description;
      })
    });
  }
}
