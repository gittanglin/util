var index = require("../src/index");
var expect = require('chai').expect;


describe("测试", function () {
    it("断言", function () {
        console.log(index.TimeUtil.timestampToFormat(new Date().getTime(),'yyyy-mm-dd'))
        expect(index.CommonUtil).to.be.a('object');
    });
});