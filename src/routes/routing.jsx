import Classic from '../views/dashboards/classic.jsx';
import Cryptocurrency from '../views/dashboards/cryptocurrency.jsx';
import Ecommerce from '../views/dashboards/ecommerce.jsx';
import General from '../views/dashboards/general.jsx';
//Ui-components Dropdown
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Breadcrumbs from '../views/ui-components/breadcrumb.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Dropdowns from '../views/ui-components/dropdown.jsx';
import BtnGroups from '../views/ui-components/btn-group.jsx';
import Cards from '../views/ui-components/cards.jsx';
import CollapseComponent from '../views/ui-components/collapse.jsx';
import CarouselComponent from '../views/ui-components/carousel.jsx';
import JumbotronComponent from '../views/ui-components/jumbotron.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import ListComponent from '../views/ui-components/listgroup.jsx';
import MediaComponent from '../views/ui-components/media.jsx';
import ModalComponent from '../views/ui-components/modal.jsx';
import NavbarComponent from '../views/ui-components/navbar.jsx';
import NavsComponent from '../views/ui-components/navs.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import ProgressComponent from '../views/ui-components/progress.jsx';
import TableComponent from '../views/ui-components/table.jsx';
import TabsComponent from '../views/ui-components/tabs.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';
//Sample Pages Dropdown
import Starterkit from '../views/sample-pages/starter-kit.jsx';
import Profile from '../views/sample-pages/profile.jsx';
import Searchresult from '../views/sample-pages/search-result.jsx';
import Gallery from '../views/sample-pages/gallery.jsx';
import Helperclass from '../views/sample-pages/helperclass.jsx';
import Chat from '../views/chat/chat.jsx';
import Email from '../views/email/email.jsx';
import Widgets from '../views/widget/widget.jsx';
import Calendar from '../views/calendar/calendar.jsx';
import AuthRoutes from './authroutes.jsx';
//Chart Pages Dropdown
import Chartjs from '../views/charts/chartjs.jsx';
import Chartc3 from '../views/charts/c3chart.jsx';
//Icon Pages Dropdown
import Materialicon from '../views/icons/material.jsx';
import FontAwesome from '../views/icons/fontawesome.jsx';
import Themify from '../views/icons/themify.jsx';
import Weather from '../views/icons/weather.jsx';
import Simpleline from '../views/icons/simpleline.jsx';
import FlagIcon from '../views/icons/flag.jsx';
//Form Layout Pages Dropdown
import Basicform from '../views/form-layouts/basic.jsx';
import FormInputs from '../views/form-layouts/form-inputs.jsx';
import FormGroups from '../views/form-layouts/form-groups.jsx';
import FormGrids from '../views/form-layouts/form-grids.jsx';
//Form-pickers Pages Dropdown
import Datepicker from '../views/form-pickers/datetimepicker.jsx';
import Tagselect from '../views/form-pickers/tag-select.jsx';
//Form Validation Page
import FormValidate from '../views/form-validation/form-validation.jsx';
//Form Wizard Page
import FormSteps from '../views/steps/steps.jsx';
//Table Pages Dropdown
import Basictable from '../views/tables/tablebasic.jsx';
import Reacttable from '../views/tables/reacttable.jsx';
import Datatable from '../views/tables/react-bootstrap-table.jsx';

import Vectormap from '../views/maps/vectormap.jsx';
var auths = [].concat(AuthRoutes);

var ThemeRoutes = [
  {
    navlabel: true,
    name: "Personal",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: "/dashboards",
    name: "Dashboards",
    state: "dashboardpages",
    icon: "mdi mdi-view-dashboard",
    child: [
      {
        path: "/dashboards/classic",
        name: "Classic",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: Classic
      },
      {
        path: "/dashboards/cryptocurrency",
        name: "Cryptocurrency",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: Cryptocurrency
      },
      {
        path: "/dashboards/ecommerce",
        name: "Ecommerce",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: Ecommerce
      },
      {
        path: "/dashboards/general",
        name: "General",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: General
      }
    ]
  },
  {
    collapse: true,
    path: "/ui-components",
    name: "Ui-Components",
    state: "uicomponents",
    icon: "mdi mdi-buffer",
    child: [
      {
        path: '/ui-components/alert',
        name: 'Alerts',
        
        icon: 'mdi mdi-comment-processing-outline',
        component: Alerts
      },
      {
        path: '/ui-components/badge',
        name: 'Badges',
        
        icon: 'mdi mdi-arrange-send-backward',
        component: Badges
      },
      {
        path: '/ui-components/breadcrumb',
        name: 'Breadcrumbs',
        
        icon: 'mdi mdi-equal',
        component: Breadcrumbs
      },
      {
        path: '/ui-components/button',
        name: 'Buttons',
        
        icon: 'mdi mdi-toggle-switch',
        component: Buttons
      },
      {
        path: '/ui-components/dropdown',
        name: 'Button Dropdown',
        
        icon: 'mdi mdi-cards-variant',
        component: Dropdowns
      },
      {
        path: '/ui-components/btn-group',
        name: 'Button Group',
        
        icon: 'mdi mdi-checkbox-multiple-blank',
        component: BtnGroups
      },
      {
        path: '/ui-components/card',
        name: 'Cards',
        
        icon: 'mdi mdi-credit-card-multiple',
        component: Cards
      },
      {
        path: '/ui-components/collapse',
        name: 'Collapse',
        
        icon: 'mdi mdi-elevator',
        component: CollapseComponent
      },
      {
        path: '/ui-components/carousel',
        name: 'Carousel',
        
        icon: 'mdi mdi-view-carousel',
        component: CarouselComponent
      },
      {
        path: '/ui-components/jumbotron',
        name: 'Jumbotron',
        
        icon: 'mdi mdi-hamburger',
        component: JumbotronComponent
      },
      {
        path: '/ui-components/layout',
        name: 'Layout',
        
        icon: 'mdi mdi-apps',
        component: LayoutComponent
      },
      {
        path: '/ui-components/listgroup',
        name: 'List Group',
        
        icon: 'mdi mdi-format-list-bulleted',
        component: ListComponent
      },
      {
        path: '/ui-components/media',
        name: 'Media',
        
        icon: 'mdi mdi-folder-multiple-image',
        component: MediaComponent
      },
      {
        path: '/ui-components/modal',
        name: 'Modal',
        
        icon: 'mdi mdi mdi-tablet',
        component: ModalComponent
      },
      {
        path: '/ui-components/navbar',
        name: 'Navbar',
        
        icon: 'mdi mdi-page-layout-header',
        component: NavbarComponent
      },
      {
        path: '/ui-components/navs',
        name: 'Navs',
        
        icon: 'mdi mdi-panorama-wide-angle',
        component: NavsComponent
      },
      {
        path: '/ui-components/pagination',
        name: 'Pagination',
        
        icon: 'mdi mdi-priority-high',
        component: PaginationComponent
      },
      {
        path: '/ui-components/popover',
        name: 'Popover',
        
        icon: 'mdi mdi-pencil-circle',
        component: PopoverComponent
      },
      {
        path: '/ui-components/progress',
        name: 'Progress',
        
        icon: 'mdi mdi-poll',
        component: ProgressComponent
      },
      {
        path: '/ui-components/table',
        name: 'Tables',
        
        icon: 'mdi mdi-border-none',
        component: TableComponent
      },
      {
        path: '/ui-components/tabs',
        name: 'Tabs',
        
        icon: 'mdi mdi-tab-unselected',
        component: TabsComponent
      },
      {
        path: '/ui-components/tooltip',
        name: 'Toltips',
        
        icon: 'mdi mdi-image-filter-vintage',
        component: TooltipComponent
      }
    ]
  },
  {
    navlabel: true,
    name: "APPS",
    icon: "mdi mdi-dots-horizontal",
  },
  { path: '/chat', name: 'Chat', icon: 'mdi mdi-comment-processing-outline', component: Chat },
  { path: '/email', name: 'Email', icon: 'mdi mdi-inbox-arrow-down', component: Email },
  { path: '/calendar', name: 'Calendar', icon: 'mdi mdi-calendar', component: Calendar },
  {
    path: '/authentication',
    name: 'Authentication',
    state: 'openAuthentication',
    icon: 'mdi mdi-account-circle',
    child: auths,
    collapse: true
  },
  {
    navlabel: true,
    name: "Forms",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: '/form-layouts',
    name: 'Form Layouts',
    state: 'formlayoutPages',
    icon: 'mdi mdi-arrange-bring-forward',
    child: [
      {
        path: '/form-layouts/form-inputs',
        name: 'Form Inputs',
        
        icon: 'mdi mdi-priority-low',
        component: FormInputs
      },
      {
        path: '/form-layouts/form-groups',
        name: 'Form Groups',
        
        icon: 'mdi mdi-rounded-corner',
        component: FormGroups
      },
      {
        path: '/form-layouts/form-grids',
        name: 'Form Grids',
        
        icon: 'mdi mdi-select-all',
        component: FormGrids
      },
      {
        path: '/form-layouts/basic',
        name: 'Form Basic',
        
        icon: 'mdi mdi-book',
        component: Basicform
      }
    ]
  },
  {
    collapse: true,
    path: '/form-pickers',
    name: 'Form Pickers',
    state: 'formpickerPages',
    icon: 'mdi mdi-pencil-box-outline',
    child: [
      {
        path: '/form-pickers/datetimepicker',
        name: 'Date Pickers',
        
        icon: 'mdi mdi-calendar-clock',
        component: Datepicker
      },
      {
        path: '/form-pickers/tag-select',
        name: 'Tags & Select',
        
        icon: 'mdi mdi-tag-multiple',
        component: Tagselect
      }
    ]
  },
  { path: '/form-validation', name: 'Form Validation', icon: 'mdi mdi-alert-box', component: FormValidate },
  { path: '/form-steps', name: 'Form Steps', icon: 'mdi mdi-cube-send', component: FormSteps },
  {
    navlabel: true,
    name: "Tables",
    icon: "mdi mdi-dots-horizontal",
  },
  { path: '/tables/tablebasic', name: 'Basic Table', icon: 'mdi mdi-border-all', component: Basictable },
  { path: '/tables/reacttable', name: 'React Table', icon: 'mdi mdi-border-right', component: Reacttable },
  { path: '/tables/datatable', name: 'Bootstrap DataTable', icon: 'mdi mdi-border-inside', component: Datatable },
  {
    navlabel: true,
    name: "Charts",
    icon: "mdi mdi-dots-horizontal",
  },
  { path: '/charts/chartjs', name: 'Chartjs', icon: 'mdi mdi-blur', component: Chartjs },
  { path: '/charts/c3chart', name: 'C3 Chart', icon: 'mdi mdi-chemical-weapon', component: Chartc3 },
  {
    navlabel: true,
    name: "Extra",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: '/sample-pages',
    name: 'Sample Pages',
    state: 'samplepages',
    icon: 'mdi mdi-file',
    child: [
      {
        path: '/sample-pages/starter-kit',
        name: 'Starter Kit',
        
        icon: 'mdi mdi-crop-free',
        component: Starterkit
      },
      {
        path: '/sample-pages/profile',
        name: 'Profile',
        
        icon: 'mdi mdi-account-network',
        component: Profile
      },
      {
        path: '/sample-pages/search-result',
        name: 'Search Result',
        
        icon: 'mdi mdi-search-web',
        component: Searchresult
      },
      {
        path: '/sample-pages/gallery',
        name: 'Gallery',
        
        icon: 'mdi mdi-camera-iris',
        component: Gallery
      },
      {
        collapse: true,
        name: 'Extra Pages',
        icon: 'mdi mdi-file',
        subchild: [
          {
            path: '/sample-pages/helperclass',
            name: 'Helper Classes',
            
            icon: 'mdi mdi-star',
            component: Helperclass
          }          
        ]
      }
    ]
  },
  {
    path: '/widgets',
    name: 'Widgets',
    icon: 'mdi mdi-gradient',
    component: Widgets
  },
  {
    collapse: true,
    path: '/icons',
    name: 'Icons',
    state: 'iconsPages',
    icon: 'mdi mdi-face',
    child: [
      {
        path: '/icons/material',
        name: 'Material Icons',
        
        icon: 'mdi mdi-emoticon',
        component: Materialicon
      },
      {
        path: '/icons/fontawesome',
        name: 'Font Awesome Icons',
        
        icon: 'mdi mdi-emoticon-cool',
        component: FontAwesome
      },
      {
        path: '/icons/themify',
        name: 'Themify Icons',
        
        icon: 'mdi mdi-chart-bubble',
        component: Themify
      },
      {
        path: '/icons/weather',
        name: 'Weather Icons',
        
        icon: 'mdi mdi-weather-cloudy',
        component: Weather
      },
      {
        path: '/icons/simpleline',
        name: 'Simple Line Icons',
        
        icon: 'mdi mdi mdi-image-broken-variant',
        component: Simpleline
      },
      {
        path: '/icons/flag',
        name: 'Flag Icons',
        
        icon: 'mdi mdi-flag-triangle',
        component: FlagIcon
      }
    ]
  },
  {
    path: '/vectormap',
    name: 'Vector Map',
    icon: 'ti-location-pin',
    component: Vectormap
  },  
  { path: '/', pathTo: '/dashboards/classic', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
