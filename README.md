# Gulp  Uikit 2.0 Gökhan Meriç

Gulp ile basit bir iş akışı. SASS, UIKit (Sass sürümü) çerçevesi, HTML5.

  - Server with Live Reload
  - SASS
  - HTML5 Boilerplate
  - UIKit (SASS version)
  - jQuery (minified)

### Başlangıç

node.js indirin ve git cmd console açın

```sh
https://nodejs.org/
```

git console açın 
aşağıdaki kodu çalıştırın

```sh
cd [çalışma dizini fiziksel yolu] 
örneğin ==> cd C:\xampp\htdocs\Projects\bos_proje
```

aşağıdaki kodu çalıştırın

```sh
git clone https://gokhanmeric@bitbucket.org/taximpro/bos_proje.git
```

Aşağıdaki kod ile proje içine girin

```sh
cd bos_proje
```

Aşağıdaki kod ile gerekli pluginleri yükleyin

```sh
$ npm install
```

tüm pluginleri çalıştırın

```sh
$ gulp
```

Bu pluginleri daha sonra ekleyeceğim

```sh
// gulp-uglify ile JS dosyalarınızı sıkıştırabilirsiniz
// gulp-concat ile dosyalarınızı birleştirebilirsiniz
// gulp-autoprefixer ile kodunuzun geriye dönük olarak tüm tarayıcılarda aynı şekilde çalışmasını sağlayabilirsiniz
```
Bu pluginleri manuel yükleme için 

```sh
npm install --save-dev gulp-uglify gulp-concat gulp-autoprefixer
```

Test browser için browser url'si =>  http://localhost:8000

Daha sonra bunu silin unutmayın "Readme.md" :) 

### Sass import işlemi

========> assets/sass/main.scss

```sh
@import "uikit/scss/uikit-mixins.scss";

// bileşenleri ayrı ayrı import etmek için

@import "uikit/scss/uikit.scss";
@import "uikit/scss/components/autocomplete.scss";
```

### Dosya Yapısı

```sh
├── assets
│   ├── css
│   │   └── main.css
│   ├── fonts
│   ├── images
│   ├── js
│   │   ├── main.js
│   │   └── vendor
│   │       ├── jquery.min.js
│   │       └── uikit
│   └── sass
│       ├── main.scss
│       ├── partials
│       └── uikit
└── index.html
```


License
----
Gökhan Meriç

**Code şiirdir... GM **
