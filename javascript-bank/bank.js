/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var openAccount = new Account(this.nextAccountNumber, holder);
    openAccount.deposit(balance);
    this.accounts.push(openAccount);
    this.nextAccountNumber++;
    return openAccount.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  if (number !== 0 && Number.isInteger(number)) {
    for (var i = 0; i < this.accounts.length; i++) {
      var getAccount = this.accounts[i];
      if (getAccount.number === number) {
        return getAccount;
      }
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }

  var getTotalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var getAccount = this.accounts[i];
    var getBalance = getAccount.getBalance();
    getTotalAssets += getBalance;
  }
  return getTotalAssets;
};
