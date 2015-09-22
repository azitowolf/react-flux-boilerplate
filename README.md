


### Simple React-Flux-Boilerplate

This is a Boilerplate local environment to get you started developing using React and Flux. 

#### Getting Started
1. Navigate to flux-react-boilerplate, run `npm install`
2. Run gulp. (if you dont have [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md), go get it.)
3. Navigate to /dist and start a local server (I would recommend this [handy node module](https://www.npmjs.com/package/http-server))
4. Open your app in browser.

#### File Structure:

flux-react-boilerplate
	|
	+ node_modules //all the required node modules
	+ dist //distribution code. Your gulp tasks will compile to this folder.
		|
		+ js
			|
			main.js
		index.html
	+ src //source code. This is broken up into the Flux architectural components.
		|
		+ js //Write React code here
			|
			+ actions
			+ components
			+ constants
			+ dispatchers
			+ stores
		index.html
	gulpfile.js
	package.json

#### What's Going On

The tasks we are Gulping are : 

* Browserify, which builds in Node.js require functionality into the browser
* Reactify, which includes react.js and also compiles JSX to its raw React form
* Pipe, which feeds all our code into one file, main.js
* Copy, which copies over our browser-compatible files into dist (index.html for the time being)
* Vinyl-Stream, which turns our main.js readable stream from browserify into a vinyl stream which is what gulp is expecting to get. 

