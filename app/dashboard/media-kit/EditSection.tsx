import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editSection,
  editSocialSection,
  editCampainSection,
  addCampainSection,
} from "../../../store/features/mediaKitSlice";

// type ModalProps = {
//   setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   data: {};
// };
const EditSection = ({ setEditOpen, data }) => {
  const [formData, setFormData] = useState(data.data?.about);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(addItem(formData));
    dispatch(
      editSection({
        sectionId: data.id,
        newData: formData,
      }),
    );
    // console.log(formData);
    setEditOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl animate-scaleIn">
        <h2 className="text-2xl font-bold mb-4 text-black">Add Section</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-black text-sm font-medium">
              Edit
            </label>

            <input
              type="text"
              name="type"
              value={formData}
              onChange={handleChange}
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setEditOpen(false)}
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

const SocialAnalytics = ({ item, setSocialEdit }) => {
  const [formData, setFormData] = useState({
    platform: item.platform,
    followers: item.followers,
    engagement: item.engagement,
    icon: item.icon,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // dispatch(addItem(formData));
    dispatch(
      editSocialSection({
        formData,
        item,
        // sectionId: data.id,
        // newData: formData,
      }),
    );
    // console.log(formData);
    setSocialEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl animate-scaleIn">
        <h2 className="text-2xl font-bold mb-4 text-black">Add Section</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-black text-sm font-medium">
              followers
            </label>

            <input
              type="text"
              name="followers"
              value={formData.followers}
              onChange={handleChange}
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-black text-sm font-medium">
              Edit
            </label>

            <input
              type="text"
              name="engagement"
              value={formData.engagement}
              onChange={handleChange}
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setSocialEdit(false)}
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

const CampaignEditor = ({ item, setCompaignEdit }) => {
  const addArrLength = useSelector((state: RootState) => state.mediaKit)
    .sections[3].data.length;
  const [formData, setFormData] = useState({
    id: item !== null ? item.id : addArrLength + 1,
    brand: item !== null ? item.brand : "",
    campaign: item !== null ? item.campaign : "",
    reach: item !== null ? item.reach : "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item !== null) {
      dispatch(
        editCampainSection({
          formData,
          item,
        }),
      );
    } else {
      dispatch(
        addCampainSection({
          formData,
        }),
      );
    }
    setCompaignEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl animate-scaleIn">
        <h2 className="text-2xl font-bold mb-4 text-black">Add Section</h2>
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
            <label className="mb-1 block text-black text-sm font-medium">
              Campaign
            </label>

            <input
              type="text"
              name="campaign"
              value={formData.campaign}
              onChange={handleChange}
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-black text-sm font-medium">
              Reach
            </label>

            <input
              type="text"
              name="reach"
              value={formData.reach}
              onChange={handleChange}
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setCompaignEdit(false)}
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
export { EditSection, SocialAnalytics, CampaignEditor };
