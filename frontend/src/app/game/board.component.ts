import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {

  // todo: remove (for test only)
  private buttons: string[] = ["b1_1", "b1_2", "b1_3", "b1_4", "b1_5",
    "b2_1", "b2_2", "b2_3", "b2_4", "b2_5",
    "b3_1", "b3_2", "b3_3", "b3_4", "b3_5",
    "b4_1", "b4_2", "b4_3", "b4_4", "b4_5",
    "b5_1", "b5_2", "b5_3", "b5_4", "b5_5"];

  ngOnInit(): void {
  }

}
