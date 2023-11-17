import { nanoid } from "nanoid";
import apiTeam from '../public/apiTeam.png'
import graphQL from '../public/graphQL.png'
import superCharge from '../public/superchargeWorkflow.png'


export const features = [
    {
      id: nanoid(),
      icon: apiTeam,
      title: "Dedicated API Team",
      desc: "Our team are available for user's question via our slack Developer Community and email",
    },
    {
      id: nanoid(),
      icon:graphQL,
      title: "Our API uses GraphQL",
      desc: "No handling server side. Get manu API's response in a single request.",
    },
    {
      id: nanoid(),
      icon: superCharge,
      title: "Supercharge your workflow",
      desc: "Automotive workflows, integrate and analyse data and  take marvel to the next level.",
    },
  ];