# tripleD
Webshop aplikacija 3D je pisana u React Native framework-u i ona može biti prikazana na Android, ios i web platformi.
Na aplikaciji možeš biti korisnik koji se mora logovati na svoj profil, koji je prvobitno kreiran na aplikaciji sa e-mail-om i password-om. 
Za to je potrebna autentifikacija koja je odrađena pomoću firebase-a, a svi podaci su pohranjeni u bazu podataka. 
Na Home screeen se mogu pogledati svi dostupni artikli koji su u prodaju uz svoju cijenu, kategoriju i naziv. To mogu gledati logovani, kao i guest korisnici.
Klik na bilo koji artikal otvara novi screen, gdje stoji detaljan opis artikla uz dodatne slike. Ukoliko korisnik klikne na svoj artikal, on ima mogućnost da taj artikal uredi ili izbriše. Naravno, u svakom momentu, korisnik može dodati novi artikal sa potrebnim podacima. 
Kako bi bila olakšana potražnja artikala, na ikonici za pretraživanje se može unijeti niz karaktera koji opisuju željeni artikal i ukoliko se pronađe, taj artikal će biti prvi i bliži tom korisniku. 
Korisnik uvijek može dodati jedan ili više željenih aritkala u korpu i klikom na plaćanje otvara se screen za način plaćanja koje će biti izvršeno nakon unosa traženih podataka. 

U fajlu package.json se nalaze svi dependencies koje smo morali koristiti pri izradi aplikacije.
