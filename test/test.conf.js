module.exports = function(config) {
  config.set({
    basePath: '..',
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/adaptive-motion.js',
      'test/*.spec.js'
    ],
    frameworks: ['jasmine'],
    singleRun: true,
    browsers: [ 'Chrome' ]
  });
};