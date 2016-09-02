To build Weather-app you need to write in console '$ npm install' in folder with 'package.json' ;
wait for loading all needed modules and then write in console '$ grunt' in folder with 'gruntfile.js' ;
it will start to build project from begin:
		1) JShint static code review ( if it pass) ==>
		2) it starts all tests (if they pass ) ==>
		3) it will concat and minify all js files and create SourceMap
		4) concat and minify all css files and change index.html to use final file;
after all you can find folder "build" with fullbuilded project and you can run index.html;