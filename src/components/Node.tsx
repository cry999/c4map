import { Handle, Position } from 'reactflow';
import { Person } from '../apidef/models/Person.ts';

export class PersonNodeData {
  tags!: string[];
  name!: string;
  description?: string;

  constructor(person: Person) {
    this.tags = person.tags?.split(',') || [];
    this.name = person.name!;
    this.description = person.description;
  }
}

export interface PersonNodeProps {
  data: PersonNodeData;
}

export const PersonNode = ({ data }: PersonNodeProps) => {
  return (
    <div>
      <div style={{ width: "50px", height: "50px", border: "1px solid #eee", borderRadius: "50px", padding: "5px", background: "white", marginLeft: "auto", marginRight: "auto", marginBottom: "-10px" }}>
      </div>
      <div style={{ border: "1px solid #eee", borderRadius: "5px", padding: "5px", background: "white" }}>
        <Handle type="target" position={Position.Left} />
        <div>
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p>{data.tags.join(', ')}</p>
        </div>
        <Handle type="source" position={Position.Right} />
        <Handle type="source" position={Position.Bottom} />
      </div>
    </div>
  );
};

