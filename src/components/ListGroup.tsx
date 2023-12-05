import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item : string) => void;
}

function ListGroup({items, heading, onSelectItem} : ListGroupProps) {
  const [selectedIndex, setSelectedIdx] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {!items.length && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, idx) => (
          <li className={selectedIndex === idx ? 'list-group-item active' : 'list-group-item'} key={idx} onClick={() => {onSelectItem(item)}}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
