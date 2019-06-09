import { Component, Input} from '@angular/core'
import {Book} from '../../models/book.interface'
@Component({
    selector:'book-count',
    template:`
    <h1>BooksDashboard</h1>
    <p>total books:{{items.length}}</p>
    <hr/>
    
   `
})
export class BookCountComponent{
    @Input()
    items:Book[];

}