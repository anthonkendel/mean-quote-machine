#!/bin/bash

pushd ../node_modules/

cp normalize.css/normalize.css ../public/css/
cp milligram/dist/milligram.min.css ../public/css/
cp milligram/dist/milligram.min.css.map ../public/css/
cp vue/dist/vue.js ../public/js/

popd
