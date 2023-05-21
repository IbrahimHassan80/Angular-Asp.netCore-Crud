import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsItemsComponent } from './components/authors-items/authors-items.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'booklist',
    component : BookListComponent,
    pathMatch : 'full'
  },
  {
    path : 'bookcreate',
    component :  BookCreateComponent,
    pathMatch : 'full'
  },
  {
    path : 'author',
    component :  AuthorsItemsComponent,
    pathMatch : 'full'
  },
  {
    path : 'modal',
    component :  ModalComponent,
    pathMatch : 'full'
  },
  {
    path : '**',
    component :  NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
