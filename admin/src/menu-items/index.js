import { IconClipboardTypography, IconDashboard, IconDeviceGamepad2, IconShieldLock, IconTags, IconWorld } from '@tabler/icons'

const QuickView = {
  id: 'quickView',
  title: 'Quick View',
  caption: 'Concise Overview',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: IconDashboard,
      breadcrumbs: false
    }
  ]
}

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Browse Pages',
  type: 'group',
  children: [
    {
      id: 'games',
      title: 'Games',
      type: 'item',
      url: '/games',
      icon: IconDeviceGamepad2,
      breadcrumbs: false
    },
    {
      id: 'categories',
      title: 'Categories',
      type: 'item',
      url: '/categories',
      icon: IconTags,
      breadcrumbs: false
    }
  ]
}

const website = {
  id: 'pages',
  type: 'group',
  children: [
    {
      id: 'websites',
      title: 'Website',
      type: 'item',
      url: '/websites',
      icon: IconWorld,
      breadcrumbs: false
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      type: 'item',
      url: '/privacy',
      icon: IconShieldLock,
      breadcrumbs: false
    },
    {
      id: 'terms-condition',
      title: 'Terms & Conditions',
      type: 'item',
      url: '/terms-condition',
      icon: IconClipboardTypography,
      breadcrumbs: false
    }
  ]
}

const menuItems = {
  items: [ QuickView, pages, website ]
}

export default menuItems
