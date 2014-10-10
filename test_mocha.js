var webdriverio = require('webdriverio'),
    chai        = require('chai'),
    expect      = chai.expect,
    should      = chai.should();
    
var options = { desiredCapabilities: { browserName: 'chrome' } };

describe('test suite to ensure the set up is working', function() {
    this.timeout(99999999);
    var client = {};

    before(function(done) {
        client = webdriverio.remote(options);
        client.init(done);

        client.addCommand('loginWithTheseCredentials', function(userId, password, cb) {
            this.url('http://54.90.88.79/mitchell1')
            .setValue('#userNameTxt', userId)
            .setValue('#passwordTxt', password)
            .click('#btnLogin')
            .pause(5000);

            cb();
        });
    });

    // it('should browse to google.com', function(done) {
    //     client.url('http://www.google.com')
    //     .getTitle(function(err, title) {
    //         //assert.equal(title, 'Google');
    //         //expect(title).to.equal('Google');
    //         title.should.equal('Google');
    //     })
    //     .call(done);
    // });

    describe('suite to test learning library', function() {
        it('should browse to LLA reader', function(done) {
            client.loginWithTheseCredentials('shailesh.pardesi@aptaracorp.com', 'ciscopwd', function() {})
            .selectorExecute('//ul[@id="booksList"]/li', function(data) {
                return data;
            }, function(err, booksList) {
                booksList.should.have.lengthOf(3);
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