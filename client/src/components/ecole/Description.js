import React from "react";

let data = [
  {
    id: "scolaire"
  },
  {
    id: "extra",
    description: `L’étude dirigée (pour les enfants du primaire) se fait par petits groupes : les enfants sont sous la surveillance d’un adulte qui vérifie le journal de classe, contrôle les devoirs. Celle-ci a lieu de 15h30 à 16h30.
      
      Des garderies payantes sont proposées :
  
  lundi, mardi, jeudi, vendredi :
  
  garderie du matin de 7h45 à 8h05.
  surveillance du temps de midi de 12h10 à 13h25 (potage gratuit, possibilité de prendre un repas chaud comprenant un potage, un plat et un dessert)
  garderie du soir de 15h30 à 18h00 : il s’agit d’une surveillance, de nombreux jeux sont à la disposition des enfants.
  mercredi : 
  
  garderie du matin gratuite de 7h45 à 9h10 (les cours commencent à 9h10 le mercredi)
  garderie de l’après-midi de 12h30 à 16h00.
   
  
  Il n’y a pas d’inscription pour les garderies du matin, du soir et du mercredi après-midi. Chaque enfant possède un badge. Celui-ci est scanné lorsque l’enfant est présent.
  
  
  Durant la pause de midi et après 15h30, de nombreuses activités parascolaires sont proposées. Notre école travaille en collaboration avec l’ASBL Toboggan et l’ASBL Tutti Frutti (pour les cours de langues).
  
  L’ASBL Toboggan propose, pour les enfants de maternelle et de primaire, les activités suivantes :
  
  circomotricité, activités musicales, contes et légendes, hip-hop, comédie musicale, jeux d’échec, gymnastique d’élite, théâtre, activités manuelles, création de jeux de société, création de bijoux, …
  L’ASBL Tutti Frutti propose, pour les enfants de maternelle (à partir de la 2ème maternelle) et de primaire, les activités suivantes :
  
  cours de néerlandais, anglais, espagnol, italien,…
   
  
  Sont également proposées, les activités de Karaté et Self-défense.
  
  Ces activités sont susceptibles d’être modifiées ou supprimées en fonction du nombre de participants.`
  },
  {
    id: "inscription",
    description: `Les inscriptions pour l’année scolaire 2019/2020 ont débuté le 17 octobre 2018. Merci de cliquer sur le lien ci-dessus. Avant de procéder à cette demande, visitez notre site…si vous avez des questions dont les réponses ne se trouvent pas sur le site, contactez-nous.
  
    Pour faire son entrée dans notre école au mois de septembre 2019, l’enfant doit être né avant le 30 mars 2017. Il n’y a pas d’entrée possible durant l’année scolaire.
    
    Chaque parent ayant demandé une inscription recevra une confirmation de bonne réception. Ensuite, plusieurs séances d’information seront prévues au cours de l’année.
    
    La visite de notre école n’est pas possible…l’école est un lieu privé. La sécurité ainsi que le bien-être de nos élèves (les enfants sont perturbés lorsqu’une personne étrangère pénètre dans leur environnement) font partie de notre priorité.
    
    Une visite est prévue lorsque l’école est en mesure de pouvoir accueillir l’enfant à la rentrée.
    
    Dans le cadre des inscription, nous communiquons exclusivement par email ! Soyez vigilants lors de l’encodage de votre adresse email.`
  },
  {
    id: "contact",
    description: `
    Adresse :
    Rue de Linthout 50
    
    1030 Schaerbeek
    
    Téléphone:
    + 32 2 736 26 19
    
    Email :
    secretariat@vf-fondamental.be
    
    Secrétariat ouvert de 8h15 à 16h30 (sauf le mercredi jusque 16h00) durant les jours scolaires
    `
  }
];

const Description = ({ desc }) => {
  if (!desc) {
    return <div>...Loading!!</div>;
  }

  return <div className="ui segment">{data[desc].description}</div>;
};

export default Description;
