
import { BasePortalOutlet, ComponentPortal, PortalOutlet } from '@angular/cdk/portal';
import { ActiveTabInterface, TabInterface, TabComponent } from '@app/contact/components/form-steps/tab-portal.interfaces';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injector
} from '@angular/core';


export class TabPortalOutlet {


  private _activeTabs: { [name: string]: ActiveTabInterface } = {};

  private _currentTab: ActiveTabInterface | null = null;

  constructor(
    public availableTabs: TabInterface[],
    public outletElement: Element,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
  }

  public get activeComponents(): TabComponent[] {
    return Object
      .keys(this._activeTabs)
      .map((name: string) => this._activeTabs[name].componentRef.instance);
  }

  public get currentTab(): Readonly<ActiveTabInterface> {
    return this._currentTab;
  }

  public switchTo(name: string) {
    const tab = this.availableTabs.find(tab => tab.name === name);

    if (!tab) {
      throw (`Trying to swtich to unknown tab ${name}.`);
    }

    this.detach();

    // Get existing or new component instance
    const instance = this.activateInstance(tab);

    this.outletElement.innerHTML = '';
    this.outletElement.appendChild(this._getComponentRootNode(instance.componentRef));
    this._currentTab = instance;
    instance.componentRef.instance.onActivate();
  }

  public detach(): void {
    const current = this._currentTab;
    if (current !== null) {
      current.portal.setAttachedHost(null);
      this._currentTab = null;
    }
  }


  dispose(): void {
    // Dispose all active tabs
    for (let name in this._activeTabs) {
      this._activeTabs[name].dispose();
    }

    // Remove outlet element
    if (this.outletElement.parentNode != null) {
      this.outletElement.parentNode.removeChild(this.outletElement);
    }
  }

  private activateInstance(tab: TabInterface): ActiveTabInterface {
    if (!this._activeTabs[tab.name]) {
      this._activeTabs[tab.name] = this.createComponent(tab);
    }

    return this._activeTabs[tab.name] || null;
  }

  private createComponent(tab: TabInterface): ActiveTabInterface {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tab.componentClass);
    const componentRef = componentFactory.create(this.injector);
    const portal = new ComponentPortal(tab.componentClass, null, this.injector);

    // Attach component view
    this.appRef.attachView(componentRef.hostView);

    return {
      name: tab.name,
      portal: portal,
      componentRef: componentRef,
      dispose: () => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      }
    };
  }

  /** Gets the root HTMLElement for an instantiated component. */
  private _getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }
}
