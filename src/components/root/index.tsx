import { useState } from "react";
import { Node } from "../node";
import { useQuery } from "react-query";
import { getTree } from "../../api/getTree";

export const Root = () => {
  const [isSelectedNodeId, setIsSelectedNodeId] = useState(0);

  const { data } = useQuery("tree", getTree);

  return data ? (
    <Node
      children={data.children}
      id={data.id}
      name={"Root"}
      isSelectedNodeId={isSelectedNodeId}
      setIsSelectedNodeId={setIsSelectedNodeId}
    />
  ) : null;
};
