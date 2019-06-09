import { Component, Input} from '@angular/core'
import {Book} from '../../models/book.interface'
@Component({
    selector:'book-detail',
    template:`
    <h1>{{detail.title}}</h1>
    <span>{{detail.published}}</span>
    <hr>`
})
export class BookDetailComponent{
    @Input()
    detail:Book;
}