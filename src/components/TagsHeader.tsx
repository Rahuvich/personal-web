import React from "react";
import Tag from "./Tag";
interface Props {
  tags: string[];
}

function TagsHeader(props: Props) {
  return (
    <div className="mx-3">
      <h5 className="text-muted">Filtering by:</h5>
      <p>
        {props.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </p>
    </div>
  );
}

export default TagsHeader;
