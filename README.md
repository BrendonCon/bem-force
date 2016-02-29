# BEMForce
An opinionated collection of mixins to enforce **BEM selector naming**. As you compile your Sass, warnings will be output in the console if BEM rules are broken.   

**PLEASE NOTE:** A working example implementation can be found in **[./scss/app.scss](https://github.com/BrendonCon/BemForce/blob/master/scss/app.scss)**.

## Install
Ensure you have Ruby **2.1.5** and LibSass **3.2.5** or greater installed. I have added unit tests for the functions in BEMForce making use of Oddbird's [True](https://github.com/oddbird/true) Sass unit testing framework. You will need to install two depedencies for unit testing, True and True-Cli. You will need to install the **NPM dependencies** as well if you want to use gulp to build or watch etc. 

**Install true gem:** 
```
gem install true
```
**Install true-cli:**
```
gem install true-cli
```
Once both are installed you can run the unit tests like so:
```
true-cli ./test/test.scss
```
Replace the path to your own custom unit tests and they will run and produce test results in the console.

**Install NPM Dependencies:**
```
npm update
```

## Config
There are two config maps which you can override or customise, these are for the output strings for error feedback and the delimiters with which the selector names will be constructed.
- **$strings**: For feedback in the console
- **$delimiters**: BEM delimiter config 

## Mixins
- **block**: Generates a block selector
- **element**: Generates an element selector based off of a block
- **modifier**: Generates a modifier selector based off of a block or an element or both

## Shorthand Mixins
Probably overkill however there are some shorthand mixins which merely call the above expanded versions for saving keystrokes!
- **b**: shorthand for the block mixin
- **e**: shorthand for the element mixin
- **m**: shorthand for the modifier mixin

## Usage 
**Scss:**
```sass
@include block(header) {
  height: 10%;
  
  @include modifier(fixed) {
    width: 640px;
  }
  
  @include element(search) {
    float: right;
    
    @include modifier(left) {
      float: left;
      height: 200px;
    }
  }
}
```

**Shorthand Mixins:**
```sass
@include b(header) {
  height: 10%;
  
  @include m(fixed) {
    width: 640px;
  }
  
  @include e(search) {
    float: right;
    
    @include m(left) {
      float: left;
      height: 200px;
    }
  }
}
```

**CSS:**
```css
.header {
  height: 10%;
}

.header--fixed {
  width: 640px;
}

.header__search {
  float: right;
}

.header__search--left {
  float: left;
  height: 200px;
}
```
## Gulp usage
gulpfile.js has the following tasks avaiable to run via the gulp-cli:
- **gulp-concat**: Concatenates all the BEMForce files to one .scss partial

```
gulp concat

```

- **gulp-sass**: you can build your output CSS

```
gulp sass

```

