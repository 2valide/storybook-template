
import React from "react";
import PopUp from "./PopUp.jsx"; // Importation du composant

export default {
    title: "Components/PopUp", // Nom affiché dans Storybook
    component: PopUp,
};

// Template sans JSX, utilisant React.createElement
const Template = (args) => React.createElement(PopUp, args);

export const Default = Template.bind({});
Default.args = {};

export const CustomMessage = Template.bind({});
CustomMessage.args = {
    message: "Votre Adresse Mail ou votre Mot de passe est incorrecte",
};
