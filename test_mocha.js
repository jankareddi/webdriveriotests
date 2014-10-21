var webdriverio = require('webdriverio'),
    chai        = require('chai'),
    expect      = chai.expect,
    should      = chai.should()
    config      = require('./config');
    
var options = { desiredCapabilities: { browserName: 'chrome' } };

describe('test suite to test learning library', function() {
    this.timeout(99999999);
    var client = {};

    before(function(done) {
        client = webdriverio.remote(options);
        client.init(done);

        client.addCommand('loginWithTheseCredentials', function(userId, password, cb) {
            this.url(config.url)
            .setValue('#userNameTxt', userId)
            .setValue('#passwordTxt', password)
            .click('#btnLogin')
            .pause(5000);

            cb();
        });
    });

    describe('tests for core learning library scenarios', function() {
        it('should browse to LLA reader', function(done) {
            client.loginWithTheseCredentials(config.userId, config.password, function() {})
            .selectorExecute('//ul[@id="booksList"]/li', function(data) {
                return data;
            }, function(err, booksList) {
                booksList.should.have.lengthOf(1);
            })
            .call(done);
        });

        it('should open a TMS book', function(done) {
            client.click('#booksListData542')
            .pause(3000)
            .click('#bmNoBtn')
            .getHTML('#mainContent', function(err, html) {
                html.should.match(/Student Guide/);
            })
            .call(done);
        });
    });

    after(function(done) {
        client.end(done);
    });
});