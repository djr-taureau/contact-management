import { RouteInfo } from '@app/shared/sidebar/sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Dashboard',
    icon: 'ft-home',
    class: 'has-sub',
    badge: '2',
    badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      {
        path: '/dashboard/dashboard1',
        title: 'Dashboard1',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard2',
        title: 'Dashboard2',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/contacts',
    title: 'Contacts',
    icon: 'ft-user',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },

  {
    path: '/colorpalettes',
    title: 'Color Palette',
    icon: 'ft-droplet',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '/inbox',
    title: 'Inbox',
    icon: 'ft-mail',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '/chat',
    title: 'Chat',
    icon: 'ft-message-square',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '/chat-ngrx',
    title: 'Chat NgRx',
    icon: 'ft-message-square',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '/taskboard',
    title: 'Task Board',
    icon: 'ft-file-text',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '/taskboard-ngrx',
    title: 'Task Board NgRx',
    icon: 'ft-file-text',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '/player',
    title: 'Player',
    icon: 'ft-music',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '',
    title: 'UI Kit',
    icon: 'ft-aperture',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/uikit/grids',
        title: 'Grid',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/uikit/typography',
        title: 'Typography',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/uikit/syntaxhighlighter',
        title: 'Syntax Highlighter',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/uikit/helperclasses',
        title: 'Helper Classes',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/uikit/textutilities',
        title: 'Text Utilities',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },

      {
        path: '',
        title: 'Icons',
        icon: '',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
          {
            path: '/uikit/feather',
            title: 'Feather Icon',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/uikit/font-awesome',
            title: 'Font Awesome Icon',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/uikit/simple-line',
            title: 'Simple Line Icon',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          }
        ]
      }
    ]
  },
  {
    path: '',
    title: 'Components',
    icon: 'ft-box',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '',
        title: 'Bootstrap',
        icon: '',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
          {
            path: '/components/lists',
            title: 'List',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/buttons',
            title: 'Buttons',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/ng-buttons',
            title: 'NG Buttons',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/alerts',
            title: 'Alerts',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/badges',
            title: 'Badges',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/dropdowns',
            title: 'Dropdowns',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/inputgroups',
            title: 'Input Groups',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/media',
            title: 'Media Objects',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/pagination',
            title: 'Pagination',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/progress',
            title: 'Progress Bars',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/models',
            title: 'Modals',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/collapse',
            title: 'Collapse',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/accordion',
            title: 'Accordion',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/carousel',
            title: 'Carousel',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/datepicker',
            title: 'Datepicker',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/popover',
            title: 'Popover',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/rating',
            title: 'Rating',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/tabs',
            title: 'Tabs',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/timepicker',
            title: 'Timepicker',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/tooltip',
            title: 'Tooltip',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/typeahead',
            title: 'Typeahead',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          }
        ]
      },
      {
        path: '',
        title: 'Extra',
        icon: '',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
          {
            path: '/components/sweetalerts',
            title: 'Sweet Alert',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/toastr',
            title: 'Toastr',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/nouislider',
            title: 'NoUI Slider',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/upload',
            title: 'Upload',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/editor',
            title: 'Editor',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/dragndrop',
            title: 'Drag and Drop',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/tour',
            title: 'Tour',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/cropper',
            title: 'Image Cropper',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/tags',
            title: 'Input Tags',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/components/switch',
            title: 'Switch',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          }
        ]
      }
    ]
  },
  {
    path: '',
    title: 'Forms',
    icon: 'ft-edit',
    class: 'has-sub',
    badge: 'New',
    badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      {
        path: '',
        title: 'Elements',
        icon: '',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
          {
            path: '/forms/inputs',
            title: 'Inputs',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/forms/input-groups',
            title: 'Input Group',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/forms/input-grid',
            title: 'Input Grid',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          }
        ]
      },
      {
        path: '',
        title: 'Layouts',
        icon: '',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
          {
            path: '/forms/basic',
            title: 'Basic Forms',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/forms/horizontal',
            title: 'Horizontal Forms',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/forms/hidden-labels',
            title: 'Hidden Labels',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/forms/form-actions',
            title: 'Form Actions',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/forms/bordered',
            title: 'Bordered Forms',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          },
          {
            path: '/forms/striped-rows',
            title: 'Striped Rows',
            icon: '',
            class: '',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            submenu: []
          }
        ]
      },
      {
        path: '/forms/validation',
        title: 'Validation',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/forms/wizard',
        title: 'Wizard',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/forms/ngx',
        title: 'NGX Wizard',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Tables',
    icon: 'ft-grid',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/tables/regular',
        title: 'Regular',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/tables/extended',
        title: 'Extended',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/tables/smart',
        title: 'Smart Tables',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Data Tables',
    icon: 'ft-layout',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/datatables/basic',
        title: 'Basic',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/datatables/editing',
        title: 'Editing',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/datatables/filter',
        title: 'Filter',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/datatables/fullscreen',
        title: 'Fullscreen',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/datatables/paging',
        title: 'Paging',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/datatables/pinning',
        title: 'Pinning',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/datatables/selection',
        title: 'Selection',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/datatables/sorting',
        title: 'Sorting',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Cards',
    icon: 'ft-layers',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/cards/basic',
        title: 'Basic Cards',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/cards/advanced',
        title: 'Advanced Cards',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Maps',
    icon: 'ft-map',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/maps/google',
        title: 'Google Map',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/maps/fullscreen',
        title: 'Full Screen Map',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Charts',
    icon: 'ft-bar-chart-2',
    class: 'has-sub',
    badge: '2',
    badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1',
    isExternalLink: false,
    submenu: [
      {
        path: '/charts/chartjs',
        title: 'ChartJs',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/charts/chartist',
        title: 'Chartist',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/charts/ngx',
        title: 'NGX Chart',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/calendar',
    title: 'Calendar',
    icon: 'ft-calendar',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Pages',
    icon: 'ft-copy',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/pages/forgotpassword',
        title: 'Forgot Password',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/horizontaltimeline',
        title: 'Horizontal Timeline',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/verticaltimeline',
        title: 'Vertical Timeline',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/login',
        title: 'Login',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/register',
        title: 'Register',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/profile',
        title: 'User Profile',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/lockscreen',
        title: 'Lock Screen',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/invoice',
        title: 'Invoice',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/error',
        title: 'Error',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/comingsoon',
        title: 'Coming Soon',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/maintenance',
        title: 'Maintenance',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/gallery',
        title: 'Gallery',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/search',
        title: 'Search',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/faq',
        title: 'FAQ',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/pages/kb',
        title: 'Knowledge Base',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }
    ]
  },
  {
    path:
      'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation',
    title: 'Documentation',
    icon: 'ft-book',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: true,
    submenu: []
  },
  {
    path: 'https://pixinvent.ticksy.com/',
    title: 'Support',
    icon: 'ft-life-buoy',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: true,
    submenu: []
  }
];
