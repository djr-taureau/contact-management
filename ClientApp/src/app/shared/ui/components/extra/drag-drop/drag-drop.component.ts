import { Component, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  providers: [DragulaService],
  encapsulation: ViewEncapsulation.None
})
export class DragDropComponent {

  public many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
  public many2: Array<string> = ['Explore', 'them'];
  public groups: Array<any> = [
    {
      name: 'Group A',
      items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
    },
    {
      name: 'Group B',
      items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 4' }]
    }
  ];

  public thirdOptions: any = {
    removeOnSpill: true
  }
  public fourthOptions: any = {
    revertOnSpill: true
  }
  public fifthOptions: any = {
    copy: true
  }
  public sixthOptions: any = {
    moves: function (el: any, container: any, handle: any): any {
      // console.log(el, container);
      return handle.className === 'handle';
    }
  }

  public constructor(private dragulaService: DragulaService) {
    dragulaService.drag().subscribe((value: any) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop().subscribe((value: any) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over().subscribe((value: any) => {
      // console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out().subscribe((value: any) => {
      this.onOut(value.slice(1));
    });
    dragulaService.dropModel().subscribe((value: any) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel().subscribe((value: any) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  private hasClass(el: any, name: string): any {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string): void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string): void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args: any): void {
    let [e] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args: any): void {
    let [e] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args: any): void {
    let [el] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args: any): void {
    let [el] = args;
    this.removeClass(el, 'ex-over');
  }

  public clicked: any = {
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,
    'six': false,
    'seven': false
  };

  public onclick(key: any): void {
    this.clicked[key] = true;
    setTimeout(() => {
      this.clicked[key] = false;
    }, 2000);
  }
  private onDropModel(args: any): void {
    let [el, target, source] = args;
  }

  private onRemoveModel(args: any): void {
    let [el, source] = args;
  }



}
