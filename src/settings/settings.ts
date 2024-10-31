export const SETTINGS = {
  title: 'OMA',
  logging: {
    microsoft_app_insights: {
      connection_string: 'InstrumentationKey=e84a1de4-a19e-4302-a30a-bbc6a23cb9ef;IngestionEndpoint=https://uksouth-1.in.applicationinsights.azure.com/;LiveEndpoint=https://uksouth.livediagnostics.monitor.azure.com/;ApplicationId=4335bb7b-59d5-4d2b-b5b1-cbc6a577f39d',
      instrumentation_key: 'e84a1de4-a19e-4302-a30a-bbc6a23cb9ef'
    }
  },
  menu: [
    {
      label: 'Home',
      icon: 'home',
      href: ''
    },
    {
      label: 'Reports',
      icon: 'analytics',
      href: 'reports'
    },
    {
      label: 'Settings',
      icon: 'settings',
      href: 'settings'
    },
    {
      label: 'Log out',
      icon: 'logout',
      href: 'logout'
    }
  ]
}
