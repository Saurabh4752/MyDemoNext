import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { updateInitialState } from "../../../store/features/mediaKitSlice";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type CampaignItem = {
  id: number;
  brand: string;
  campaign: string;
  reach: string;
};

type ModalProps = {
  setCompaignEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setCompaignEditItem: React.Dispatch<
    React.SetStateAction<CampaignItem | null>
  >;
};

const CampaignPage = ({ setCompaignEdit, setCompaignEditItem }: ModalProps) => {
  const mediaKit = useSelector((state: RootState) => state.mediaKit).sections[3]
    .data;
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(mediaKit);
  }, [mediaKit]);

  console.log(mediaKit);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setData((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);

      const newIndex = items.findIndex((item) => item.id === over.id);

      return arrayMove(items, oldIndex, newIndex);
    });
    dispatch(updateInitialState(data));
  };

  const Item = ({ item, setCompaignEdit, setCompaignEditItem }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({
        id: item.id,
      });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      //   padding: "12px",
      marginBottom: "10px",
      //   background: "#f2f2f2",
      borderRadius: "8px",
      //   border: "1px solid #ddd",
      cursor: "grab",
    };
    const openCampaignEditor = (item) => {
      setCompaignEdit(true);
      setCompaignEditItem(item);
      console.log("remdered");
    };

    return (
      <div ref={setNodeRef} style={style}>
        <div
          key={item.brand}
          className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 lg:flex-row lg:items-center lg:justify-between"
        >
          <div
            className="flex items-center gap-4"
            style={style}
            {...attributes}
            {...listeners}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 text-lg font-bold text-white">
              {item.brand[0]}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">{item.brand}</h3>

              <p className="text-zinc-400">{item.campaign}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
              {item.reach}
            </span>

            <button
              className="rounded-lg border border-zinc-700 p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
              onClick={() => openCampaignEditor(item)}
            >
              <Pencil size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={data.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {data.map((item) => (
            <Item
              key={item.id}
              item={item}
              setCompaignEditItem={setCompaignEditItem}
              setCompaignEdit={setCompaignEdit}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};
export default CampaignPage;
