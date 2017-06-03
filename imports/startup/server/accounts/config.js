ServiceConfiguration.configurations.remove({
  service: 'facebook'
});

ServiceConfiguration.configurations.insert({
  service: 'facebook',
  appId: `${FB_APP_ID}`,
  secret: `${FB_APP_SECRET}`
});