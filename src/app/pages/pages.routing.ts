<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'panel', pathMatch:'full' },
            { path: 'panel', component: BlankComponent , data: { breadcrumb: 'Panel' }  },
            { path: 'usuarios', loadChildren: 'app/pages/user/user.module#UserModule', data: { breadcrumb: 'Usuarios' } },
             { path: 'sucursales', loadChildren: 'app/pages/branch/branch.module#BranchModule', data: { breadcrumb: 'Sucursales' } },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: 'app/pages/charting/charting.module#ChartingModule', data: { breadcrumb: 'Charts' } },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'mail', loadChildren: 'app/pages/mail/mail.module#MailModule', data: { breadcrumb: 'Mail' } },
            { path: 'calendar', loadChildren: 'app/pages/calendar/calendar.module#CalendarModule', data: { breadcrumb: 'Calendar' } },
            { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: '' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule', data: { breadcrumb: 'Editors' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } }
        ]
    }
];

=======
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'panel', pathMatch:'full' },
            { path: 'panel', component: BlankComponent , data: { breadcrumb: 'Panel' }  },
            { path: 'usuarios', loadChildren: 'app/pages/user/user.module#UserModule', data: { breadcrumb: 'Usuarios' } },
             { path: 'sucursales', loadChildren: 'app/pages/branch/branch.module#BranchModule', data: { breadcrumb: 'Sucursales' } },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: 'app/pages/charting/charting.module#ChartingModule', data: { breadcrumb: 'Charts' } },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'mail', loadChildren: 'app/pages/mail/mail.module#MailModule', data: { breadcrumb: 'Mail' } },
            { path: 'calendar', loadChildren: 'app/pages/calendar/calendar.module#CalendarModule', data: { breadcrumb: 'Calendar' } },
            { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: '' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule', data: { breadcrumb: 'Editors' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } }
        ]
    }
];

>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
export const routing: ModuleWithProviders = RouterModule.forChild(routes);