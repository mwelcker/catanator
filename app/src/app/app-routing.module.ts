import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'generator',
        pathMatch: 'full'
    },
    {
        path: 'generator',
        loadChildren: () => import('./pages/generator/generator.module').then(m => m.GeneratorPageModule)
    },
    {
        path: 'editor',
        loadChildren: () => import('./pages/editor/editor.module').then(m => m.EditorPageModule)
    },
    {
        path: 'field-edit-modal',
        loadChildren: () => import('./pages/editor/field-edit-modal/field-edit-modal.module').then(m => m.FieldEditModalPageModule)
    },
  {
    path: 'community',
    loadChildren: () => import('./pages/community/community.module').then(m => m.CommunityPageModule)
  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
