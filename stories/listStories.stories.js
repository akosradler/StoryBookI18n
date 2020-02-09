import AppwithTranslation from "./AppWithTranslation";
import List from "../components/List";
import React from "react";
import { storiesOf } from "@storybook/react";

export default {
  title: "List",
  component: List
};

const data = [
  { id: 1, name: "toBeTranslatedA" },
  { id: 2, name: "toBeTranslatedB" }
];

storiesOf("List", module).add("withSampleData", () => (
  <AppwithTranslation>
    <List items={data} />
  </AppwithTranslation>
));
