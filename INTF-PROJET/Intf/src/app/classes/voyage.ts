export class Voyage {
  nomAgence: string;
  lieuDepart: string;
   lieuArrive: string;
   dateDepart: string;
   heureDepart: string;
   placeRestante: number;
   prixVoyage: string;

  constructor(nomAgence: string, lieuDepart: string, lieuArrive: string, dateDepart: string,
              heureDepart: string, placeRestante: number, prixVoyage: string) {

        this.nomAgence = nomAgence;
        this.lieuDepart = lieuDepart;
        this.lieuArrive = lieuArrive;
        this.dateDepart = dateDepart;
        this.heureDepart = heureDepart;
        this.placeRestante = placeRestante;
        this.prixVoyage = prixVoyage;
}
}

