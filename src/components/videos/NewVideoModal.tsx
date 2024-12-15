import { Video } from "@/lib/definitions";
import Modal from "../global/Modal";
import FormInput from "../global/FormInput";

interface NEwVideoModalProps {
  video: Video;
  closeModal: () => void;
}

import NewVideoForm from "@/components/videos/NewVideoForm";
import { FaX } from "react-icons/fa6";
const NewVideoModal: React.FC<NEwVideoModalProps> = ({ closeModal }) => {
  return (
    <Modal>
      <div className="w-3/4 md:w-2/5 mx-auto  space-y-8  p-4 bg-white rounded-lg ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl  font-bold">New Video</h2>
          <FaX size={18} color="red" onClick={() => closeModal()} />
        </div>

        <NewVideoForm close={closeModal} />
      </div>
    </Modal>
  );
};
export default NewVideoModal;
