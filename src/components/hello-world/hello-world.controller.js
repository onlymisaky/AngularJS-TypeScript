export default class HelloWorld {
    constructor() {
        this.msg = 'Hello World！'
        this.envName = this.getEnvName();
    }

    $onInit() {
    }

    $onChanges(changesObj) {
    }

    $doCheck() {
    }

    $onDestroy() {
    }

    $postLink() {
    }

    // 获取当前环境
    getEnvName() {
        return process.env.NAME;
    }

}
