import {Component} from '@angular/core'
import { Book} from '../../models/book.interface';
@Component({
    selector:'books-dashboard',
    template:`
   <div>
   <book-count
   [items]="books"></book-count>
   <book-detail
   *ngFor="let book of books"
   [detail]="book">
   </book-detail>
   </div>`
  })
export class BooksDashboardComponent{
    books:Book[]=[
        {
            id:1,
            title:"Node Js",
            published:145678,
            instock:false,
            authors:[{
                name:"bindu",
                age:22
            }]
        },
        {
            id:2,
            title:"html",
            published:178978,
            instock:true,
            authors:[{
                name:"sri",
                age:21
            }]
        },
        {
            id:3,
            title:"css",
            published:1097678,
            instock:false,
            authors:[{
                name:"mani",
                age:20
        }]
        }
]
}