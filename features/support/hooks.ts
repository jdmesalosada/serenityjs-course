import { protractor } from "protractor/built/ptor";

/*export = function hooks() {
    this.After(("{tags: ['@foo']}") => protractor.browser.driver.manage().getCookies().then(function (cookies) {
        console.log('**********------------Got cookies %j', cookies);
    }));
};*/

export = function hooks() {
    this.After({ tags: ["@login"] }, function () {
        protractor.browser.driver.manage().getCookies().then(function (cookies) {
            console.log('**********------------Got cookies %j', cookies);
        });
    });
};


/**
 * var myHooks = function () {
  this.Before(function (scenario) {
    // This hook will be executed before all scenarios
  });

  this.Before({tags: ["@foo"]}, function (scenario) {
    // This hook will be executed before scenarios tagged with @foo
  });

  this.Before({tags: ["@foo", "@bar"]}, function (scenario) {
    // This hook will be executed before scenarios tagged with @foo AND @bar
  });

  this.Before({tags: ["@foo,@bar"]}, function (scenario) {
    // This hook will be executed before scenarios tagged with @foo OR @bar
  });

  // You can use the following shorthand when specifying a single tag
  this.Before("@foo", function (scenario) {
    // This hook will be executed before scenarios tagged with @foo
    // ...
  });
};

module.exports = myHooks;

 */