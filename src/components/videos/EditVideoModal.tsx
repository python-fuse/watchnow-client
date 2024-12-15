import { Video } from "@/lib/definitions";
import Modal from "../global/Modal";
import FormInput from "../global/FormInput";

interface EditVideoModalProps {
  video: Video;
  closeModal: () => void;
}

const EditVideoModal: React.FC<EditVideoModalProps> = ({ video }) => {
  return (
    <Modal>
      <div className="w-3/4 md:w-3/5 bg-white rounded-lg h-3/4">
        <div className="flex flex-col gap-y-8 p-4">
          <h2 className="text-2xl font-bold">Edit Video</h2>

          <form>
            <FormInput
              id="title"
              label="Title"
              type="text"
              placeholder="Title"
              value={video.title}
              onChange={() => {}}
            />
          </form>
        </div>
      </div>
      ;
    </Modal>
  );
};
export default EditVideoModal;
