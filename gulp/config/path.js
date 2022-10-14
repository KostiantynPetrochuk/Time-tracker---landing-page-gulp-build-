import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;



export const path = {
    build: {
        files: `${buildFolder}/files`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts`,
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.pug`, // .html
        scss: `${srcFolder}/scss/index.scss`,
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.pug`,  //.html
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg, jpeg, png, svg, gif, ico, webp}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test`

};
