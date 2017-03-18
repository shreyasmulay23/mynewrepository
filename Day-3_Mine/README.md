# angular2-testing

Install:

```
npm install
```

Run the project:

```
npm start
```

Check code coverage:

```
npm run coverage
```


abstract class ComponentFixture {
  debugElement;       // test helper 
  componentInstance;  // access properties and methods
  nativeElement;      // access DOM
  detectChanges();    // trigger component change detection
}

karma automate few steps in this process:

re-run the tests when the app’s code has changed
re-run the tests when the test’s code has changed
running the tests on several browsers – Chrome, Firefox, IE and headless browsers – like Phantom.js
loading any testing framework of a choice (i can easily pick another testing framework other than jasmine)
allowing to pre-process files before running the tests – i.e. precompiling html templates, pre-process js files (if you write in a compile-to js lib like es6, coffeescript etc…), load and process json files, output results in various display methods etc.
easily config all of the above in one karma.conf.js file.
running these in terminal

Karma Plugins

Karma is an amazing tool. I allows external plugins to process files before running tests. Since Echoes Player relies on youtube data api, I’ve found it comfortable to have samples of json responses right inside the repository (in a “mocks” directory”). Apart from it being comfortable to work with it, keeping as files is also useful for using it in tests.

For loading json files and use it as fixtures, i found the “karma-json-fixtures-preprocessor” plugin great for this usecase. Whenever I need to mock a response in my tests, I just refer to the global variable “window.mocks[‘name.of.file.without.ext.json’]” to get the json i need. This is the configuration:


module.exports = function(config) {
	var client_dir = '';

	config.set({
		...
		files: [
			// loading all json files
			'../tests/mocks/**/*mock.json'
	    ],
	    ...
        preprocessors: {
	        // configure to preprocess json files
	        '../tests/mocks/**/*mock.json': ['json_fixtures']
	        
	    },
	    ...
	    jsonFixturesPreprocessor: {
	      // strip this from the file path \ fixture name
	      stripPrefix: '.+mocks/',
	      // strip this to the file path \ fixture name
	      // prependPrefix: 'mock/',
	      // change the global fixtures variable name
	      variableName: 'mocks'
	    },
	    plugins : [
	        // load the plugin
	        'karma-json-fixtures-preprocessor'
	    ]
	    
  });
};

module.exports = function(config) {
	var client_dir = '';
 
	config.set({
		...
		files: [
			// loading all json files
			'../tests/mocks/**/*mock.json'
	    ],
	    ...
        preprocessors: {
	        // configure to preprocess json files
	        '../tests/mocks/**/*mock.json': ['json_fixtures']
	        
	    },
	    ...
	    jsonFixturesPreprocessor: {
	      // strip this from the file path \ fixture name
	      stripPrefix: '.+mocks/',
	      // strip this to the file path \ fixture name
	      // prependPrefix: 'mock/',
	      // change the global fixtures variable name
	      variableName: 'mocks'
	    },
	    plugins : [
	        // load the plugin
	        'karma-json-fixtures-preprocessor'
	    ]
	    
  });
};
I also use a plugin for loading html templates and some plugins to output the tests results to the console in a nice way.