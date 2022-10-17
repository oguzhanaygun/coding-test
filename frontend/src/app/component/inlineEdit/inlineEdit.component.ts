import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inlineEdit.component.html',
  styleUrls: ['./inlineEdit.component.css'],
})
export class InlineEditComponent implements OnInit {
  @Input() data!: String;
  @Input() textContent!: String;
  @Output() focusOut: EventEmitter<String> = new EventEmitter<String>();
  @Input()
  editMode = false;
  constructor() {}

  ngOnInit() {}

  onFocusOut() {
    this.focusOut.emit(this.data);
  }

  looseFocus($event:Event){
    var target = $event.target as HTMLInputElement;
    target.blur();
}
}
