import React from "react";
import DataTable from "./DataTable";

class Table extends React.Component {
  render() {
    const headings = [
      "Semaine",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Notes"
    ];

    const rows = [
      [
        6,
        "Lasagne vegetariene",
        "Filet de dindonneau aux poireaux a la creme, pomme nature",
        "Poulet sauce chasseur",
        "Salade bavaroise",
        "Carbonade de boeuf aux carottes, puree",
        ""
      ],
      [
        7,
        "Hachis parmentier, choux-fleurs *",
        "Penne bolognaise **",
        "Brochette de poulet sauce archiduc, pommes persillees ",
        "Boulettes a la liegeoise, legumes du potager pommes sautees",
        "Boudin compote puree",
        "* - boeuf et veau, ** porc et boeuf"
      ],
      [
        8,
        "Emince boeuf curry riz",
        "Pain de viande, gratin de pdt, courgette",
        "Saucisse de campagne, jardiniere de legumes, pommes nature *",
        "Hachis parmentier aux epinard",
        "Fish-stick, potee au carottes a la creme sauce tartare **",
        " * - porc, ** - poisson"
      ],
      [
        9,
        "Penne arabiatta",
        "Hamburger de boeuf, salsifi a la creme, puree",
        "Couscous a la marocaine, chipolata *",
        "Blanquette  de veau aux legumes, pommes nature",
        "Falafel quinoa petits legumes, sauce tomatee",
        "*- volaille"
      ]
    ];
    return (
      <div>
        <h1 style={{ top: "16px", padding: "10px" }}>Menu chaud</h1>
        <DataTable headings={headings} rows={rows} />
      </div>
    );
  }
}

export default Table;
