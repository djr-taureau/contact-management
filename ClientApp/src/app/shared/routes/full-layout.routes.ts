import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.
export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: '@ui/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'contacts',
    loadChildren: '@app/contact/contact.module#ContactModule'
  },
  {
    path: 'calendar',
    loadChildren: '@ui/calendar/calendars.module#CalendarsModule'
  },
  {
    path: 'charts',
    loadChildren: '@ui/charts/charts.module#ChartsNg2Module'
  },
  {
    path: 'forms',
    loadChildren: '@ui/forms/apx-forms.module#ApxFormsModule'
  },
  {
    path: 'maps',
    loadChildren: '@ui/maps/maps.module#MapsModule'
  },
  {
    path: 'tables',
    loadChildren: '@ui/tables/tables.module#TablesModule'
  },
  {
    path: 'datatables',
    loadChildren: '@ui/data-tables/data-tables.module#DataTablesModule'
  },
  {
    path: 'uikit',
    loadChildren: '@ui/ui-kit/ui-kit.module#UIKitModule'
  },
  {
    path: 'components',
    loadChildren: '@ui/components/ui-components.module#UIComponentsModule'
  },
  {
    path: 'pages',
    loadChildren: '@app/shared/pages/full-pages/full-pages.module#FullPagesModule'
  },
  {
    path: 'cards',
    loadChildren: '@ui/cards/cards.module#CardsModule'
  },
  {
    path: 'colorpalettes',
    loadChildren: '@ui/color-palette/color-palette.module#ColorPaletteModule'
  },
  {
    path: 'chat',
    loadChildren: '@ui/chat/chat.module#ChatModule'
  },
  {
    path: 'chat-ngrx',
    loadChildren: '@ui/chat-ngrx/chat-ngrx.module#ChatNGRXModule'
  },
  {
    path: 'inbox',
    loadChildren: '@ui/inbox/inbox.module#InboxModule'
  },
  {
    path: 'taskboard',
    loadChildren: '@ui/taskboard/taskboard.module#TaskboardModule'
  },
  {
    path: 'taskboard-ngrx',
    loadChildren: '@ui/taskboard-ngrx/taskboard-ngrx.module#TaskboardNGRXModule'
  },
  {
    path: 'player',
    loadChildren: '@ui/player/player.module#PlayerModule'
  }
];
