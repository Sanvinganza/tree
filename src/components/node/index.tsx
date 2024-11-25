import { useState } from "react";

export type TNode = {
  id: number;
  name: string;
  children: TNode[];
};

export const Node = ({ node, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(node.value);

  const handleEdit = () => {
    onEdit(node.id, value);
    setEditing(false);
  };

  return (
    <div>
      <div>
        <span>{node.name}</span>
        <button onClick={() => setEditing(true)}>Редактировать</button>
      </div>
      {node.children && node.children.length > 0 && (
        <div style={{ paddingLeft: "20px" }}>
          {node.children.map((child: TNode) => (
            <Node key={child.id} node={child} onEdit={onEdit} />
          ))}
        </div>
      )}
    </div>
  );
};
