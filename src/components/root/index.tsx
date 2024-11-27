import { useState } from "react";
import { Node } from "../node";
import { useQuery } from "react-query";
import { getTree } from "../../api/getTree";
import { ROOT_NAME } from "../../constants";

export const Root = () => {
  const [selectedNodeId, setSelectedNodeId] = useState(0);

  const { data } = useQuery("tree", getTree);

  return data ? (
    <Node
      children={data.children}
      id={data.id}
      name={ROOT_NAME}
      selectedNodeId={selectedNodeId}
      setSelectedNodeId={setSelectedNodeId}
    />
  ) : null;
};
