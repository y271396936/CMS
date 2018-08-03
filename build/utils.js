'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
const glob = require('glob')
const fs = require( 'fs' )

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

exports.getMultiEntry = function(globPath) {
  const entries = {}

  glob.sync(globPath).forEach(function(entryPath) {
    if (/\.\/(src\/main)\.\w+/.exec(entryPath)) {
      entries[RegExp.$1] = entryPath
    } else if (/\.\/src\/(views.+)\/\w+\.\w+/.exec(entryPath)) {
      entries[RegExp.$1] = entryPath
    }
  })

  return entries
}

var filecopy = function(fromPath, toPath) {
  fs.readdir(fromPath, function(err, paths) {
    if (err) throw new Error(err)

    paths.forEach(function(path) {
      var _fromPath = fromPath + '/' + path,
        _toPath = toPath + '/' + path,
        readable, writable

      fs.stat(_fromPath, function(err, stats) {
        if (err) {
          throw new Error(err)
        }
        if (stats.isFile()) {
          readable = fs.createReadStream(_fromPath)
          writable = fs.createWriteStream(_toPath)
          readable.pipe(writable)
        } else if (stats.isDirectory()) {
          exports.startCopy(_fromPath, _toPath)
        }
      })
    })
  })
}

exports.startCopy = function(src, target) {
  fs.stat(target, function(err, stats) {
    if (err) {
      fs.mkdir(target, function() {
        filecopy(src, target)
      })
    } else {
      filecopy(src, target)
    }
  })
}
