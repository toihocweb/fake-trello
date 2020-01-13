import { GET_LIST } from "../actions/types";

const initialState = {
  list: [
    {
      _id: "5e1be590bc57d9500125f290",
      title: "Code.",
      tasks: [
        {
          _id: "5e1be59000aeacec32bb9a02",
          des:
            "Nisi culpa tempor sit tempor ex sunt culpa officia mollit anim nisi esse proident consequat. Est ut enim incididunt nostrud sunt ullamco excepteur incididunt deserunt culpa exercitation laboris esse commodo. Incididunt reprehenderit adipisicing mollit proident. Et dolore adipisicing id dolore culpa ullamco."
        },
        {
          _id: "5e1be5900e4d8ed6d362dba9",
          des:
            "Dolore adipisicing elit deserunt ex est duis labore veniam. Tempor laborum occaecat excepteur laboris. Sint adipisicing velit anim cupidatat aute. Quis nisi reprehenderit ex duis exercitation quis consectetur enim commodo elit esse nostrud enim Lorem."
        },
        {
          _id: "5e1be590e4b780b171256c84",
          des:
            "Excepteur minim mollit qui proident. Cupidatat id elit mollit proident ea commodo commodo aliqua amet amet. Id duis consectetur ipsum laboris proident aute dolore fugiat eiusmod. Tempor exercitation Lorem laborum minim id."
        },
        {
          _id: "5e1be5904483a058913bbd08",
          des:
            "Voluptate qui sit id labore incididunt Lorem dolore exercitation ad fugiat elit laborum. Eu tempor eiusmod officia aute. Lorem eu laborum veniam cillum minim sit anim. Nulla voluptate non ea veniam ad proident."
        },
        {
          _id: "5e1be5907b79391bd6715f6f",
          des:
            "Laboris Lorem deserunt in adipisicing. Ea minim ipsum laborum ea veniam. Fugiat fugiat irure excepteur enim. Irure enim labore do non nostrud et ea."
        },
        {
          _id: "5e1be590f70b3c3a96d20984",
          des:
            "Velit ullamco labore fugiat do. Pariatur commodo Lorem sunt amet id. Laboris cupidatat nostrud laboris est Lorem cillum est. Aliquip nisi sunt enim commodo reprehenderit."
        },
        {
          _id: "5e1be5907df9ce19edb9ba35",
          des:
            "Ipsum nisi laboris duis cillum enim officia. Nulla amet ipsum esse reprehenderit pariatur reprehenderit. Nulla excepteur pariatur ullamco fugiat aliqua sint elit elit veniam sint ex et elit. Lorem ea ex esse incididunt occaecat anim culpa nisi eu voluptate est commodo sit."
        }
      ]
    },
    {
      _id: "5e1be59061f7b9a4226fd605",
      title: "Make love",
      tasks: [
        {
          _id: "5e1be590106afd3251b277b7",
          des:
            "Occaecat sit ipsum nostrud fugiat laborum. Ullamco aliquip irure tempor adipisicing sunt labore Lorem nisi nulla. Cupidatat magna aute do pariatur. Qui nisi non dolore deserunt eiusmod fugiat aliqua ipsum."
        },
        {
          _id: "5e1be59082ce9fa09bd2a38a",
          des:
            "Officia ipsum reprehenderit laborum veniam nostrud aliquip do id excepteur. Magna ipsum ad magna minim nisi sunt ad sunt quis consectetur do velit. Sint minim proident ex nostrud adipisicing labore consectetur nulla. Dolor minim laborum ad commodo fugiat ut elit ad consequat Lorem."
        },
        {
          _id: "5e1be5901d59ae1bc0ce175c",
          des:
            "Consectetur occaecat nulla cillum do consectetur veniam in cupidatat mollit anim nulla irure pariatur quis. Excepteur in aliquip elit amet sint culpa labore elit velit occaecat nulla mollit. Ad officia culpa adipisicing elit. Officia aliquip cupidatat nostrud cillum eiusmod Lorem sunt aliqua qui qui eu nostrud commodo do."
        },
        {
          _id: "5e1be59062db4e0cf9977343",
          des:
            "Cupidatat mollit excepteur reprehenderit incididunt elit officia labore occaecat nisi dolore consectetur ipsum sunt nulla. Pariatur aliqua nostrud aute voluptate aliqua duis ut qui officia reprehenderit sit qui. Dolor eu dolor qui amet qui fugiat velit consequat duis qui. Commodo ea minim veniam non consectetur aute sit cupidatat."
        },
        {
          _id: "5e1be590192d656ea0383332",
          des:
            "Exercitation laborum qui ullamco nostrud quis esse dolore. Consequat do quis magna Lorem eiusmod sint anim ullamco aliqua laboris ut aliquip consequat. Cupidatat occaecat reprehenderit consectetur velit duis commodo qui anim culpa. Cupidatat anim nisi et ex exercitation fugiat fugiat reprehenderit."
        },
        {
          _id: "5e1be590b550f10e876eb4a7",
          des:
            "Ullamco exercitation ipsum nulla aute elit irure mollit. Proident elit ipsum nulla irure Lorem. Duis officia duis nostrud sint laboris id nostrud. Eiusmod quis enim deserunt dolor."
        }
      ]
    },
    {}
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {};
    default:
      return state;
  }
}
