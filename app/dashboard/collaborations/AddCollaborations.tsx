import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToColab } from "../../../store/features/collaborationSlice";

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddCollaborations = ({ setIsOpen }: ModalProps) => {
  const [formData, setFormData] = useState({
    brand: "",
    campaign: "",
    status: "",
    budget: "",
    dueDate: "",
  });
  const dispatch = useDispatch();

  const formattedDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "budget" ? `₹${value}` : value,
      [name]: name === "dueDate" ? formattedDate(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addToColab(formData));
    console.log(formData);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl animate-scaleIn">
        <h2 className="text-2xl font-bold mb-4 text-black">
          Add Collaborations
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-black text-sm font-medium">
              Brand
            </label>

            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-black font-medium">
              Campaign
            </label>

            <input
              type="text"
              name="campaign"
              value={formData.campaign}
              onChange={handleChange}
              className="w-full rounded-lg text-black border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-black font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            >
              <option value="Active">Active</option>
              <option value="Pending"> Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm text-black font-medium">
              Budget
            </label>

            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-lg text-black border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-black font-medium">
              Due Date
            </label>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full rounded-lg text-black border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-gray-300 px-4 py-2 bg-blue-600 "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCollaborations;
