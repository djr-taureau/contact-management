import {ComponentType, ComponentPortal} from '@angular/cdk/portal';
import { ComponentRef } from '@angular/core';

export interface TabInterface {
  name:string;
  componentClass:ComponentType<TabComponent>;
}


export interface TabComponent {
  onActivate:() => void;
}


export interface ActiveTabInterface {
  name:string;
  portal:ComponentPortal<TabComponent>;
  componentRef:ComponentRef<TabComponent>;
  dispose:() => void;
}
