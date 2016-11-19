var Iphone6s = new Telefon('Apple', 2250, 'Siver', '2GB', '2250 Mha'),
	Xaiomi = new Telefon ('Xaiomi', 1500, 'White', '3GB', '4000 Mha'),
	GalaxyS7 = new Telefon ('Samsung', 1900, 'Black', '3GB', '3800 Mha');

function Telefon(marka, cena, kolor, ram, bateria) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.ram = ram;
	this.bateria = bateria;
}

Telefon.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + ' PLN.');
}

Telefon.prototype.printMoreInfo = function() {
	console.log(this.marka + ' ma ' + this.ram + ' pamięci RAM oraz baterię o pojemności ' + this.bateria + '.');
}

Iphone6s.printInfo();
Xaiomi.printInfo();
GalaxyS7.printInfo();

Iphone6s.printMoreInfo();
Xaiomi.printMoreInfo();
GalaxyS7.printMoreInfo();
