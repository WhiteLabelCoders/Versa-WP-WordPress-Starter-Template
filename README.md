# WLC Starter Theme



### Features

- PHP OOP,
- Autoloading, namespaces through composer,
- Bedrock support (not necessary),
- WordPress coding standards,
- Gulp

|                  | Development /app                             | Production /dist                 |
| ---------------- | -------------------------------------------- | -------------------------------- |
| **SASS** /scss   | sourcemap                                    | sourcemap, minify, autoprefixer  |
| **JS** /js       | -                                            | minify                           |
| **images** / img | -                                            | webp conversion                  |
| **svg** /svg     | -                                            | viewbox and id's removal, minify |
| **Browsersync**  | style injection, refresh on html, php change |                                  |

- built-in WordPress svg support,

- view/class, block/class methodology,

  

### Installation

1. After cloning repository with theme, run command within it's directory
   `composer install`

2. Install node with command
   `npm install`

3. Go to file gulpfile.js and change url_address variable to your local url 
   `var url_address = 'http://local-address/';`

4. In terminal/console type `gulp watch` to start browser sync

   

### Basics

- Remeber to add newly created class to `class_loader()` > functions.php

- There is hooks visual guide > WLC Starter Hooks.html

- Register menus, widget areas > inc/Core/Theme.php

  

### Using views

`inc/Views/Index` class, add any method required by page globally, like for e.g. enqueue assets.

Any other class is `Index` extension.

Use `hooks` method, for higher level hooks, like for e.g. init, wp_ajax.

`view_hooks` method should be used for content methods , like e.g. title, content, related posts.

You can limit content methods for speccyfic views

```
public function view_hooks() {
	if ( is_home() ) {
		...
	}
}
```



### Using blocks 

1. Copy inc/Blocks/BlockFAQ and rename it using cammel case format.
2. Set block param within `register_block_type()` method.
3. Add to ACF new filds group for your block. 
4. Add Group type field and name it same as your file, but using snake format (block_faq).
5. Create output inside `render_frontend()` method, do not remove variables within this method.

