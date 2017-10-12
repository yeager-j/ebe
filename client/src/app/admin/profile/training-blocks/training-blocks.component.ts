import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../common/classes/user';

@Component({
  selector: 'app-training-blocks',
  templateUrl: './training-blocks.component.html',
  styleUrls: ['./training-blocks.component.scss']
})
export class TrainingBlocksComponent implements OnInit {
  @Input() user: User[];

  constructor() { }

  ngOnInit() {
  }

}
