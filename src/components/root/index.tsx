import { Node } from "../node";

export const Root = () => {
  const marginLeft = 0;

  const data = {
    id: 20603,
    name: "{AB004797-569F-44A5-8683-2FC908AC129F}",
    children: [
      {
        id: 20668,
        name: "INSERT TO",
        children: [
          {
            id: 20669,
            name: "second",
            children: [],
          },
        ],
      },
      {
        id: 20666,
        name: "KIRA",
        children: [],
      },
    ],
  };

  return (
    <Node
      children={data.children}
      id={data.id}
      name={"Root"}
      isSelected={true}
      marginLeft={marginLeft}
    />
  );
};
