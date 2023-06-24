import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'book-list',
    pathMatch: 'full'
  },
  {
    path: 'book-create',
    loadChildren: () => import('./book-create/book-create.module').then( m => m.BookCreatePageModule)
  },
  {
    path: 'book-edit/:idBook',
    loadChildren: () => import('./book-edit/book-edit.module').then( m => m.BookEditPageModule)
  },
  {
    path: 'book-list',
    loadChildren: () => import('./book-list/book-list.module').then( m => m.BookListPageModule)
  },
  {
    path: 'book-detail/:idBook',
    loadChildren: () => import('./book-detail/book-detail.module').then( m => m.BookDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
