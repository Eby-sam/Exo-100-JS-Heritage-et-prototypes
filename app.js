const Vehicule = function (couleur, roues, marque) {
    this.couleur = couleur;
    this.roues = roues;
    this.marque = marque;

    this.demarrer = function () {
        console.log("Demarer");
    }
    this.arreter = function () {
        console.log("Arreter")
    }
}

const Velo = function (couleur, roues, marque, rayonRoues, typePeinture) {
    Vehicule.call(this, couleur, roues, marque);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;

    this.monter = function () {
        console.log("Je monte sur le vélo");
    }
}

Velo.prototype = Object.create(Vehicule.prototype);
Velo.prototype.constructor = Velo;
const Voiture = function (couleur, roues, marque, assurance, proprietaire) {
    Vehicule.call(this, couleur, roues, marque);
    this.assurance = assurance;
    this.proprietaire = proprietaire;

    this.passerAuCarWash = function () {
        console.log("Laver");
    }
}

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.prototype.constructor = Voiture;

console.log(Voiture);
console.log(Vehicule);
console.log(Velo)