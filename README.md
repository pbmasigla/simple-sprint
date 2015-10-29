
### Simple Sprint - A base app
#### React + Flux implementation

----------

##### Go to a folder where you want your project stored in terminal and enter this:
```
git clone https://github.com/pbmasigla/simple-sprint.git
```


##### CD into the folder and then enter (selects version of node):
```
nvm use
```


##### Install the needed node packages:
```
npm install
```


##### To start app, run:
```
npm run dev
```

----------

### Style class rules
###### Refer to http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/ for BEM

----------

### Overview App Structure
```
├── node_modules		// installed packages
├── src				// main app files
├── webpack.config.js	// config for webpack compilation
├── package.json		// node packages to be installed
└── index.js			// main entry point to app
```

### Src file structure
```
├── client
│		├── js
│		│		├── actions		// action (dispatcher) files
│		│		├── components	// react components
│		│		├── helpers		// alt flux implementation
│		│		├── stores 		// store files (data read out)
│		│		├── app.js 		// main app that is mounted to views
│		│		└── history.js 	//manage session history
│		│
│		├── less				// styles
│		└── assets			// asset files such as images
│
├── server
│		├── lib            	// server libraries
│		├── middleware		// helper functions for requests
│		├── routes			// function routes (does requests)
│		└── views				// ejs files
│
└── index.js			// main file to setup app/server
```

### Component file structure
###### Smart and dumb components: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.9e184iahk
```
└── To Do List				// container (smart component)
		├── input				// input component (dumb component)
		├── list				// list component (dumb component)
		└── submit			// submit button component (dumb component)

```
