'use strict';

class PackageIncludes {
    constructor(serverless, options) {

        console.log(serverless.service.package.include);

        this.hooks = {
            'before:deploy:createDeploymentArtifacts': this.test.bind(this)
        };
    }

    test() {
        // read all files

        // update the excludes to include all files that aren't includes

        console.log('do do do');
    }
}

module.exports = PackageIncludes;
