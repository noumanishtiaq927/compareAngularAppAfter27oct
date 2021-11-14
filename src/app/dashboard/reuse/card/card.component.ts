import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {
  @ViewChild('topcards') cardelement: ElementRef | undefined;
  constructor() {}
  @Input() dynamicName = '';
  @Input() iconname = '';
  @Input() title = '';
  @Input() number:any = 9;
  @Input() value = "width: 78%";
  @Input() color ="bg-success"
  ngOnInit(): void {}
  ngAfterViewInit() {
    // console.log(this.cardelement);
  }
}
