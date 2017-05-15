function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
};

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + "z³.");
}

var samsungGalaxyS6 = new Telefon("Samsung", 1500, "Pearl White");
var iPhonePlus6s = new Telefon("Apple", 2400, "Space Gray");
var onePlusOne = new Telefon("OnePlus", 1400, "Black");

samsungGalaxyS6.printInfo();
iPhonePlus6s.printInfo();
onePlusOne.printInfo();

	