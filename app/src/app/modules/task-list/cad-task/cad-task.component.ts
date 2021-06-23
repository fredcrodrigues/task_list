import { Component, OnInit } from '@angular/core';
import { faTrash , faPen} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cad-task',
  templateUrl: './cad-task.component.html',
  styleUrls: ['./cad-task.component.css']
})
export class CadTaskComponent implements OnInit {

  faTrash = faTrash;
  faPen = faPen;
  
  ngOnInit(): void {

  }

}
