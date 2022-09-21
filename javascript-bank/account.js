/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function () {
  var deposit = Transaction(this.amount);
  if (this.deposit !== this.amount) {
    deposit.push();
    return false;

  }
  if (this.number === this.amount) {
    return true;
  }

};

Account.prototype.withdraw = function () {

};

Account.prototype.getBalance = function () {

};
