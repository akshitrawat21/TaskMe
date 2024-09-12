import React, { useState } from "react";
import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator"; // Add this import

const Card = ({ title, id, column, handleDragStart, handleDelete }) => {
  const [showDelete, setShowDelete] = useState(false);

  const toggleDeleteButton = () => {
    setShowDelete((prev) => !prev);
  };

  const onDelete = (e) => {
    e.stopPropagation(); // Prevent triggering card click
    handleDelete(id);
  };

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        onClick={toggleDeleteButton}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing relative"
      >
        <p className="text-sm text-neutral-100">{title}</p>
        {showDelete && (
          <button
            onClick={onDelete}
            className="absolute top-0 right-1 text-red-500 text-xs"
          >
            Delete
          </button>
        )}
      </motion.div>
    </>
  );
};

export default Card;
