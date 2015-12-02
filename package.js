Package.describe({
  name: 'kit:sweetalert',
  version: '1.1.3',
  summary: "A beautiful replacement for JavaScript's alert",
  git: 'https://github.com/cwaring/meteor-sweetalert',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.addFiles('sweetalert.js')

  api.addFiles([
    'sweetalert/dist/sweetalert.css',
    'sweetalert/dist/sweetalert.min.js'
  ], 'client')

})