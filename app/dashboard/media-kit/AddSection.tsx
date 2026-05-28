import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../../store/features/mediaKitSlice";
const AddSection = ({ setIsOpen }) => {
  const [formData, setFormData] = useState({
    type: "",
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // dispatch(addItem(formData));
    dispatch(
      addItem({
        id: `${formData.type}-section`,
        type: formData.type,

        data: [
          formData.field1,
          formData.field2,
          formData.field3,
          formData.field4,
        ],
      }),
    );
    console.log(formData);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl animate-scaleIn">
        <h2 className="text-2xl font-bold mb-4 text-black">Add Section</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-black text-sm font-medium">
              Section Type
            </label>

            <input
              type="text"
              name="type"
              value={formData.type}
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
              name="field1"
              value={formData.field1}
              onChange={handleChange}
              className="w-full rounded-lg text-black border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-black font-medium">
              Campaign
            </label>

            <input
              type="text"
              name="field2"
              value={formData.field2}
              onChange={handleChange}
              className="w-full rounded-lg text-black border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-black font-medium">
              Campaign
            </label>

            <input
              type="text"
              name="field3"
              value={formData.field3}
              onChange={handleChange}
              className="w-full rounded-lg text-black border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-black font-medium">
              Campaign
            </label>

            <input
              type="text"
              name="field4"
              value={formData.field4}
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
export default AddSection;
